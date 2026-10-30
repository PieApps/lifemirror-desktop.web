import React from 'react';
import { 
  Check, 
  ExternalLink, 
  Coffee, 
  Heart, 
  Github, 
  Star, 
  Download, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { APP_LINKS } from '../constants/links';

const HIGHLIGHT_STATS = [
  { label: 'License', value: 'MIT Open-Source' },
  { label: 'Cost', value: '$0 Free' },
  { label: 'Telemetry', value: '0%' },
  { label: 'Feature Paywalls', value: 'None' },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto text-center border-t border-[var(--border-glass)]">

      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          100% Free &amp; Open-Source
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mt-3 mb-4">
          Zero Paywalls. Community Supported.
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          LifeMirror Desktop is completely free to download, use, and inspect.
          We build with a local-first philosophy: your data belongs to you, and privacy tools shouldn&apos;t be behind monthly subscriptions.
          If LifeMirror Desktop brings value to your daily focus, consider buying us a coffee or sponsoring on GitHub!
        </p>
      </div>

      {/* Open-Source Highlights Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-14">
        {HIGHLIGHT_STATS.map(({ label, value }) => (
          <div key={label} className="p-4 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">{value}</div>
            <div className="text-xs font-mono text-[var(--text-muted)] mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Dual Cards Grid: Free Edition + Community Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">

        {/* Card 1: Community Edition (Free Forever) */}
        <div className="glass-card p-8 sm:p-10 border border-[var(--border-glass)] relative flex flex-col justify-between">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30 uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Community Edition
            </div>

            {/* Price Header */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold text-[var(--text-primary)]">$0</span>
                <span className="text-sm font-mono text-[var(--text-muted)]">/ free forever</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                Unlimited personal &amp; commercial use. Every core capability unlocked out of the box.
              </p>
            </div>

            {/* Included Feature List */}
            <div className="space-y-3.5 border-t border-[var(--border-glass)] pt-6 pb-2 text-sm text-[var(--text-secondary)]">
              {[
                'Full LifeMirror Desktop app access (Windows, macOS, Linux)',
                '100% Offline SQLCipher encrypted local database',
                '100% Standalone operation (no Ollama or AI required)',
                'Optional pluggable Local AI (Ollama) reflection engine',
                'Active Interdiction Shield & regex focus blocking',
                'Chrome Companion Extension & Native Host bridge',
                'One-click Incognito protocol & memory wipe',
                'Full source code available under MIT License',
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[var(--border-glass)]">
            <a
              href="#downloads"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-600/25 transition-all flex items-center justify-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download LifeMirror Desktop Free</span>
            </a>
            <p className="text-center text-[11px] font-mono text-[var(--text-muted)] mt-2.5">
              Runs on any PC or Mac (&lt;50MB RAM). Zero AI setup required.
            </p>
          </div>
        </div>

        {/* Card 2: Community Backer / Sponsorship (Pay What You Want) */}
        <div className="glass-card p-8 sm:p-10 border-2 border-violet-500/40 relative flex flex-col justify-between shadow-2xl shadow-violet-500/10">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/30 uppercase tracking-wider mb-6">
              <Heart className="w-3.5 h-3.5 fill-rose-500/30" />
              Community Backer
            </div>

            {/* Price Header */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">Pay What You Want</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                LifeMirror Desktop is independently built. Support our work to fund cross-platform releases, offline focus utilities, and maintenance.
              </p>
            </div>

            {/* Support Actions */}
            <div className="space-y-3.5 border-t border-[var(--border-glass)] pt-6">

              {/* Buy Me a Coffee */}
              <a
                href={APP_LINKS.donations.buyMeACoffee}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-left transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-500 dark:text-amber-400 group-hover:scale-105 transition-transform">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors block">
                      Buy Me a Coffee
                    </span>
                    <span className="text-xs text-[var(--text-muted)] block">
                      Quick one-time or monthly cup of coffee
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Sponsor on GitHub */}
              <a
                href={APP_LINKS.donations.githubSponsors}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-left transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-500 dark:text-rose-400 group-hover:scale-105 transition-transform">
                    <Heart className="w-5 h-5 fill-rose-500/30" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors block">
                      Sponsor on GitHub
                    </span>
                    <span className="text-xs text-[var(--text-muted)] block">
                      Recurring or one-time sponsor badge on GitHub
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Star on GitHub */}
              <a
                href={APP_LINKS.github.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] hover:border-violet-500/40 text-left transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-violet-400 transition-colors block">
                      Star the Repository
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] block">
                      Free way to boost visibility &amp; show appreciation
                    </span>
                  </div>
                </div>
                <Star className="w-4 h-4 text-amber-400 fill-amber-400/20 group-hover:fill-amber-400 transition-colors shrink-0" />
              </a>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-[var(--border-glass)] flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
            <span>Contributions go directly toward maintaining open-source, private software.</span>
          </div>
        </div>
      </div>

      {/* Equality & Trust callout */}
      <div className="flex items-center justify-center gap-3 max-w-2xl mx-auto mt-10 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xs text-[var(--text-secondary)]">
        <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <p className="leading-relaxed">
          <strong className="text-[var(--text-primary)]">Zero Feature Gating:</strong> Free community users and voluntary sponsors receive the exact same fully unlocked, privacy-guaranteed desktop application.
        </p>
      </div>

    </section>
  );
};
