import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Lock, 
  Cpu, 
  Zap, 
  DollarSign, 
  EyeOff, 
  ServerOff,
  Sparkles
} from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  category: string;
  cloudTrackers: {
    text: string;
    status: 'bad' | 'neutral';
    subtext?: string;
  };
  screenRecorders: {
    text: string;
    status: 'bad' | 'neutral';
    subtext?: string;
  };
  lifeMirror: {
    text: string;
    status: 'good';
    subtext?: string;
  };
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Data Privacy & Storage',
    category: 'Privacy',
    cloudTrackers: {
      text: 'Remote Cloud (AWS/GCP)',
      status: 'bad',
      subtext: 'Your document names, private repo titles & URLs are stored on external company servers.',
    },
    screenRecorders: {
      text: 'Cloud / Hybrid Sync',
      status: 'bad',
      subtext: 'Continuous video/screen frames stored and indexed remotely.',
    },
    lifeMirror: {
      text: '100% Local SQLCipher Encryption',
      status: 'good',
      subtext: '0 bytes leave your machine. Page-level OpenSSL encrypted database on your disk.',
    },
  },
  {
    dimension: 'Network Exposure',
    category: 'Security',
    cloudTrackers: {
      text: 'Background Telemetry & Open Ports',
      status: 'bad',
      subtext: 'Continuous outbound network calls or localhost HTTP/WebSocket sockets.',
    },
    screenRecorders: {
      text: 'Heavy Outbound Cloud Syncing',
      status: 'bad',
      subtext: 'Constant high-bandwidth network uploads for AI processing.',
    },
    lifeMirror: {
      text: 'Zero Open Network Sockets',
      status: 'good',
      subtext: 'Browser tabs sync securely via Chrome Native Messaging stdio pipes (no open ports).',
    },
  },
  {
    dimension: 'AI Processing',
    category: 'AI & Local',
    cloudTrackers: {
      text: 'Third-Party Cloud APIs',
      status: 'bad',
      subtext: 'Personal activities passed to external LLM servers for analysis.',
    },
    screenRecorders: {
      text: 'Proprietary Cloud LLMs',
      status: 'bad',
      subtext: 'Requires continuous internet connection & cloud inference subscriptions.',
    },
    lifeMirror: {
      text: '100% Local Inference (Ollama) or Zero AI',
      status: 'good',
      subtext: 'Runs on-device via Ollama (Llama, Mistral) or operates 100% standalone without AI.',
    },
  },
  {
    dimension: 'Mindset & Tone',
    category: 'User Experience',
    cloudTrackers: {
      text: 'Punitive "Productivity Scores"',
      status: 'bad',
      subtext: 'Guilt-inducing percentages that label tools as strictly "productive" or "unproductive".',
    },
    screenRecorders: {
      text: 'Passive Surveillance Archive',
      status: 'neutral',
      subtext: 'Unstructured video timeline of raw screen recordings.',
    },
    lifeMirror: {
      text: 'Mindful S-Curve Reflection & Context Resumption',
      status: 'good',
      subtext: 'A serpentine visual story of your cognitive day plus 1-click resumption of interrupted work.',
    },
  },
  {
    dimension: 'System Footprint',
    category: 'Performance',
    cloudTrackers: {
      text: 'Heavy Electron Bloat (400–800MB RAM)',
      status: 'bad',
      subtext: 'Resource-heavy background processes that drain laptop battery.',
    },
    screenRecorders: {
      text: 'High GPU & Disk Overhead',
      status: 'bad',
      subtext: 'Continuous screen encoding hogs battery and writes gigabytes of video.',
    },
    lifeMirror: {
      text: 'Native Rust + Tauri 2.0 (<50MB RAM)',
      status: 'good',
      subtext: 'Starts in 200ms, sips minimal memory, and runs silently without battery drain.',
    },
  },
  {
    dimension: 'Cost & Licensing',
    category: 'Pricing',
    cloudTrackers: {
      text: '$120 – $240 / year subscription',
      status: 'bad',
      subtext: 'Recurring monthly paywalls, mandatory account signups, and credit cards.',
    },
    screenRecorders: {
      text: '$240+ / year subscription',
      status: 'bad',
      subtext: 'High recurring SaaS fees for cloud compute.',
    },
    lifeMirror: {
      text: '$0 Free & Open-Source (MIT)',
      status: 'good',
      subtext: 'No accounts, no paywalls, no corporate lock-in. Supported voluntarily by community.',
    },
  },
];

