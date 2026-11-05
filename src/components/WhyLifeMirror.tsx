import React from 'react';
import { Lock, ShieldCheck, Cpu, HardDrive, Compass, HeartHandshake, EyeOff, Sparkles, ArrowRight } from 'lucide-react';

export const WhyLifeMirror: React.FC = () => {
  return (
    <section id="why-lifemirror" className="py-24 px-6 max-w-7xl mx-auto border-t border-[var(--border-glass)]">
      {/* Sinek Golden Circle Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold flex items-center justify-center gap-1.5 mb-3">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          The Golden Circle • Start With Why
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-5">
          Your Attention Is Your Life. <br />
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            It Belongs Solely to You.
          </span>
        </h2>
        <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
          &ldquo;People don&apos;t buy what you do; they buy <em>why</em> you do it.&rdquo; Traditional productivity tools monitor you like corporate probation officers, uploading your window titles, private code repositories, and URLs to remote clouds to calculate anxiety-inducing guilt scores. We believe your computer is your creative sanctuary.
        </p>
      </div>

      {/* The 3-Tier Golden Circle Breakdown: WHY -> HOW -> WHAT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Tier 1: THE WHY (Core Belief) */}
        <div className="glass-card p-8 border border-violet-500/40 relative overflow-hidden flex flex-col justify-between group hover:border-violet-500 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-bl-full pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 uppercase tracking-wider mb-6">
              1. The Why (Belief)
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-violet-400" />
              <span>Digital Sovereignty</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              How you spend your working hours is how you spend your life. You deserve honest self-reflection without turning your daily thoughts, source code, and browsing history into corporate telemetry.
            </p>
            <ul className="space-y-2 text-xs font-mono text-[var(--text-muted)]">
              <li className="flex items-center gap-2 text-violet-400">
                <span>•</span> No remote databases or telemetry
              </li>
              <li className="flex items-center gap-2 text-violet-400">
                <span>•</span> No predatory monthly subscriptions
              </li>
              <li className="flex items-center gap-2 text-violet-400">
                <span>•</span> Compassionate focus, not punitive shame
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-[var(--border-glass)] text-[11px] font-mono text-violet-400">
            Purpose: Freedom &amp; Peace of Mind
          </div>
        </div>

        {/* Tier 2: THE HOW (Guarantees) */}
        <div className="glass-card p-8 border border-cyan-500/40 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider mb-6">
              2. The How (Principles)
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-cyan-400" />
              <span>Zero-Port Offline Cryptography</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              We engineered LifeMirror with zero listening network sockets. All focus logs are encrypted locally with OpenSSL SQLCipher. Browser tabs communicate solely over Chrome&apos;s Native Messaging stdio pipe.
            </p>
            <ul className="space-y-2 text-xs font-mono text-[var(--text-muted)]">
              <li className="flex items-center gap-2 text-cyan-400">
                <span>•</span> 100% SQLCipher page-level encrypted
              </li>
              <li className="flex items-center gap-2 text-cyan-400">
                <span>•</span> 0 bytes ever leave your device
              </li>
              <li className="flex items-center gap-2 text-cyan-400">
                <span>•</span> Native stdio bridge (zero open ports)
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-[var(--border-glass)] text-[11px] font-mono text-cyan-400">
            Method: Offline-First Architecture
          </div>
        </div>

        {/* Tier 3: THE WHAT (Product) */}
        <div className="glass-card p-8 border border-emerald-500/40 relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-6">
              3. The What (Product)
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-emerald-400" />
              <span>LifeMirror Desktop</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              A lightning-fast native utility (&lt;50MB RAM) for Windows, macOS, and Linux that weaves your focus logs into an interactive serpentine S-curve timeline, backed by active distraction defense.
            </p>
            <ul className="space-y-2 text-xs font-mono text-[var(--text-muted)]">
              <li className="flex items-center gap-2 text-emerald-400">
                <span>•</span> Beautiful winding S-Curve timeline
              </li>
              <li className="flex items-center gap-2 text-emerald-400">
                <span>•</span> 100% standalone out of the box
              </li>
              <li className="flex items-center gap-2 text-emerald-400">
                <span>•</span> Optional local AI reflection (Ollama)
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-[var(--border-glass)] text-[11px] font-mono text-emerald-400">
            Result: Free &amp; Open-Source (MIT)
          </div>
        </div>
      </div>

      {/* Steve Krug "Don't Make Me Think" 3-Second Clarity Strip */}
      <div className="glass-card p-6 sm:p-8 border border-[var(--border-glass)] text-left bg-gradient-to-r from-violet-950/20 via-transparent to-cyan-950/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-violet-400 font-bold flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Clear Usability Guarantee
            </div>
            <h4 className="text-lg font-bold text-[var(--text-primary)]">
              No account. No credit card. No setup hoops.
            </h4>
            <p className="text-xs text-[var(--text-secondary)] max-w-xl">
              Install the lightweight binary for your operating system and start seeing your focus timeline in under 60 seconds. Ollama local AI is 100% optional.
            </p>
          </div>

          <a
            href="#downloads"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs flex items-center gap-2 shrink-0 shadow-lg shadow-violet-600/20 transition-all hover:scale-105"
          >
            <span>Get Started in 60 Seconds</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
