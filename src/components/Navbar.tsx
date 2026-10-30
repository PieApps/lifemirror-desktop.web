import React, { useState, useEffect } from 'react';
import { Shield, Github, Sun, Moon, Download, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { APP_LINKS } from '../constants/links';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onNavigateToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (targetId: string, e: React.MouseEvent) => {
    if (onNavigateToSection) {
      e.preventDefault();
      onNavigateToSection(targetId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[var(--bg-card)] backdrop-blur-xl border-b border-[var(--border-glass)] shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" onClick={(e) => handleLinkClick('', e)} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 via-cyan-400 to-violet-500 p-[2px] shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
            <img
              src={logoImg}
              alt="LifeMirror Logo"
              className="w-full h-full rounded-full object-cover"
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-[var(--text-primary)] tracking-tight flex items-center gap-1.5">
              LifeMirror <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 dark:text-violet-300 border border-violet-500/30">Desktop</span>
            </span>
            <span className="text-[10px] text-[var(--text-muted)] -mt-1 tracking-wider uppercase">100% Offline Focus Tracker</span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <a href="#features" onClick={(e) => handleLinkClick('features', e)} className="hover:text-violet-500 transition-colors">Features</a>
          <a href="#timeline-demo" onClick={(e) => handleLinkClick('timeline-demo', e)} className="hover:text-violet-500 transition-colors">Timeline</a>
          <a href="#ai-experience" onClick={(e) => handleLinkClick('ai-experience', e)} className="hover:text-violet-500 transition-colors">AI (Optional)</a>
          <a href="#privacy" onClick={(e) => handleLinkClick('privacy', e)} className="hover:text-violet-500 transition-colors">Privacy</a>
          <a href="#pricing" onClick={(e) => handleLinkClick('pricing', e)} className="hover:text-violet-500 transition-colors">Pricing</a>
          <a href="#faq" onClick={(e) => handleLinkClick('faq', e)} className="hover:text-violet-500 transition-colors">FAQ</a>
          <a href="#ecosystem" onClick={(e) => handleLinkClick('ecosystem', e)} className="hover:text-violet-500 transition-colors">Ecosystem</a>
          <a href="#downloads" onClick={(e) => handleLinkClick('downloads', e)} className="hover:text-violet-500 transition-colors">Downloads</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={APP_LINKS.github.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm"
            aria-label="GitHub Repository"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-violet-600" />}
          </button>

          <a
            href="#downloads"
            onClick={(e) => handleLinkClick('downloads', e)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

