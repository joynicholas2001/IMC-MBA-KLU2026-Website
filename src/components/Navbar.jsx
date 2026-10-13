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
      <div className="bg-navy-950 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 text-teal-200">
            <span className="font-semibold text-white tracking-wide">K L BUSINESS SCHOOL</span>
            <span>•</span>
            <span className="text-teal-300 font-medium">DEPARTMENT OF MBA</span>
            <span>•</span>
            <span className="text-slate-300 hidden md:inline">KLEF (Deemed to be University)</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1 text-teal-300">
              <Calendar className="w-3 h-3 text-gold-400" />
              22–23 December 2026 (Hybrid Mode)
            </span>
            <span className="hidden lg:inline">•</span>
            <span className="hidden lg:inline text-slate-300">Vaddeswaram, Andhra Pradesh</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 relative transition-all duration-300 ${
          scrolled
            ? 'glass-header shadow-md py-2'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logos and Institutional Identity from Brochure */}
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 group focus:outline-none"
            >
              {/* KL University Emblem from PDF */}
              <img 
                src="/assets/logos/kl_seal_cover_transparent.png" 
                alt="KL University Seal" 
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-xs" 
              />
              
              <div className="h-8 w-px bg-slate-300 hidden sm:block"></div>

              {/* IMC 2026 Logo with SDG Wheel from PDF */}
              <div className="flex items-center gap-2.5">
                <img 
                  src="/assets/logos/imc_2026_emblem_transparent.png" 
                  alt="IMC 2026 Logo" 
                  className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform" 
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

            {/* Mobile Hamburger Toggle */}
            <div className="flex xl:hidden items-center gap-2">
              <Link
                to="/registration"
                onClick={() => setIsOpen(false)}
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-teal-700 rounded-md"
              >
                Register
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay (overlays website without pushing it down) */}
        {isOpen && (
          <>
            {/* Backdrop Dimmer covering the website */}
            <div
              className="fixed inset-0 top-0 bg-navy-950/60 backdrop-blur-xs z-40 xl:hidden animate-fadeIn"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Floating Dropdown Panel hanging from navbar */}
            <div className="absolute top-full left-0 right-0 w-full xl:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100dvh-80px)] overflow-y-auto animate-fadeIn z-50">
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
                  <span>Register Now (Conference Portal)</span>
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
