import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  FileText 
} from 'lucide-react';
import Countdown from './Countdown';
import { CONFERENCE_INFO } from '../data/conference';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-[#0c2340] text-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-amber-500 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Institutional & Conference Identity Lockup */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 items-center p-3 sm:p-4 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl">
            
            {/* Center: Official IMC 2026 SDG Wheel Emblem (Positioned top on mobile, centered on desktop) */}
            <div className="order-1 sm:col-span-2 md:col-span-2 md:order-2 flex flex-col items-center justify-center py-1">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal-500 via-amber-400 to-teal-500 opacity-40 blur-md group-hover:opacity-75 transition-opacity"></div>
                <div className="relative p-2 rounded-full bg-navy-950/90 border border-white/20 shadow-2xl">
                  <img 
                    src="/assets/logos/imc_2026_emblem_transparent.png" 
                    alt="Official IMC 2026 SDG Wheel Emblem" 
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-105 transition-transform drop-shadow-[0_4px_12px_rgba(0,122,135,0.5)]"
                  />
                </div>
              </div>
              <div className="mt-1.5 text-[11px] font-extrabold tracking-widest text-teal-300 font-mono">
                IMC 2026
              </div>
            </div>

            {/* Left Wing: Organizing School & Department */}
            <div className="order-2 sm:col-span-1 md:col-span-5 md:order-1 flex items-center gap-3 text-left p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <img 
                src="/assets/logos/kl_seal_cover_transparent.png" 
                alt="KL University Seal" 
                className="h-10 sm:h-12 w-auto object-contain shrink-0 drop-shadow-md" 
              />
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                  Organised By
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-snug truncate">
                  K L Business School
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight truncate">
                  Department of MBA • KLEF
                </div>
                <div className="text-[10px] text-teal-400 font-semibold mt-0.5">
                  Deemed to be University
                </div>
              </div>
            </div>

            {/* Right Wing: Schedule, Format & Location */}
            <div className="order-3 sm:col-span-1 md:col-span-5 md:order-3 flex items-center justify-between sm:justify-start md:justify-end gap-3 text-left md:text-right p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Conference Schedule
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                  22–23 December 2026
                </div>
                <div className="text-[11px] sm:text-xs text-teal-300 font-medium leading-tight truncate">
                  Hybrid (On-Campus + Online)
                </div>
                <div className="text-[10px] text-slate-300 font-semibold mt-0.5 truncate">
                  Vaddeswaram, Andhra Pradesh
                </div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-teal-900/60 border border-teal-700/50 text-gold-400 shrink-0">
                <Calendar className="w-5 h-5 text-gold-400" />
              </div>
            </div>

          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block text-[11px] sm:text-xs font-extrabold tracking-widest uppercase text-teal-300 mb-2.5 font-mono">
            International Multidisciplinary Conference
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight break-words">
            <span className="block text-lg sm:text-2xl lg:text-3xl text-slate-200 font-bold mb-1.5">
              2026 INTERNATIONAL MULTIDISCIPLINARY CONFERENCE ON
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-white">
              NEW HORIZONS FOR A SUSTAINABLE FUTURE
            </span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-teal-100 font-medium italic mb-8 max-w-3xl mx-auto">
            “Integrating Innovation, Business, Technology and Society”
          </p>

          {/* Four Pillars Pill Bar (Matching Brochure Cover & Page 6) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>INNOVATION</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-sky-500/40 text-sky-300 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>BUSINESS</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span>TECHNOLOGY</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>SOCIETY</span>
            </div>
          </div>


          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/registration"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-base shadow-lg shadow-teal-900/50 hover:shadow-teal-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/submission"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-gold-400" />
              <span>Submit Your Paper</span>
            </Link>

            <Link
              to="/tracks"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-teal-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <span>View 12 Tracks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dynamic Countdown Timer Component */}
          <div className="pt-6 border-t border-white/10">
            <Countdown targetDate={CONFERENCE_INFO.startDate} />
          </div>
        </div>

      </div>
    </section>
  );
}
