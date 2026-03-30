"use client";

import { useMemo, useState } from "react";
import styles from "@/styles/shell.module.css";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

const explorerItems = [
  { label: "home.tsx", type: "tsx" },
  { label: "about.html", type: "html" },
  { label: "projects.js", type: "js" },
  { label: "skills.json", type: "json" },
  { label: "experience.ts", type: "ts" },
  { label: "contact.css", type: "css" },
  { label: "README.md", type: "md" },
  { label: "Divyanshu_Prakash_Resume.pdf", type: "pdf" },
];

const activityIcons = ["files", "search", "git", "extensions", "stats"] as const;

const menuItems = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help", "Copilot"];

const initialTabs = [{ label: "home.tsx", icon: "tsx" }];

const fileContent: Record<string, { title: string; body: string }> = {
  "home.tsx": {
    title: "home.tsx",
    body: "This is the home view. Rendering the portfolio hero here.",
  },
  "about.html": {
    title: "about.html",
    body: "About section placeholder. Add your bio, highlights, and story here.",
  },
  "projects.js": {
    title: "projects.js",
    body: "Projects list placeholder. Connect your project data here.",
  },
  "skills.json": {
    title: "skills.json",
    body: "Skills data placeholder. Add your stack and tools here.",
  },
  "experience.ts": {
    title: "experience.ts",
    body: "Experience timeline placeholder. Add roles and impact here.",
  },
  "contact.css": {
    title: "contact.css",
    body: "Contact styles placeholder. Customize your contact section here.",
  },
  "README.md": {
    title: "README.md",
    body: "README placeholder. Add usage and overview details here.",
  },
  "Divyanshu_Prakash_Resume.pdf": {
    title: "Divyanshu_Prakash_Resume.pdf",
    body: "Resume placeholder. Link to your actual PDF or embed it.",
  },
};

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [active, setActive] = useState("home.tsx");
  const [tabs, setTabs] = useState(initialTabs);

  const items = useMemo(
    () =>
      explorerItems.map((item) => ({
        ...item,
        active: item.label === active,
      })),
    [active]
  );

  const openTab = (label: string, icon: string) => {
    setActive(label);
    setTabs((prev) => {
      if (prev.find((t) => t.label === label)) return prev;
      return [...prev, { label, icon }];
    });
  };

  const closeTab = (label: string) => {
    setTabs((prev) => {
      const next = prev.filter((t) => t.label !== label);
      if (active === label) {
        const fallback = next[next.length - 1]?.label || "home.tsx";
        setActive(fallback);
      }
      return next.length ? next : initialTabs;
    });
  };

  return (
    <div className={`${styles.shell} ${!sidebarOpen ? styles.shellCollapsed : ""}`}>
      <div className={styles.windowBar}>
        <div className={styles.windowControls}>
          <span className={styles.controlClose} />
          <span className={styles.controlMin} />
          <span className={styles.controlMax} />
        </div>
        <div className={styles.windowTitle}>
          <span className={styles.windowIcon} aria-hidden>
            🔍
          </span>
          <span className={styles.windowText}>divyanshu-prakash : portfolio</span>
          <span className={styles.windowSpacer} />
          <span className={styles.windowKey}>Ctrl</span>
          <span className={styles.windowKey}>P</span>
        </div>
      </div>

      <div className={styles.menuBar}>
        {menuItems.map((item) => (
          <button key={item} className={styles.menuItem}>
            {item}
          </button>
        ))}
      </div>

      <aside className={styles.activityBar}>
        <div className={styles.activityTop}>
          <button
            className={styles.activityButton}
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle explorer"
          >
            ≡
          </button>
          {activityIcons.map((icon) => (
            <button key={icon} className={styles.activityIcon} aria-label={icon}>
              {icon.slice(0, 1).toUpperCase()}
            </button>
          ))}
        </div>
        <div className={styles.activityBottom}>
          <button className={styles.activityIcon} aria-label="settings">
            ⚙
          </button>
        </div>
      </aside>

      <aside
        className={`${styles.explorer} ${sidebarOpen ? styles.explorerOpen : styles.explorerClosed}`}
      >
        <div className={styles.explorerHeader}>
          <span>PORTFOLIO</span>
          <div className={styles.explorerActions}>
            <button className={styles.iconButton} aria-label="New file">
              ＋
            </button>
            <button className={styles.iconButton} aria-label="More">
              ⋯
            </button>
          </div>
        </div>
        <div className={styles.explorerSection}>
          <div className={styles.sectionTitle}>Home</div>
          <ul className={styles.fileList}>
            {items.map((item) => (
              <li key={item.label}>
                <button
                  className={`${styles.fileItem} ${item.active ? styles.fileActive : ""}`}
                  onClick={() => openTab(item.label, item.type)}
                >
                  <span className={`${styles.fileIcon} ${styles[item.type] || ""}`} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className={styles.mainArea}>
        <div className={styles.tabBar}>
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`${styles.tabItem} ${tab.label === active ? styles.tabActive : ""}`}
              onClick={() => setActive(tab.label)}
            >
              <span className={`${styles.fileIcon} ${styles[tab.icon] || ""}`} />
              {tab.label}
              <button className={styles.tabClose} aria-label="Close">
                <span onClick={() => closeTab(tab.label)}>×</span>
              </button>
            </div>
          ))}
          <button className={styles.tabAdd} aria-label="New file">
            +
          </button>
        </div>
        <div className={styles.topbar}>
          <div className={styles.breadcrumbs}>divyanshu-prakash • portfolio</div>
          <div className={styles.topbarActions}>
            <button className={styles.iconButton} aria-label="Search">
              ⌘F
            </button>
          </div>
        </div>
        <div className={styles.content}>
          {active === "home.tsx" ? (
            children
          ) : active === "about.html" ? (
            <About />
          ) : active === "projects.js" ? (
            <Projects />
          ) : active === "skills.json" ? (
            <Skills />
          ) : active === "contact.css" ? (
            <Contact />
          ) : (
            <div className={styles.filePane}>
              <div className={styles.filePaneHeader}>{fileContent[active]?.title}</div>
              <p className={styles.filePaneBody}>{fileContent[active]?.body}</p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <button className={styles.statusItem}>⚠ 0</button>
          <button className={styles.statusItem}>⎇ main</button>
          <button className={styles.statusItem}>🔄 Divyanshu's Portfolio</button>
        </div>
        <div className={styles.statusRight}>
          <button className={styles.statusItem}>Copilot</button>
          <button className={styles.statusItem}>TypeScript React</button>
          <button className={styles.statusItem}>UTF-8</button>
          <button className={styles.statusItem}>Prettier</button>
          <button className={styles.statusItem}>💜 Divyanshu Dark</button>
          <button className={styles.statusItem}>01:53</button>
        </div>
      </div>
    </div>
  );
}
