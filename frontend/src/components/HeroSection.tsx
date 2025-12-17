// frontend/src/components/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DashboardPreview from './DashboardPreview';
import { Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20" />

      {/* Blue tech glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full">
        <div className="w-full h-full opacity-15 bg-blue-500 blur-[140px]" />
      </div>

      <div
        className={`relative z-10 max-w-5xl text-center space-y-8 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full bg-muted text-blue-500">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Live Vehicle Intelligence
            <Activity className="h-3.5 w-3.5 text-blue-500" />
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance">
          <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">
            Predict.
          </span>{' '}
          <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">
            Prevent.
          </span>{' '}
          <span className="text-foreground">Optimize.</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
          AutoMind AI is a secure, agentic AI ecosystem that predicts vehicle failures before they occur,
          autonomously schedules maintenance, and feeds insights back to manufacturing teams — all under
          continuous UEBA monitoring.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700 text-base h-12 px-8 min-h-[48px]"
            onClick={() => {
              const el = document.getElementById('dashboard');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Live Dashboard
          </Button>

          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-muted text-base h-12 px-8 min-h-[48px]"
            onClick={() => {
              const el = document.getElementById('architecture');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            How It Works
          </Button>
        </div>

        {/* Footer note */}
        <div className="pt-6 text-sm text-muted-foreground">
          Simulated IoT data • Multi-Agent AI • FastAPI + React • Secure by design
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
