import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Play, Lock, Sparkles, RefreshCw } from 'lucide-react';

export const InterdictionDemo: React.FC = () => {
  const [activeGoal, setActiveGoal] = useState('Writing Rust Core');
  const [testWindow, setTestWindow] = useState<'coding' | 'regexDistraction' | 'aiDistraction'>('coding');
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [deflections, setDeflections] = useState(0);

  const handleTestTrigger = () => {
    if (testWindow !== 'coding') {
      setIsOverlayActive(true);
      setDeflections((prev) => prev + 1);
    } else {
      setIsOverlayActive(false);
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
          Active Interdiction Protocol
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mt-3 mb-4">
          Real-Time Focus Defense Shield
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
          Transition from passive log tracking to active distraction defense. Detect blacklisted regex rules or AI intention violations instantly!
        </p>
      </div>

      {/* Simulator Frame */}
      <div className="max-w-3xl mx-auto glass-card p-8 border border-[var(--border-glass)] relative overflow-hidden text-left">
        {/* Active Shield Overlay Simulation */}
        {isOverlayActive && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl z-30 p-8 flex flex-col items-center justify-center text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center mb-6 shadow-2xl shadow-red-500/30">
              <ShieldAlert className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Focus Shield Activated</h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mb-6 leading-relaxed">
              Window session <span className="font-mono text-red-400">{testWindow === 'regexDistraction' ? 'youtube.com/watch' : 'reddit.com'}</span> was interdicted because your active goal is set to <span className="font-semibold text-emerald-400">"{activeGoal}"</span>.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOverlayActive(false)}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-all border border-white/10"
              >
                Dismiss Shield
              </button>
            </div>
          </div>
        )}

        {/* Top Status */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-glass)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-[var(--text-primary)]">Active Interdiction Engine Online</span>
          </div>
          <div className="text-xs font-mono text-red-400 font-bold bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            🛡️ Repelled: {deflections}
          </div>
        </div>

        {/* Intention Goal Selector */}
        <div className="mb-6">
          <label className="text-xs font-mono text-[var(--text-muted)] mb-2 block">Set Active Intention Goal:</label>
          <input
            type="text"
            value={activeGoal}
            onChange={(e) => setActiveGoal(e.target.value)}
            className="w-full bg-[var(--bg-glass)] border border-[var(--border-glass)] rounded-xl px-4 py-2.5 text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-violet-500"
          />
        </div>

        {/* Test Window Selection */}
        <div className="mb-6">
          <label className="text-xs font-mono text-[var(--text-muted)] mb-2 block">Simulate Active OS Window Focus:</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setTestWindow('coding')}
              className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                testWindow === 'coding'
                  ? 'bg-violet-500/20 border-violet-500/40 text-violet-600 dark:text-violet-300'
                  : 'bg-[var(--bg-glass)] border-[var(--border-glass)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]'
              }`}
            >
              💻 VS Code (Focus Task)
            </button>

            <button
              onClick={() => setTestWindow('regexDistraction')}
              className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                testWindow === 'regexDistraction'
                  ? 'bg-red-500/20 border-red-500/40 text-red-400'
                  : 'bg-[var(--bg-glass)] border-[var(--border-glass)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]'
              }`}
            >
              📹 YouTube (Regex Match)
            </button>

            <button
              onClick={() => setTestWindow('aiDistraction')}
              className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                testWindow === 'aiDistraction'
                  ? 'bg-red-500/20 border-red-500/40 text-red-400'
                  : 'bg-[var(--bg-glass)] border-[var(--border-glass)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]'
              }`}
            >
              🌐 Reddit (AI Intention Lock)
            </button>
          </div>
        </div>

        {/* Test Button */}
        <button
          onClick={handleTestTrigger}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-violet-600 text-white font-medium text-xs hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Simulate OS Window Switch & Evaluate Defense</span>
        </button>
      </div>
    </section>
  );
};
