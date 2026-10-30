import React, { useState, useEffect } from 'react';
import { MOCK_AI_REFLECTIONS } from '../data/demoData';
import { Bot, Terminal, CheckCircle2, ChevronRight, Code, Sparkles, Shield, Cpu, FileText, Zap } from 'lucide-react';

export const LocalAiSimulator: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'standalone' | 'ollama'>('standalone');
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPayloadInspector, setShowPayloadInspector] = useState(false);

  const startStreamingText = (fullText: string) => {
    setIsGenerating(true);
    setDisplayedText('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 20);
  };

  const handleGenerateSummary = () => {
    setSelectedPromptIndex(null);
    startStreamingText(MOCK_AI_REFLECTIONS.dailySummary);
  };

  const handleSelectChatQuery = (idx: number) => {
    setSelectedPromptIndex(idx);
    startStreamingText(MOCK_AI_REFLECTIONS.chatResponses[idx].response);
  };

  useEffect(() => {
    if (activeMode === 'ollama') {
      handleGenerateSummary();
    }
  }, [activeMode]);

  return (
    <section id="ai-experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-[var(--border-glass)] text-center">
      <div className="mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Optional Add-On
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mt-3 mb-4">
          Local AI is Strictly Optional
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base mb-8">
          LifeMirror Desktop is 100% functional standalone with zero AI, zero GPU load, and zero external downloads. If you want automated summaries and offline Q&amp;A, you can optionally connect local Ollama anytime.
        </p>

        {/* Mode Selector Toggle (Don't Make Me Think) */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] shadow-lg max-w-xl mx-auto">
          <button
            onClick={() => setActiveMode('standalone')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
              activeMode === 'standalone'
                ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/25 scale-[1.02]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Standalone Mode (Default — No AI)</span>
          </button>

          <button
            onClick={() => setActiveMode('ollama')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
              activeMode === 'ollama'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/25 scale-[1.02]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Optional Ollama Mode (Connected)</span>
          </button>
        </div>
      </div>

      {activeMode === 'standalone' ? (
        /* Standalone Mode Demonstration */
        <div className="max-w-4xl mx-auto glass-card p-8 border border-emerald-500/30 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[var(--border-glass)] gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-bold">LifeMirror Desktop Standalone Core Active</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)]">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                0% GPU • ~38MB RAM • No Ollama Needed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)]">
                <div className="text-xs font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Instant Local SQLite Metrics
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Focus statistics and session durations are aggregated on your machine in microseconds using pure SQLCipher queries. No AI processing required.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)]">
                <div className="text-xs font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  Encrypted Manual Reflection Journal
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Capture thoughts, milestones, and daily notes in an encrypted local Markdown journal. Saved safely on your disk with AES-256 encryption.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300">
                💡 <strong>Customer Choice:</strong> Want automated 2-sentence AI reflections later? Simply install Ollama and toggle it on. If not, LifeMirror Desktop remains complete, ultra-fast, and battery-friendly.
              </div>
            </div>

            <div className="bg-black/60 rounded-xl p-5 border border-white/5 font-mono text-xs text-gray-200 flex flex-col justify-between">
              <div>
                <div className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                  <span>📊 Today's Focus Overview (Instant SQLite Rollup)</span>
                </div>
                <div className="space-y-2 text-[11px] text-gray-300">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Deep Work Duration:</span>
                    <span className="font-bold text-white">4h 30m</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Top Application:</span>
                    <span className="font-bold text-white">Visual Studio Code (1h 30m)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Chrome Tabs Logged:</span>
                    <span className="font-bold text-white">4 Tabs via Stdio Pipe</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Distractions Shielded:</span>
                    <span className="font-bold text-emerald-400">1 Repelled (Reddit regex match)</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Encrypted Manual Note:</div>
                  <p className="text-xs italic text-gray-300">
                    "Completed the core Rust focus loop and verified zero telemetry. Productive flow state today."
                  </p>
                </div>
              </div>

              <div className="text-[10px] text-emerald-400 font-mono mt-4 pt-2 border-t border-white/5">
                ✓ Rendered in 0.4ms • 100% Offline • Zero LLM Tokens Used
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Optional Ollama Mode Demonstration */
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Sidebar Controls */}
          <div className="glass-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400 mb-6 bg-violet-500/10 p-2.5 rounded-xl border border-violet-500/20">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <span>Ollama Engine Connected</span>
              </div>

              <button
                onClick={handleGenerateSummary}
                disabled={isGenerating}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-xs mb-6 hover:from-violet-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25 cursor-pointer"
              >
                <Bot className="w-4 h-4" />
                <span>Compile AI Reflection Card</span>
              </button>

              <div className="text-xs font-mono text-[var(--text-muted)] mb-3">Interactive Q&amp;A Prompts:</div>
              <div className="space-y-2">
                {MOCK_AI_REFLECTIONS.chatResponses.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectChatQuery(idx)}
                    disabled={isGenerating}
                    className={`w-full text-left p-3 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                      selectedPromptIndex === idx
                        ? 'bg-violet-500/20 text-violet-600 dark:text-violet-300 border-violet-500/40'
                        : 'bg-[var(--bg-glass)] text-[var(--text-secondary)] border-[var(--border-glass)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item.query}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowPayloadInspector(!showPayloadInspector)}
              className="mt-6 flex items-center justify-between text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors pt-4 border-t border-[var(--border-glass)] cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                Payload Inspector
              </span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showPayloadInspector ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Live Terminal Streaming View */}
          <div className="md:col-span-2 glass-card p-6 border border-violet-500/30 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-glass)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
                <Terminal className="w-4 h-4 text-violet-400" />
                <span>Ollama Local Stream (localhost:11434)</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300">
                Model: llama3.2
              </span>
            </div>

            <div className="flex-1 bg-black/60 rounded-xl p-5 border border-white/5 font-mono text-xs sm:text-sm leading-relaxed text-gray-200 min-h-[180px]">
              {displayedText}
              {isGenerating && <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />}
            </div>

            {/* Expandable JSON Inspector */}
            {showPayloadInspector && (
              <div className="mt-4 p-4 rounded-xl bg-black/90 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 overflow-x-auto">
                <div className="text-[10px] text-gray-400 mb-2">// Direct JSON POST payload sent to localhost:11434/api/generate</div>
                <pre>{JSON.stringify({
                  model: "llama3.2",
                  prompt: "Summarize today's focus metrics: 1.5h VS Code, 45m Chrome, 1 Shield deflection.",
                  stream: true,
                  options: { temperature: 0.2 }
                }, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

