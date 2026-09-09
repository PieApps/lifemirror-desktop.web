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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentView, setCurrentView] = useState<'showcase' | 'privacy-policy'>(() => {
    return window.location.hash.startsWith('#privacy-policy') ? 'privacy-policy' : 'showcase';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#privacy-policy')) {
        setCurrentView('privacy-policy');
      } else if (window.location.hash === '' || window.location.hash === '#') {
        setCurrentView('showcase');
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

  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentView('showcase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d0d11] text-gray-100 selection:bg-violet-500 selection:text-white transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={toggleTheme} onNavigateToPrivacy={() => setCurrentView('privacy-policy')} />
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
            <PrivacyInspector />
            <ArchitectureSection />
            <PricingSection />
            <FaqSection />
            <FeatureGrid />
            <DownloadSection />
            <DocsHub />
          </>
        )}
      </main>
      <Footer onNavigateToPrivacy={() => setCurrentView('privacy-policy')} />
    </div>
  );
};

export default App;

