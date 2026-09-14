import React, { useState } from 'react';
import { DOCS_ARTICLES, DocArticle } from '../data/docsData';
import { BookOpen, Copy, Check, Search, FileText } from 'lucide-react';

export const DocsHub: React.FC = () => {
  const [activeDocId, setActiveDocId] = useState<string>('user-guide');
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const activeDoc = DOCS_ARTICLES.find((d) => d.id === activeDocId) || DOCS_ARTICLES[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeDoc.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredDocs = DOCS_ARTICLES.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="docs" className="py-24 px-6 max-w-7xl mx-auto border-t border-[var(--border-glass)]">
      <div className="text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
          Documentation Hub
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mt-3 mb-4">
          Complete Software Reference
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
          Browse full user guides, developer schemas, Ollama model setups, and safety workflows.
        </p>
      </div>

      {/* Docs Layout */}
      <div className="max-w-5xl mx-auto glass-card p-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
        {/* Sidebar Nav */}
        <div className="md:col-span-1 space-y-4 border-r border-[var(--border-glass)] pr-4">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)] absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-glass)] border border-[var(--border-glass)] rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="space-y-1.5">
            {filteredDocs.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setActiveDocId(doc.id)}
                className={`w-full text-left p-2.5 rounded-xl font-mono text-xs flex items-center justify-between transition-all ${
                  activeDocId === doc.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]'
                }`}
              >
                <span className="truncate">{doc.title}</span>
                <span className="text-[10px] opacity-60 uppercase">{doc.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Article Viewer */}
        <div className="md:col-span-3 font-mono text-xs text-[var(--text-secondary)]">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-glass)]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-violet-400" />
              <span className="font-bold text-[var(--text-primary)] text-sm">{activeDoc.title}</span>
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-glass)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-glass)] text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Doc'}</span>
            </button>
          </div>

          <div className="bg-slate-950/80 text-slate-200 p-5 rounded-xl border border-[var(--border-glass)] max-h-[450px] overflow-y-auto whitespace-pre-wrap leading-relaxed">
            {activeDoc.content}
          </div>
        </div>
      </div>
    </section>
  );
};
