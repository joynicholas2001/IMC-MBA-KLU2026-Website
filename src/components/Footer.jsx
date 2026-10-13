import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone,
  ArrowUp
} from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conference';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Tracks', to: '/tracks' },
    { name: 'Dates', to: '/dates' },
    { name: 'Registration', to: '/registration' },
    { name: 'Submission', to: '/submission' },
    { name: 'Committees', to: '/committees' },
    { name: 'Contact & Venue', to: '/contact' },
    { name: 'About KLEF', to: '/#about' },
  ];

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800">
      {/* Sleek Gradient Accent Line */}
      <div className="h-1 bg-gradient-to-r from-teal-500 via-gold-400 to-teal-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Institutional Branding */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logos/kl_seal_cover_transparent.png" 
                alt="KL University Seal" 
                className="h-9 sm:h-10 w-auto object-contain bg-white/5 p-1 rounded-full border border-white/10" 
              />
              <img 
                src="/assets/logos/imc_2026_emblem_transparent.png" 
                alt="IMC 2026 Logo" 
                className="h-9 sm:h-10 w-auto object-contain" 
              />
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight">
                  KL BUSINESS SCHOOL
                </h3>
                <p className="text-[11px] text-teal-300 font-semibold uppercase tracking-wider">
                  Department of MBA • KLEF (Deemed to be University)
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              IMC 2026: <strong className="text-white">“New Horizons for a Sustainable Future”</strong> • 22–23 Dec 2026 • Hybrid Mode (On-Campus + Online) • Green Fields, Vaddeswaram, A.P.
            </p>
          </div>

          {/* Compact 2-Column Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-teal-300 mb-2.5">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-teal-300 transition-colors truncate block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Submission */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-teal-300 mb-2.5">
              Direct Inquiries
            </h4>
            
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <a
                href={CONFERENCE_INFO.gmailComposeUrl('Conference Inquiry – IMC 2026')}
                onClick={(e) => CONFERENCE_INFO.handleEmailClick(e, 'Conference Inquiry – IMC 2026')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-white font-mono transition-colors truncate"
              >
                {CONFERENCE_INFO.submissionEmail}
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span className="font-mono text-[11px]">+91 97789 69858 / +91 82926 48008</span>
            </div>
          </div>

        </div>

        {/* Compact Bottom Bar */}
        <div className="pt-5 mt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © 2026 KL Business School, KLEF. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
