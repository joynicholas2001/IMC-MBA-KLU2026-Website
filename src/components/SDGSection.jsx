import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe2, Sparkles, ArrowRight, ExternalLink, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { SDGS_DATA } from '../data/sdgs';

export default function SDGSection({ onSelectSdg }) {
  const [hoveredSdg, setHoveredSdg] = useState(null);
  const navigate = useNavigate();

  const handleSdgCardClick = (sdgId) => {
    if (onSelectSdg) {
      onSelectSdg(sdgId);
    } else {
      navigate('/tracks');
    }
  };

  return (
    <section id="sdgs" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Global Framework"
          title="The 17 Sustainable Development Goals"
          subtitle="Anchoring academic discovery to the United Nations 2030 Agenda for Sustainable Development."
        />

        {/* Why It Matters Callout from Brochure (Page 6) */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-6 sm:p-7 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="p-3.5 rounded-2xl bg-teal-700 text-white shrink-0 shadow-sm">
              <Globe2 className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-teal-800 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Why It Matters for Your Research</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                “Every research paper, case study and practice-oriented contribution at the conference is encouraged to connect to one or more SDGs – from clean energy and climate action to quality education, decent work, responsible consumption and strong institutions.”
              </p>
            </div>
          </div>
        </div>

        {/* 17 SDGs Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {SDGS_DATA.map((sdg) => {
            return (
              <div
                key={sdg.id}
                onMouseEnter={() => setHoveredSdg(sdg)}
                onMouseLeave={() => setHoveredSdg(null)}
                onClick={() => handleSdgCardClick(sdg.id)}
                role="button"
                tabIndex={0}
                title={`Filter tracks by SDG ${sdg.id}: ${sdg.name}`}
                className="cursor-pointer group relative p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-28 focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                {/* SDG Top Color Strip & Number */}
                <div className="flex items-center justify-between">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shadow-xs"
                    style={{ backgroundColor: sdg.color, color: sdg.textColor }}
                  >
                    {sdg.number}
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: sdg.color }}
                  ></div>
                </div>

                {/* SDG Name */}
                <div className="mt-2">
                  <div className="text-xs font-bold text-slate-800 line-clamp-2 leading-tight group-hover:text-navy-900">
                    {sdg.name}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="text-[10px] text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mt-1">
                  <span>View Tracks</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>
            );
          })}

          {/* Agenda 2030 Badge */}
          <div className="p-3.5 rounded-xl border border-navy-900 bg-navy-950 text-white shadow-sm flex flex-col justify-center items-center text-center h-28">
            <span className="text-lg font-black text-gold-400 tracking-wider">2030</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200">AGENDA</span>
            <span className="text-[9px] text-slate-400 mt-1">Global Goals</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="text-xs sm:text-sm text-slate-600">
            Click on any SDG card to explore corresponding research tracks, or view the complete catalog.
          </div>
          <Link
            to="/tracks"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0"
          >
            <span>Explore All 12 Conference Tracks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