export const ComparisonSection: React.FC = () => {
  const [selectedMobileTab, setSelectedMobileTab] = useState<'lifemirror' | 'cloud' | 'screen'>('lifemirror');

  return (
    <section id="comparison" className="py-24 px-6 max-w-7xl mx-auto border-t border-[var(--border-glass)]">
      {/* Header (Start With Why) */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold flex items-center justify-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          The Privacy-First Difference
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-5">
          Why Switch to LifeMirror Desktop?
        </h2>
        <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
          Most productivity tools monitor you like corporate spyware, sending your window titles, private code repositories, and browsing history to remote cloud servers. LifeMirror was built on a simple guarantee: <strong className="text-[var(--text-primary)]">your focus data stays on your machine, always.</strong>
        </p>
      </div>

      {/* Desktop / Tablet Comparison Table (Don't Make Me Think: Instant visual scan) */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-[var(--border-glass)] glass-card shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--border-glass)] bg-[var(--bg-glass)]">
              <th className="p-6 text-sm font-semibold text-[var(--text-muted)] font-mono uppercase tracking-wider w-1/4">
                Capability
              </th>
              <th className="p-6 text-sm font-semibold text-[var(--text-muted)] font-mono uppercase tracking-wider w-1/4">
                Cloud Trackers <br />
                <span className="text-xs font-normal opacity-75">(RescueTime, Rize, Clockify)</span>
              </th>
              <th className="p-6 text-sm font-semibold text-[var(--text-muted)] font-mono uppercase tracking-wider w-1/4">
                Screen Recorders <br />
                <span className="text-xs font-normal opacity-75">(Rewind, Limitless)</span>
              </th>
              <th className="p-6 text-sm font-bold text-violet-400 dark:text-violet-300 font-mono uppercase tracking-wider w-1/4 bg-violet-500/10 border-l border-r border-violet-500/30 relative">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>LifeMirror Desktop</span>
                </div>
                <span className="text-xs font-normal text-emerald-400 block mt-0.5">100% Local &amp; Private</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-glass)] text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-[var(--bg-glass)]/50 transition-colors">
                <td className="p-6 font-semibold text-[var(--text-primary)] align-top">
                  <div className="font-display text-base">{row.dimension}</div>
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mt-0.5 block">
                    {row.category}
                  </span>
                </td>

                {/* Cloud Trackers */}
                <td className="p-6 align-top text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[var(--text-primary)] text-sm">{row.cloudTrackers.text}</div>
                      {row.cloudTrackers.subtext && (
                        <div className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                          {row.cloudTrackers.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                </td>

                {/* Screen Recorders */}
                <td className="p-6 align-top text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2.5">
                    {row.screenRecorders.status === 'bad' ? (
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    ) : (
                      <span className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 flex items-center justify-center font-bold text-xs">~</span>
                    )}
                    <div>
                      <div className="font-medium text-[var(--text-primary)] text-sm">{row.screenRecorders.text}</div>
                      {row.screenRecorders.subtext && (
                        <div className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                          {row.screenRecorders.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                </td>

                {/* LifeMirror Desktop (Highlighted Column) */}
                <td className="p-6 align-top bg-violet-500/5 border-l border-r border-violet-500/20 text-[var(--text-primary)]">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-emerald-500 dark:text-emerald-400 text-sm">
                        {row.lifeMirror.text}
                      </div>
                      {row.lifeMirror.subtext && (
                        <div className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                          {row.lifeMirror.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout (Steve Krug: Frictionless, no horizontal overflow) */}
      <div className="block lg:hidden space-y-6">
        {/* Toggle Selector */}
        <div className="flex rounded-xl p-1 bg-[var(--bg-glass)] border border-[var(--border-glass)] mb-6">
          <button
            onClick={() => setSelectedMobileTab('lifemirror')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedMobileTab === 'lifemirror'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            LifeMirror
          </button>
          <button
            onClick={() => setSelectedMobileTab('cloud')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedMobileTab === 'cloud'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Cloud Trackers
          </button>
          <button
            onClick={() => setSelectedMobileTab('screen')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              selectedMobileTab === 'screen'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Screen Recorders
          </button>
        </div>

        {/* Selected View Card List */}
        <div className="space-y-4">
          {COMPARISON_DATA.map((row, idx) => (
            <div key={idx} className="glass-card p-5 border border-[var(--border-glass)] text-left">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">
                {row.category}
              </div>
              <h4 className="font-bold text-[var(--text-primary)] text-base mb-3">{row.dimension}</h4>

              {selectedMobileTab === 'lifemirror' && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-500 dark:text-emerald-400 text-sm">
                      {row.lifeMirror.text}
                    </div>
                    {row.lifeMirror.subtext && (
                      <div className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                        {row.lifeMirror.subtext}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedMobileTab === 'cloud' && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-500/5 border border-rose-500/15">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-[var(--text-primary)] text-sm">
                      {row.cloudTrackers.text}
                    </div>
                    {row.cloudTrackers.subtext && (
                      <div className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                        {row.cloudTrackers.subtext}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedMobileTab === 'screen' && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
                  {row.screenRecorders.status === 'bad' ? (
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  ) : (
                    <span className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 flex items-center justify-center font-bold text-xs">~</span>
                  )}
                  <div>
                    <div className="font-medium text-[var(--text-primary)] text-sm">
                      {row.screenRecorders.text}
                    </div>
                    {row.screenRecorders.subtext && (
                      <div className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                        {row.screenRecorders.subtext}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trust Quote / Micro-CTA */}
      <div className="mt-12 text-center">
        <p className="text-xs font-mono text-[var(--text-muted)]">
          🔒 Certified Zero-Telemetry Architecture • Open-Source MIT License • Completely Free Forever
        </p>
      </div>
    </section>
  );
};

