import React from 'react';
import { Shield, Github, Lock, Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  onNavigateToPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToPrivacy }) => {
  return (
    <footer className="py-16 px-6 max-w-7xl mx-auto border-t border-[var(--border-glass)] text-[var(--text-secondary)] font-sans text-xs">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center p-0.5 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md">
              <img
                src={logoImg}
                alt="LifeMirror Logo"
                className="w-full h-full rounded-md object-cover"
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              />
            </div>
            <span className="font-display font-bold text-base text-[var(--text-primary)]">LifeMirror Desktop</span>
          </div>
          <p className="text-[var(--text-muted)] max-w-sm text-center md:text-left text-[11px] font-mono">
            Privacy-first local AI productivity & focus reflection utility. 100% offline. Zero telemetry.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[var(--text-secondary)]">
          <a href="#features" className="hover:text-violet-500 transition-colors">Features</a>
          <a href="#timeline-demo" className="hover:text-violet-500 transition-colors">Timeline</a>
          <a href="#ai-experience" className="hover:text-violet-500 transition-colors">Local AI</a>
          <a
            href="#privacy-policy"
            onClick={() => onNavigateToPrivacy && onNavigateToPrivacy()}
            className="text-emerald-500 hover:text-emerald-600 font-semibold transition-colors flex items-center gap-1"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </a>
          <a href="#pricing" className="hover:text-violet-500 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-violet-500 transition-colors">FAQ</a>
          <a href="#downloads" className="hover:text-violet-500 transition-colors">Downloads</a>
          <a href="#docs" className="hover:text-violet-500 transition-colors">Docs</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors flex items-center gap-1">
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border-glass)] font-mono text-[11px] text-[var(--text-muted)]">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>SQLCipher Encrypted Local Storage • Zero Remote Cloud Calls</span>
        </div>

        <div>
          MIT License • Built with Rust, Tauri 2.0 & React.
        </div>
      </div>
    </footer>
  );
};

