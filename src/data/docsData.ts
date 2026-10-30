import { APP_LINKS } from '../constants/links';

export interface DocArticle {
  id: string;
  title: string;
  category: 'User' | 'Developer' | 'Setup' | 'Workflow';
  content: string;
}

export const DOCS_ARTICLES: DocArticle[] = [
  {
    id: 'user-guide',
    title: 'User Setup & Guide',
    category: 'User',
    content: `# 🖥️ LifeMirror Desktop: User Guide

LifeMirror Desktop turns your raw daily computer activity logs into a serpentine scrollable timeline with continuous focus metrics, distraction defense, and optional offline AI summaries.

- **GitHub Repository**: [PieApps/lifemirror-desktop](${APP_LINKS.github.repo})
- **Releases**: [Latest Releases & Binaries](${APP_LINKS.github.releases})

---

## 1. Installation

\`\`\`bash
# Clone the repository and run locally
git clone ${APP_LINKS.github.repo}.git
cd lifemirror-desktop
npm install
npm run tauri dev
\`\`\`

---

## 2. Chrome Companion Extension Setup

Browser tab tracking uses Chrome's secure **Native Messaging API** (stdio pipes) instead of local network sockets.

- **Official Web Store**: Install directly from the [Chrome Web Store](${APP_LINKS.ecosystem.chromeExtension}). Supported on Chrome, Brave, Edge, Arc, Opera, and Vivaldi.
- **Developer / Unpacked Mode**:
  1. Open Chrome and navigate to \`chrome://extensions/\`.
  2. Enable **Developer Mode** (top right toggle).
  3. Click **Load unpacked** and select \`companion-extension/\`.
  4. Run \`npm run install-host\` to register the native messaging host manifest.

---

## 3. LifeMirror Mobile Companion (Android)

For mindful habit and time reflection when you are away from your computer:
- Download [LifeMirror on Google Play](${APP_LINKS.ecosystem.androidApp}).
- 100% offline, zero cloud accounts, and serpentine timeline tracking on your mobile phone.

---

## 4. Optional Local AI Integration (Ollama)

LifeMirror Desktop operates 100% standalone out of the box. If you wish to enable automated 2-sentence summaries and offline chat, you can optionally connect Ollama:

1. Download and run [Ollama](https://ollama.com).
2. Open LifeMirror Desktop **Settings** and set endpoint to \`http://localhost:11434\`.
3. Click **Download Model Native** to download \`llama3.2\` directly inside the app.
`
  },
  {
    id: 'developer-docs',
    title: 'Developer & Architecture Guide',
    category: 'Developer',
    content: `# 🛠️ LifeMirror Desktop: Technical Architecture

LifeMirror Desktop uses a local-first architecture combining Tauri 2.0 (Rust backend), React frontend, and SQLCipher database encryption.

---

## SQLCipher Encrypted Database Schema

\`\`\`sql
-- activity_logs table
CREATE TABLE activity_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  app_name TEXT NOT NULL,
  window_title TEXT NOT NULL,
  start_time TEXT NOT NULL,
  duration INTEGER NOT NULL,
  source TEXT NOT NULL,
  url TEXT,
  icon_url TEXT,
  domain_tag TEXT,
  notes TEXT
);
\`\`\`

---

## Serpentine S-Curve Bézier Calculus

Cubic Bézier curve segments sweep alternating left and right margins down the page:
$$y = (i + 0.5) \\times \\text{rowHeight}$$
$$x = (i \\pmod 2 == 0) ? \\text{width} \\times 0.875 : \\text{width} \\times 0.125$$
`
  },
  {
    id: 'ollama-setup',
    title: 'Optional Ollama Setup',
    category: 'Setup',
    content: `# 🤖 Optional Local AI Configuration with Ollama

LifeMirror Desktop works 100% standalone. If you choose to enable local LLMs, LifeMirror Desktop interfaces via Ollama's HTTP API.

1. **Endpoint**: \`http://localhost:11434/api/generate\`
2. **Model Recommendations**: \`llama3.2\`, \`mistral\`, \`phi3\`
3. **Zero Network Call Guarantee**: System prompts are assembled locally from SQLite metrics and sent exclusively to localhost.
`
  },
  {
    id: 'workflow-guide',
    title: 'Workflow & Security Guidelines',
    category: 'Workflow',
    content: `# 📋 Workflow & Verification Protocol

Before committing changes to LifeMirror Desktop, adhere to the strict verification rulebook:

1. **Incognito Rule**: If \`incognito\` setting is \`true\`, skip all database write transactions and clear shared active focus state immediately.
2. **Compilation**: Run \`npm run build\` and \`cargo check --manifest-path src-tauri/Cargo.toml\`.
`
  }
];
