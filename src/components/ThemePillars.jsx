import React from 'react';
import { Lightbulb, Briefcase, Cpu, Users, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CONFERENCE_INFO } from '../data/conference';

export default function ThemePillars() {
  const pillarIcons = {
    innovation: <Lightbulb className="w-7 h-7 text-amber-500" />,
    business: <Briefcase className="w-7 h-7 text-sky-600" />,
    technology: <Cpu className="w-7 h-7 text-teal-600" />,
    society: <Users className="w-7 h-7 text-purple-600" />
  };

  const pillarBorderColors = {
    innovation: 'hover:border-amber-400',
    business: 'hover:border-sky-500',
    technology: 'hover:border-teal-500',
    society: 'hover:border-purple-500'
  };

  const pillarHeaderColors = {
    innovation: 'text-amber-600 bg-amber-50 border-amber-200',
    business: 'text-sky-700 bg-sky-50 border-sky-200',
    technology: 'text-teal-700 bg-teal-50 border-teal-200',
    society: 'text-purple-700 bg-purple-50 border-purple-200'
  };

  return (
    <section id="theme" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Framework"
          title="Conference Theme & The Four Pillars"
          subtitle="“New Horizons for a Sustainable Future” — Integrating Innovation, Business, Technology and Society."
        />

        {/* Brochure Narrative Card */}
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3">
              Guided by the United Nations Sustainable Development Goals
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              The world is undergoing an unprecedented transformation. Technological change, climate challenges and evolving societies are compelling organisations, governments and institutions to rethink how they operate, compete and create value. The conference theme, <strong className="text-navy-900">“New Horizons for a Sustainable Future”</strong>, invites participants to integrate innovation, business, technology and society in pursuit of practical, ethical and inclusive solutions – each informed by the United Nations SDGs.
            </p>
          </div>
        </div>

        {/* The Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFERENCE_INFO.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm ${pillarBorderColors[pillar.id]} transition-all flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1`}
            >
              <div>
                {/* Pillar Icon and Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                    {pillarIcons[pillar.id]}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border ${pillarHeaderColors[pillar.id]}`}>
                    Pillar
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-navy-900 mb-1 tracking-tight">
                  {pillar.title}
                </h3>
                <div className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  {pillar.subtitle}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-teal-700 transition-colors">
                <span>Integrated Track Theme</span>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
