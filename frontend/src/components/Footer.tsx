import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              AutoMind AI is a secure, agentic AI platform for predictive vehicle maintenance,
              autonomous service scheduling, and manufacturing intelligence.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-blue-500 hover:text-blue-400 transition-colors"
              >
                {/* Twitter */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-blue-500 hover:text-blue-400 transition-colors"
              >
                {/* LinkedIn */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 9h4v12H2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-blue-500 hover:text-blue-400 transition-colors"
              >
                {/* GitHub */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Live Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Technology</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#architecture"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Agentic Architecture
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  UEBA & Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 AutoMind AI — EY Techathon 6.0</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
