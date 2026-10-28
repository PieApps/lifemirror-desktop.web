import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { WhyLifeMirror } from './components/WhyLifeMirror';
import { SCurveDemo } from './components/SCurveDemo';
import { LocalAiSimulator } from './components/LocalAiSimulator';
import { InterdictionDemo } from './components/InterdictionDemo';
import { PrivacyInspector } from './components/PrivacyInspector';
import { ArchitectureSection } from './components/ArchitectureSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FeatureGrid } from './components/FeatureGrid';
import { DownloadSection } from './components/DownloadSection';
import { DocsHub } from './components/DocsHub';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('lifemirror-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const [currentView, setCurrentView] = useState<'showcase' | 'privacy-policy'>(() => {
    return window.location.hash.startsWith('#privacy-policy') ? 'privacy-policy' : 'showcase';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('lifemirror-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#privacy-policy')) {
        setCurrentView('privacy-policy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('showcase');
        if (hash && hash !== '#' && hash !== '#/') {
          const targetId = hash.replace(/^#/, '');
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 60);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (currentView === 'privacy-policy') {
      window.location.hash = sectionId ? `#${sectionId}` : '#';
      setCurrentView('showcase');
      setTimeout(() => {
        if (sectionId) {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.location.hash = sectionId ? `#${sectionId}` : '#';
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNavigateToPrivacyPolicy = () => {
    window.location.hash = '#privacy-policy';
    setCurrentView('privacy-policy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentView('showcase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] selection:bg-violet-500 selection:text-white transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={toggleTheme} onNavigateToSection={handleNavigateToSection} />
      <main className="pt-16">
        {currentView === 'privacy-policy' ? (
          <PrivacyPolicyPage onBackToHome={handleBackToHome} />
        ) : (
          <>
            <HeroSection />
            <ScreenshotGallery />
            <WhyLifeMirror />
            <SCurveDemo />
            <LocalAiSimulator />
            <InterdictionDemo />
            <PrivacyInspector onNavigateToPrivacyPolicy={handleNavigateToPrivacyPolicy} />
            <ArchitectureSection />
            <PricingSection />
            <FaqSection />
            <FeatureGrid />
            <DownloadSection />
            <DocsHub />
          </>
        )}
      </main>
      <Footer onNavigateToPrivacy={handleNavigateToPrivacyPolicy} onNavigateToSection={handleNavigateToSection} />
    </div>
  );
};

export default App;

