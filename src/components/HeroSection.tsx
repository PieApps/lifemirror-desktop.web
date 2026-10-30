import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Shield, Cpu, Lock, ArrowDown, Globe, Smartphone, Github } from 'lucide-react';
import { APP_LINKS } from '../constants/links';

export const HeroSection: React.FC = () => {
  const [activeSeconds, setActiveSeconds] = useState(324);
  const [detectedOs, setDetectedOs] = useState<'Windows' | 'macOS' | 'Linux'>('Linux');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setDetectedOs('Windows');
    else if (userAgent.includes('mac')) setDetectedOs('macOS');
    else setDetectedOs('Linux');
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs > 0 ? hrs + 'h ' : ''}${mins}m ${secs}s`;
  };

  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[250px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-300 text-xs font-medium mb-8 backdrop-blur-md">
        <Shield className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
        <span>100% Standalone • Zero Setup • Optional Local AI</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.15] max-w-4xl mb-6">
        Mirror Your Mind. <br />
        <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Master Your Time.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mb-8 leading-relaxed font-normal">
        The zero-telemetry desktop utility that turns your computer focus logs into a winding serpentine timeline with active distraction defense. Works 100% standalone out of the box — zero AI, zero cloud, and zero accounts required.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <a
          href="#downloads"
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-semibold text-base shadow-xl shadow-violet-600/30 hover:scale-[1.03] transition-all flex items-center justify-center gap-3 group"
        >
          <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          <span>Download LifeMirror Desktop for {detectedOs}</span>
        </a>

        <a
          href="#timeline-demo"
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] text-[var(--text-primary)] font-medium text-base hover:bg-[var(--bg-card-hover)] hover:border-violet-500/30 transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>Explore Live Demo</span>
        </a>
      </div>

      {/* Customer Reassurance Strip (Don't Make Me Think) */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-[var(--text-muted)] mb-8">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <Shield className="w-3.5 h-3.5" /> 100% Standalone (No Ollama Needed)
        </span>
        <span className="text-[var(--border-glass)] hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5 text-cyan-400">
          <Cpu className="w-3.5 h-3.5" /> Ultra-Lightweight (&lt;50MB RAM)
        </span>
        <span className="text-[var(--border-glass)] hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5 text-violet-400">
          <Lock className="w-3.5 h-3.5" /> Zero Cloud Telemetry
        </span>
      </div>

      {/* Ecosystem quick badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[var(--text-muted)] mb-14">
        <a
          href={APP_LINKS.ecosystem.chromeExtension}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chrome Companion Extension on the Chrome Web Store (opens in a new tab)"
          className="hover:text-violet-400 hover:border-violet-500/40 transition-all flex items-center gap-2 px-3.5 py-2 sm:py-1.5 rounded-full bg-[var(--bg-glass)] border border-[var(--border-glass)] group"
        >
          <Globe className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
          <span>Chrome Companion Extension</span>
        </a>
        <a
          href={APP_LINKS.ecosystem.androidApp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LifeMirror for Android on Google Play (opens in a new tab)"
          className="hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-2 px-3.5 py-2 sm:py-1.5 rounded-full bg-[var(--bg-glass)] border border-[var(--border-glass)] group"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span>Android Mobile App</span>
        </a>
        <a
          href={APP_LINKS.github.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LifeMirror Desktop source repository on GitHub (opens in a new tab)"
          className="hover:text-[var(--text-primary)] hover:border-zinc-400 dark:hover:border-white/30 transition-all flex items-center gap-2 px-3.5 py-2 sm:py-1.5 rounded-full bg-[var(--bg-glass)] border border-[var(--border-glass)] group"
        >
          <Github className="w-3.5 h-3.5 text-zinc-400 group-hover:scale-110 transition-transform" />
          <span>GitHub (MIT)</span>
        </a>
      </div>

      {/* Live Mini Ticker Card */}
      <div className="w-full max-w-2xl glass-card p-6 border border-violet-500/30 relative group overflow-hidden">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl group-hover:bg-violet-500/30 transition-all" />
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">Active Session Monitored Natively</span>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-glass)] px-2.5 py-1 rounded-lg border border-[var(--border-glass)]">
            SQLCipher Encrypted
          </span>
        </div>

        <div className="flex items-center justify-between bg-[var(--bg-glass)] p-4 rounded-xl border border-[var(--border-glass)]">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-violet-950/80 border border-violet-500/30 flex items-center justify-center text-xl font-bold text-violet-300">
              💻
            </div>
            <div>
              <div className="text-[var(--text-primary)] font-semibold text-sm">Visual Studio Code</div>
              <div className="text-xs text-[var(--text-muted)] font-mono">SCurveTimeline.tsx — lifemirror-desktop</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-mono font-bold text-violet-400">{formatTime(activeSeconds)}</div>
            <div className="text-[11px] text-[var(--text-muted)]">Continuous Focus (Standalone)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
