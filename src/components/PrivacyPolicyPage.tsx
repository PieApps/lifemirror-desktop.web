import React, { useState, useEffect } from 'react';
import {
  Shield,
  Lock,
  Database,
  Cpu,
  EyeOff,
  Terminal,
  Trash2,
  Globe,
  ArrowLeft,
  Search,
  Copy,
  Check,
  Download,
  ShieldCheck,
  HardDrive,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
}

interface PolicySection {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  content: React.ReactNode;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBackToHome }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('zero-cloud');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCopyPolicy = () => {
    const plainText = policySections
      .map((sec) => `${sec.title.toUpperCase()}\n${sec.id}\n---\n`)
      .join('\n');
    navigator.clipboard.writeText(
      `LIFEMIRROR DESKTOP - PRIVACY POLICY & ZERO-CLOUD MANDATE\nLast Updated: September 9, 2026\nStatus: 100% Local & Encrypted\n\n${plainText}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPolicy = () => {
    const content = `LIFEMIRROR DESKTOP - PRIVACY POLICY & ZERO-CLOUD MANDATE
Last Updated: September 9, 2026
Status: 100% Local & Encrypted

1. ZERO-CLOUD & ZERO TELEMETRY ARCHITECTURE
LifeMirror Desktop is engineered as a 100% offline local utility. No user data, active window logs, keystrokes, screenshots, or reflection summaries are ever transmitted to remote servers. The application operates without telemetry SDKs, tracking pixels, or remote error reporting services.

2. SQLCIPHER AES-256 STORAGE & KEY SECURITY
All database write transactions are encrypted at the page level using SQLCipher (AES-256-CBC). Data files stored on disk (activity_logs, journal_entries, settings) remain unreadable without the local master encryption key. Encryption keys never leave local device storage.

3. LOCAL OLLAMA LLM PROCESSING
AI reflections and focus summaries are computed exclusively on your device via local Ollama inference models. Prompts and completions are processed in local memory and are never sent to third-party LLM APIs or external cloud services.

4. NATIVE OS FOCUS & ACTIVITY TRACKING
The native Tauri 2.0 Rust backend captures window titles and active application process names locally to render time-series focus analysis. Activity logs are stored exclusively in your local encrypted SQLCipher database. User-defined blocklists allow instant suppression of tracking for sensitive applications.

5. COMPANION EXTENSION & INCOGNITO ISOLATION
The LifeMirror Companion Browser Extension communicates with the desktop host exclusively via local Native Messaging (stdin/stdout). When Incognito Mode is toggled, active session caches are isolated to volatile memory and database writing is instantly suspended.

6. USER DATA OWNERSHIP, EXPORT & TOTAL PURGE
You maintain complete ownership of all generated data. LifeMirror Desktop provides 1-click JSON and SQLite database exports. Triggering a Database Reset immediately overwrites and deletes local database files with no remote backups retained.

7. THIRD-PARTY DISCLOSURES & OPEN SOURCE VERIFICATION
LifeMirror Desktop contains zero third-party data broker integrations, zero ad trackers, and zero network cookies. The codebase is transparent and open-source under the MIT license, allowing independent security auditing.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'LifeMirror_Desktop_Privacy_Policy.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const policySections: PolicySection[] = [
    {
      id: 'zero-cloud',
      title: '1. Zero-Cloud & Zero Telemetry Architecture',
      category: 'Core Architecture',
      icon: ShieldCheck,
      badge: '100% Offline',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            LifeMirror Desktop was designed from the ground up on a strict <strong className="text-white">Zero-Cloud Guarantee</strong>. Unlike cloud-reliant productivity tools, LifeMirror operates entirely within your local computing environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-black/50 p-4 rounded-xl border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4" /> Zero Telemetry SDKs
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                No Google Analytics, PostHog, Mixpanel, Sentry, or pingbacks are embedded in the application.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-xl border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4" /> Air-Gapped Flight Isolation
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                The desktop app executes with full functionality even when your device is completely disconnected from the internet.
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Every session log, productivity breakdown, reflection note, and focus score is calculated locally on your CPU/GPU and stored on your local disk.
          </p>
        </div>
      )
    },
    {
      id: 'sqlcipher',
      title: '2. SQLCipher AES-256 Storage & Key Security',
      category: 'Encryption',
      icon: Lock,
      badge: 'AES-256-CBC',
      badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Your personal data is encrypted before it ever touches your physical hard drive using <strong className="text-white">SQLCipher AES-256 page-level encryption</strong>.
          </p>
          <div className="bg-black/70 p-4 rounded-xl border border-white/10 font-mono text-xs text-gray-300 space-y-2">
            <div className="text-cyan-400 font-bold flex items-center justify-between">
              <span>SQLCipher Security Assertion</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">PRAGMA cipher_page_size = 4096</span>
            </div>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Target Tables: <code className="text-amber-300">activity_logs</code>, <code className="text-amber-300">journal_entries</code>, <code className="text-amber-300">focus_sessions</code>, <code className="text-amber-300">interdiction_events</code>.
            </p>
            <div className="p-3 rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-200 text-[11px]">
              🔒 Data files on disk are cryptographically unreadable without the local master passphrase derived on device startup.
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Encryption keys are stored securely using system keychains (Keychain Access on macOS, Secret Service API on Linux, Credential Manager on Windows) and never transmitted over network sockets.
          </p>
        </div>
      )
    },
    {
      id: 'ollama-llm',
      title: '3. Local Ollama LLM Processing & Privacy',
      category: 'AI Infrastructure',
      icon: Cpu,
      badge: 'On-Device Inference',
      badgeColor: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            LifeMirror Desktop leverages locally deployed large language models (such as <strong className="text-white">Ollama with Llama 3 or Mistral</strong>) running on your hardware (CPU or GPU).
          </p>
          <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/30 space-y-2">
            <div className="flex items-center gap-2 text-violet-300 font-semibold text-xs font-mono">
              <Cpu className="w-4 h-4" /> Localhost Endpoint Binding
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Requests are dispatched exclusively to <code className="text-violet-300 font-mono">http://127.0.0.1:11434</code>. Prompts contain zero personally identifiable information (PII) and never pass through OpenAI, Anthropic, or external API proxies.
            </p>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Reflection summaries generated by the local AI are written directly to your SQLCipher database. You maintain complete control over model selection, temperature settings, and prompt context windows.
          </p>
        </div>
      )
    },
    {
      id: 'os-tracking',
      title: '4. Native OS Focus & Activity Tracking',
      category: 'OS Integration',
      icon: Terminal,
      badge: 'Local Event Loop',
      badgeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            To provide continuous focus analytics and S-Curve timeline visualizer metrics, LifeMirror runs a low-resource background loop via its Rust/Tauri 2.0 core.
          </p>
          <ul className="space-y-2 font-mono text-xs text-gray-300">
            <li className="flex items-start gap-2 bg-black/40 p-3 rounded-lg border border-white/5">
              <span className="text-indigo-400 font-bold">•</span>
              <div>
                <strong className="text-white">Active Window Titles:</strong> Logged locally to categorize productive vs. distracting sessions.
              </div>
            </li>
            <li className="flex items-start gap-2 bg-black/40 p-3 rounded-lg border border-white/5">
              <span className="text-indigo-400 font-bold">•</span>
              <div>
                <strong className="text-white">Process Names:</strong> Extracted directly from OS window focus events.
              </div>
            </li>
            <li className="flex items-start gap-2 bg-black/40 p-3 rounded-lg border border-white/5">
              <span className="text-indigo-400 font-bold">•</span>
              <div>
                <strong className="text-white">Custom App Blocklists:</strong> You can exclude sensitive applications (e.g. password managers, banking apps, health portals) from ever being logged.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'browser-extension',
      title: '5. Companion Extension & Incognito Isolation',
      category: 'Browser Integration',
      icon: EyeOff,
      badge: 'Native Messaging',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            The optional LifeMirror Companion Web Extension communicates with the desktop app using Chrome/Firefox's standard <strong className="text-white">Native Messaging Protocol</strong> over local stdio streams.
          </p>
          <div className="bg-black/70 p-4 rounded-xl border border-amber-500/20 font-mono text-xs text-amber-300/90 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-400">
              <EyeOff className="w-4 h-4" /> Incognito & Private Window Protection
            </div>
            <p className="text-gray-300 text-[11px] leading-relaxed">
              When Incognito Mode is toggled or when browsing in private windows:
            </p>
            <div className="space-y-1 text-[11px] text-gray-400">
              <div>✓ Active database writes are instantly suspended.</div>
              <div>✓ Active session memory is held strictly in volatile RAM.</div>
              <div>✓ All temporary session caches are wiped upon closing or deactivating.</div>
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            The extension does not inject remote scripts, read web page DOM contents, or transmit browsing history to external endpoints.
          </p>
        </div>
      )
    },
    {
      id: 'data-rights',
      title: '6. User Data Ownership, Export & Total Purge',
      category: 'Data Rights',
      icon: Trash2,
      badge: 'Full Data Control',
      badgeColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            We believe that <strong className="text-white">your data belongs to you alone</strong>. LifeMirror Desktop provides built-in tools to manage, export, or destroy your recorded history at any time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            <div className="bg-black/50 p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-rose-300 font-semibold mb-2 text-xs font-mono">
                <HardDrive className="w-4 h-4" /> 1-Click JSON / SQLite Export
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Export your full focus history, timelines, and journal entries in open standard formats.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-xl border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-400 font-semibold mb-2 text-xs font-mono">
                <Trash2 className="w-4 h-4" /> Instant Database Purge
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Trigger a complete database wipe to securely overwrite and erase disk files with zero recovery remnants.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'third-party',
      title: '7. Third-Party Disclosures & Open Source Verification',
      category: 'Compliance',
      icon: Globe,
      badge: 'MIT Open Source',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            LifeMirror Desktop does not monetize user data, sell analytics, or partner with advertising networks.
          </p>
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 font-mono text-xs text-purple-200 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" /> Transparent & Auditable Codebase
            </div>
            <p className="text-gray-300 text-[11px] leading-relaxed">
              Because LifeMirror Desktop is released under the open-source MIT License, developers and cybersecurity auditors can inspect the source code on GitHub to verify our offline claims and zero-telemetry implementation.
            </p>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            If you have security or privacy questions regarding the software architecture, open an issue on our GitHub repository or contact our core maintainers.
          </p>
        </div>
      )
    }
  ];

  const filteredSections = policySections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0d0d11] text-gray-100 py-12 px-4 sm:px-6 max-w-7xl mx-auto font-sans">
      {/* Top Bar Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-violet-400" />
          <span>Back to Showcase</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            100% Local & Encrypted
          </span>
          <span className="text-xs font-mono text-gray-400 hidden sm:inline">
            Last Updated: <strong className="text-white">September 9, 2026</strong>
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 text-xs font-mono font-semibold mb-4">
          <Shield className="w-4 h-4 text-violet-400" /> Zero-Cloud Guarantee Policy
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
          LifeMirror Desktop Privacy Policy
        </h1>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
          Detailed technical and legal breakdown of our 100% offline flight model, SQLCipher AES-256 local database encryption, on-device Ollama AI processing, and strict user data ownership.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={handleCopyPolicy}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-violet-400" />}
            <span>{copied ? 'Copied Policy!' : 'Copy Plain Text'}</span>
          </button>
          <button
            onClick={handleDownloadPolicy}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/20 border border-violet-500/30 text-xs font-mono text-violet-400 dark:text-violet-300 hover:bg-violet-600/30 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-violet-400" />
            <span>Download .txt Copy</span>
          </button>
        </div>
      </div>

      {/* Policy Layout: Sidebar Navigation + Main Document Body */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1 space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search policy terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-glass)] border border-[var(--border-glass)] rounded-xl pl-10 pr-3 py-2.5 text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          {/* Table of Contents */}
          <div className="glass-card p-4 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold mb-3 px-2 flex items-center justify-between">
              <span>Table of Contents</span>
              <span className="text-[10px] text-violet-400">{filteredSections.length} Sections</span>
            </div>

            <div className="space-y-1">
              {filteredSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSectionId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSectionId(section.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl font-mono text-xs flex items-center gap-2.5 transition-all ${
                      isActive
                        ? 'bg-violet-600 text-white font-semibold shadow-lg shadow-violet-600/30'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{section.title.split('. ')[1] || section.title}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Security Guarantee Box */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" /> Air-Gapped Verified
            </div>
            <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
              Audit our network behavior anytime using tools like Wireshark, Little Snitch, or Netstat. Zero outgoing connections.
            </p>
          </div>
        </div>

        {/* Main Policy Document Body */}
        <div className="md:col-span-3 space-y-8">
          {filteredSections.length === 0 ? (
            <div className="glass-card p-12 text-center text-[var(--text-muted)] font-mono text-sm space-y-3">
              <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
              <p>No privacy policy clauses match your search "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-violet-400 underline hover:text-violet-300 text-xs"
              >
                Clear search query
              </button>
            </div>
          ) : (
            filteredSections.map((section) => {
              const Icon = section.icon;
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="glass-card p-6 sm:p-8 border border-[var(--border-glass)] relative overflow-hidden scroll-mt-24 transition-all hover:border-violet-500/30"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[var(--border-glass)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
                          {section.category}
                        </span>
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${section.badgeColor}`}>
                      {section.badge}
                    </span>
                  </div>

                  <div className="text-[var(--text-secondary)]">{section.content}</div>
                </section>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
