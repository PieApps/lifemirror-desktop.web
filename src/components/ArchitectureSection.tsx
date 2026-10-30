import React from 'react';
import { Shield, Cpu, HardDrive, Terminal, GitBranch } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center border-t border-[var(--border-glass)]">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
          System Topology
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mt-3 mb-4">
          Zero-Port Native Architecture
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
          No web sockets. No background listening HTTP ports. Browser tab events are piped securely via Chrome's Native Messaging Stdio API. Core tracking is 100% standalone.
        </p>
      </div>

      {/* SVG Topology Diagram */}
      <div className="max-w-4xl mx-auto glass-card p-8 border border-[var(--border-glass)] overflow-x-auto">
        <div className="min-w-[650px] font-mono text-xs">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
              <div className="font-bold text-sm mb-1">Google Chrome / Chromium</div>
              <div className="text-[11px] text-cyan-400/80">Companion Extension (Stdio Pipe)</div>
            </div>

            <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-500/30 text-violet-300">
              <div className="font-bold text-sm mb-1">Native OS Poller</div>
              <div className="text-[11px] text-violet-400/80">Wayland / Win32 / macOS API</div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 relative">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm">Ollama Local AI</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase font-semibold">Optional</span>
              </div>
              <div className="text-[11px] text-emerald-400/80">http://localhost:11434 (Add-On)</div>
            </div>
          </div>

          {/* Connectors */}
          <div className="flex items-center justify-around py-4 border-t border-b border-[var(--border-glass)] mb-8 text-[var(--text-muted)]">
            <span className="text-cyan-400 font-semibold">⬇ STDIN Stdio Pipe (4-byte framing)</span>
            <span className="text-violet-400 font-semibold">⬇ 1s Focus Polling Loop</span>
            <span className="text-emerald-400 font-semibold">⬇ Optional Prompt (If Ollama running)</span>
          </div>

          {/* Central DB & GUI */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-emerald-500/40 text-emerald-500 dark:text-emerald-400">
              <div className="font-bold text-base mb-1">SQLCipher Encrypted Database</div>
              <div className="text-xs text-[var(--text-muted)] font-normal">Page-level SQLite OpenSSL encryption (`rusqlite`)</div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-violet-500/40 text-violet-600 dark:text-violet-400">
              <div className="font-bold text-base mb-1">LifeMirror Desktop GUI</div>
              <div className="text-xs text-[var(--text-muted)] font-normal">Tauri 2.0 Rust + Winding SVG S-Curve Visualizer</div>
            </div>
          </div>
        </div>

        {/* Reassurance Callout Banner */}
        <div className="mt-8 pt-4 border-t border-[var(--border-glass)] flex items-center justify-center gap-2 text-xs font-mono text-[var(--text-muted)]">
          <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
          <span><strong>Customer Guarantee:</strong> LifeMirror Desktop runs 100% standalone out of the box. Focus tracking, encryption, and timelines never require Ollama.</span>
        </div>
      </div>
    </section>
  );
};
