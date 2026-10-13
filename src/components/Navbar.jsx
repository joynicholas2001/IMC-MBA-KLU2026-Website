import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Calendar, ChevronRight } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conference';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background page from scrolling or shifting when mobile menu overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', to: '/', id: 'home' },
    { name: 'About', to: '/#about', id: 'about' },
    { name: 'Tracks', to: '/tracks', id: 'tracks' },
    { name: 'Dates', to: '/dates', id: 'dates' },
    { name: 'Registration', to: '/registration', id: 'registration' },
    { name: 'Submission', to: '/submission', id: 'submission' },
    { name: 'Committees', to: '/committees', id: 'committees' },
    { name: 'Contact', to: '/contact', id: 'contact' },
  ];

  const isLinkActive = (link) => {
    if (link.to === '/') {
      return location.pathname === '/' && (!location.hash || location.hash === '#home');
    }
    if (link.to.startsWith('/#')) {
      const hash = link.to.replace('/', '');
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === link.to;
  };

  const handleNavClick = (e, link) => {
    setIsOpen(false);
    if (link.to.startsWith('/#')) {
      const hash = link.to.replace('/', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <>
      {/* Top Institutional Notification Bar */}
      <div className="bg-navy-950 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-1.5 sm:gap-2 text-teal-200 truncate">
            <span className="font-semibold text-white tracking-wide truncate">K L BUSINESS SCHOOL</span>
            <span>•</span>
            <span className="text-teal-300 font-medium truncate">DEPARTMENT OF MBA</span>
            <span className="hidden md:inline">•</span>
            <span className="text-slate-300 hidden md:inline truncate">KLEF (Deemed to be University)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 text-slate-300 shrink-0">
            <span className="inline-flex items-center gap-1 text-teal-300">
              <Calendar className="w-3 h-3 text-gold-400" />
              22–23 Dec 2026 (Hybrid)
            </span>
            <span className="hidden lg:inline">•</span>
            <span className="hidden lg:inline text-slate-300">Vaddeswaram, A.P.</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 relative transition-all duration-300 ${
          scrolled
            ? 'glass-header shadow-md py-2'
            : 'bg-white/98 backdrop-blur-md border-b border-slate-200 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logos and Institutional Identity from Brochure */}
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
            >
              {/* KL University Emblem (Hidden on smallest mobile to prevent navbar overflow, visible on sm+) */}
              <img 
                src="/assets/logos/kl_seal_cover_transparent.png" 
                alt="KL University Seal" 
                className="hidden sm:block h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-xs" 
              />
              
              <div className="h-8 w-px bg-slate-300 hidden sm:block"></div>

              {/* IMC 2026 Logo with SDG Wheel */}
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/logos/imc_2026_emblem_transparent.png" 
                  alt="IMC 2026 Logo" 
                  className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform shrink-0" 
                />
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-extrabold text-navy-900 tracking-tight leading-tight group-hover:text-teal-700 transition-colors">
                    IMC 2026
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-teal-700 uppercase tracking-wider leading-none mt-0.5">
                    KL Business School
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link);
                return (
                  <Link
                    key={link.id}
                    to={link.to}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-teal-700 bg-teal-50 font-bold border-b-2 border-teal-700'
                        : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/registration"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <span>Register Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button - Prominent, high contrast, guaranteed visible */}
            <div className="flex xl:hidden items-center shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-bold text-xs shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                  isOpen
                    ? 'bg-teal-700 text-white border-teal-700 ring-2 ring-teal-600/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-navy-900 border-slate-300'
                }`}
              >
                {isOpen ? (
                  <>
                    <X className="w-4 h-4 text-white" />
                    <span>Close</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-4 h-4 text-teal-700" />
                    <span>Menu</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <>
            {/* Backdrop Dimmer: sits behind dropdown and only dims below navbar */}
            <div
              className="fixed inset-0 top-[52px] sm:top-[64px] bg-navy-950/70 backdrop-blur-sm z-40 xl:hidden animate-fadeIn"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Dropdown Menu Panel hanging directly below navbar */}
            <div className="absolute top-full left-0 right-0 w-full xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100dvh-64px)] overflow-y-auto animate-fadeIn z-50">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link);
                  return (
                    <Link
                      key={link.id}
                      to={link.to}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-teal-50 text-teal-800 font-bold border-l-4 border-teal-700 shadow-xs'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  to="/registration"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-sm transition-all active:scale-98"
                >
                  <span>Register Now (Registration Portal)</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <a
                  href={CONFERENCE_INFO.gmailComposeUrl('Manuscript Submission – IMC 2026')}
                  onClick={(e) => {
                    setIsOpen(false);
                    CONFERENCE_INFO.handleEmailClick(e, 'Manuscript Submission – IMC 2026');
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-navy-900 text-navy-900 font-semibold text-sm hover:bg-navy-900 hover:text-white transition-all active:scale-98"
                >
                  <span>Submit Manuscript (icmbaklbs@gmail.com)</span>
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
