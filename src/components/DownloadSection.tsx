import React, { useState, useEffect } from 'react';
import { Download, Monitor, Apple, Terminal, CheckCircle, Cpu, HardDrive, Globe, Smartphone, ExternalLink, Github, Sparkles, ShieldCheck, Info, Copy, Check } from 'lucide-react';
import { APP_LINKS } from '../constants/links';

export const DownloadSection: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [detectedOs, setDetectedOs] = useState<'Windows' | 'macOS' | 'Linux'>('Linux');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setDetectedOs('Windows');
    else if (userAgent.includes('mac')) setDetectedOs('macOS');
    else setDetectedOs('Linux');
  }, []);

  const copyToClipboard = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="downloads" className="py-24 px-6 max-w-7xl mx-auto text-center border-t border-[var(--border-glass)]">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Latest Release v1.3.4 • Open-Source MIT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mt-2 mb-4">
          Download LifeMirror Desktop
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
          Native binaries built with Tauri 2.0. Fast, lightweight, zero telemetry, and SQLCipher page-level encrypted.
        </p>
      </div>

      {/* Platform Cards (Don't Make Me Think: Highlight detected OS automatically) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 text-left">
        {/* Windows Card */}
        <div className={`glass-card p-8 border relative group transition-all ${
          detectedOs === 'Windows' 
            ? 'border-violet-500/80 shadow-2xl shadow-violet-500/15 ring-2 ring-violet-500/30' 
            : 'border-[var(--border-glass)] hover:border-violet-500/40'
        }`}>
          {detectedOs === 'Windows' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-3 h-3" />
              <span>Recommended For Your System</span>
            </div>
          )}
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
            <Monitor className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Windows</h3>
          <p className="text-xs text-[var(--text-muted)] font-mono mb-6">Windows 10 / 11 (64-bit)</p>

          <div className="space-y-3 mb-8">
            <a
              href={APP_LINKS.downloads.windowsExe}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs flex items-center justify-between transition-all shadow-md shadow-violet-600/20"
            >
              <span>NSIS Setup (.exe)</span>
              <Download className="w-4 h-4" />
            </a>

            <a
              href={APP_LINKS.downloads.windowsMsi}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[var(--bg-glass)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-xs flex items-center justify-between transition-all"
            >
              <span>MSI Package (.msi)</span>
              <Download className="w-4 h-4 text-[var(--text-muted)]" />
            </a>
          </div>

          <div className="text-[11px] text-[var(--text-muted)] font-mono">
            * WebView2 Runtime pre-installed on Win11.
          </div>
        </div>

        {/* macOS Card */}
        <div className={`glass-card p-8 border relative group transition-all ${
          detectedOs === 'macOS' 
            ? 'border-violet-500/80 shadow-2xl shadow-violet-500/15 ring-2 ring-violet-500/30' 
            : 'border-[var(--border-glass)] hover:border-violet-500/40'
        }`}>
          {detectedOs === 'macOS' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-3 h-3" />
              <span>Recommended For Your System</span>
            </div>
          )}
          <div className="w-12 h-12 rounded-2xl bg-gray-500/10 border border-gray-500/20 flex items-center justify-center mb-6 text-[var(--text-primary)]">
            <Apple className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">macOS</h3>
          <p className="text-xs text-[var(--text-muted)] font-mono mb-6">macOS 11.0+ (Universal Binary)</p>

          <div className="space-y-3 mb-8">
            <a
              href={APP_LINKS.downloads.macDmg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs flex items-center justify-between transition-all shadow-md shadow-violet-600/20"
            >
              <span>Apple Disk Image (.dmg)</span>
              <Download className="w-4 h-4" />
            </a>

            <a
              href={APP_LINKS.downloads.macAppTarGz}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[var(--bg-glass)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-xs flex items-center justify-between transition-all"
            >
              <span>Standalone App (.app.tar.gz)</span>
              <Download className="w-4 h-4 text-[var(--text-muted)]" />
            </a>
          </div>

          <div className="text-[11px] text-[var(--text-muted)] font-mono">
            * Universal binary for Intel & Apple Silicon (M1/M2/M3).
          </div>
        </div>

        {/* Linux Card */}
        <div className={`glass-card p-8 border relative group transition-all ${
          detectedOs === 'Linux' 
            ? 'border-violet-500/80 shadow-2xl shadow-violet-500/15 ring-2 ring-violet-500/30' 
            : 'border-[var(--border-glass)] hover:border-violet-500/40'
        }`}>
          {detectedOs === 'Linux' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-3 h-3" />
              <span>Recommended For Your System</span>
            </div>
          )}
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
            <Terminal className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Linux</h3>
          <p className="text-xs text-[var(--text-muted)] font-mono mb-6">Ubuntu / Debian / Arch / Fedora</p>

          <div className="space-y-3 mb-8">
            <a
              href={APP_LINKS.downloads.linuxDeb}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs flex items-center justify-between transition-all shadow-md shadow-violet-600/20"
            >
              <span>Debian Package (.deb)</span>
              <Download className="w-4 h-4" />
            </a>

            <a
              href={APP_LINKS.downloads.linuxAppImage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[var(--bg-glass)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-xs flex items-center justify-between transition-all"
            >
              <span>Standalone AppImage</span>
              <Download className="w-4 h-4 text-[var(--text-muted)]" />
            </a>
          </div>

          <div className="text-[11px] text-[var(--text-muted)] font-mono">
            * Supports X11 & Wayland compositors (Hyprland, Sway).
          </div>
        </div>
      </div>

      {/* Ecosystem & Companion Apps (Browser Extension & Mobile App) */}
      <div id="ecosystem" className="max-w-5xl mx-auto mb-16 text-left">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
            Connected Ecosystem
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-2">
            Companion & Mobile Applications
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-xl mx-auto">
            Extend your focus awareness with our official Chrome Web Store companion extension and standalone offline Android mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chrome Extension Card */}
          <div className="glass-card p-8 border border-violet-500/30 hover:border-violet-500/60 relative group flex flex-col justify-between transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                  Chrome Web Store
                </span>
              </div>
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">Companion Browser Extension</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                Enables tab & active webpage domain monitoring via secure native stdio pipes. Zero open network ports, zero localhost listeners, zero telemetry.
              </p>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mb-6 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Chrome</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Brave</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Edge</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Arc</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Opera</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Vivaldi</span>
              </div>
            </div>

            <a
              href={APP_LINKS.ecosystem.chromeExtension}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-violet-600/25 transition-all cursor-pointer"
            >
              <span>Install from Chrome Web Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Android Mobile App Card */}
          <div className="glass-card p-8 border border-emerald-500/30 hover:border-emerald-500/60 relative group flex flex-col justify-between transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Google Play Store
                </span>
              </div>
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">LifeMirror for Android</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                Our standalone, 100% offline mobile companion for your phone. Track time flows across Work, Personal, and Rest with an interactive serpentine timeline. Zero accounts, zero cloud servers, zero telemetry.
              </p>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mb-6 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Android 8.0+</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">100% Offline</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Serpentine Timeline</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-glass)] border border-[var(--border-glass)]">Zero Cloud</span>
              </div>
            </div>

            <a
              href={APP_LINKS.ecosystem.androidApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
            >
              <span>Get LifeMirror on Google Play</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 4-Step Quickstart Box */}
      <div className="max-w-4xl mx-auto glass-card p-8 text-left border border-[var(--border-glass)]">
        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">Quick Setup Guide</h4>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono text-xs text-[var(--text-secondary)]">
          <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)]">
            <div className="text-violet-400 font-bold mb-1">1. Install Binary</div>
            <div className="text-[var(--text-muted)] text-[11px]">Download and launch the desktop installer for your OS.</div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)]">
            <div className="text-violet-400 font-bold mb-1">2. Chrome Extension</div>
            <div className="text-[var(--text-muted)] text-[11px]">Install Companion from Chrome Web Store (or load unpacked).</div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)]">
            <div className="text-violet-400 font-bold mb-1">3. Native Host</div>
            <div className="text-[var(--text-muted)] text-[11px]">Run `npm run install-host` to register stdio pipe.</div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-emerald-500/30">
            <div className="text-emerald-400 font-bold mb-1">4. Optional Local AI</div>
            <div className="text-[var(--text-muted)] text-[11px]">Install Ollama anytime for automated summaries. (Optional — Steps 1–3 give you 100% of LifeMirror Desktop!)</div>
          </div>
        </div>
      </div>

      {/* First-Time Launch & Security Notice */}
      <div className="max-w-4xl mx-auto mt-8 glass-card p-8 text-left border border-violet-500/30 relative">
        <div className="flex items-start gap-3.5 mb-4">
          <div className="p-2.5 rounded-xl bg-violet-500/15 border border-violet-500/30 text-violet-400 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              First-Time Launch & Security Notice
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
              LifeMirror Desktop is an independent open-source project. Because our release binaries are distributed directly without commercial signing certificates, your operating system will display a standard first-run warning. The application is completely local and zero-telemetry. Here is how to complete the one-time launch on your platform:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Windows Instructions */}
          <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                <Monitor className="w-4 h-4" />
                <span>Windows 10 / 11</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                Microsoft Defender SmartScreen will show <span className="text-[var(--text-primary)] font-semibold">&ldquo;Windows protected your PC&rdquo;</span>.
              </p>
              <ol className="text-xs text-[var(--text-muted)] space-y-2 list-decimal list-inside font-sans">
                <li>Click <span className="text-[var(--text-primary)] font-medium underline underline-offset-2">More info</span> on the prompt.</li>
                <li>Click the <span className="text-violet-400 font-semibold">Run anyway</span> button to start.</li>
              </ol>
            </div>
          </div>

          {/* macOS Instructions */}
          <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                <Apple className="w-4 h-4" />
                <span>macOS (Sequoia 15+)</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Gatekeeper flags unsigned web downloads on first run.
              </p>
              <ol className="text-xs text-[var(--text-muted)] space-y-1 list-decimal list-inside font-sans mb-3">
                <li>Open the app once to trigger the prompt.</li>
                <li>Go to <span className="text-[var(--text-primary)] font-medium">System Settings → Privacy & Security</span>.</li>
                <li>Scroll down to Security and click <span className="text-violet-400 font-semibold">Open Anyway</span>.</li>
              </ol>
            </div>
            <div className="pt-2 border-t border-[var(--border-glass)]">
              <span className="text-[10px] text-[var(--text-muted)] font-mono block mb-1">Terminal alternative:</span>
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5 font-mono text-[10px] text-violet-300">
                <span className="truncate mr-2">xattr -dr com.apple.quarantine &quot;/Applications/LifeMirror Desktop.app&quot;</span>
                <button
                  onClick={() => copyToClipboard('xattr -dr com.apple.quarantine "/Applications/LifeMirror Desktop.app"')}
                  className="hover:text-white transition-colors shrink-0"
                  title="Copy command"
                >
                  {copiedCmd === 'xattr -dr com.apple.quarantine "/Applications/LifeMirror Desktop.app"' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Linux Instructions */}
          <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                <Terminal className="w-4 h-4" />
                <span>Linux (.deb / AppImage)</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                Run directly as a standalone AppImage or install Debian package.
              </p>
              <div className="space-y-2 text-xs font-mono text-[var(--text-muted)] mb-2">
                <div>
                  <span className="text-[10px] text-[var(--text-secondary)] block">Debian/Ubuntu:</span>
                  <code className="text-[11px] text-violet-300">sudo dpkg -i lifemirror*.deb</code>
                </div>
                <div>
                  <span className="text-[10px] text-[var(--text-secondary)] block">AppImage executable:</span>
                  <code className="text-[11px] text-violet-300">chmod +x lifemirror*.AppImage</code>
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-[var(--border-glass)] text-[10px] text-[var(--text-muted)] font-sans">
              <span className="text-amber-400 font-medium">Ubuntu 22.04+:</span> requires <code className="font-mono text-violet-300">libfuse2</code> (<code className="font-mono">sudo apt install libfuse2</code>) to execute AppImages.
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Open Source Banner */}
      <div className="max-w-4xl mx-auto mt-8 p-6 glass-card border border-[var(--border-glass)] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] text-[var(--text-primary)] shrink-0">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <h5 className="font-bold text-sm text-[var(--text-primary)]">Free & Open-Source (MIT License)</h5>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Inspect the source code, verify zero-telemetry claims, or download releases directly from GitHub.
            </p>
          </div>
        </div>
        <a
          href={APP_LINKS.github.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-[var(--bg-glass)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-glass)] text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2 transition-all shrink-0 cursor-pointer"
        >
          <span>View on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
        </a>
      </div>
    </section>
  );
};
