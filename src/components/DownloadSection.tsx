import React from 'react';
import { Download, Monitor, Apple, Terminal, CheckCircle, Cpu, HardDrive, Globe, Smartphone, ExternalLink, Github, Sparkles } from 'lucide-react';
import { APP_LINKS } from '../constants/links';

export const DownloadSection: React.FC = () => {

  return (
    <section id="downloads" className="py-24 px-6 max-w-7xl mx-auto text-center border-t border-[var(--border-glass)]">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Latest Release v1.3.3 • Open-Source MIT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mt-2 mb-4">
          Download LifeMirror Desktop
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
          Native binaries built with Tauri 2.0. Fast, lightweight, zero telemetry, and SQLCipher page-level encrypted.
        </p>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 text-left">
        {/* Windows Card */}
        <div className="glass-card p-8 border border-[var(--border-glass)] hover:border-violet-500/40 relative group">
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
        <div className="glass-card p-8 border border-[var(--border-glass)] hover:border-violet-500/40 relative group">
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
        <div className="glass-card p-8 border border-[var(--border-glass)] hover:border-violet-500/40 relative group">
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
