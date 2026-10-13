import React from 'react';
import { Calendar, Clock, AlertCircle, FileCheck, Presentation } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CONFERENCE_INFO } from '../data/conference';

export default function ImportantDates() {
  const icons = [
    <Clock className="w-6 h-6 text-teal-700" key="1" />,
    <FileCheck className="w-6 h-6 text-teal-700" key="2" />,
    <Presentation className="w-6 h-6 text-gold-500" key="3" />
  ];

  return (
    <section id="dates" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Submission Timeline"
          title="Important Dates"
          subtitle="Key deadlines for abstract review, manuscript submission, and conference presentation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CONFERENCE_INFO.importantDates.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-6 sm:p-8 border transition-all flex flex-col justify-between ${
                item.isPrimary
                  ? 'bg-gradient-to-b from-navy-900 to-navy-950 text-white border-navy-800 shadow-xl'
                  : 'bg-slate-50 text-navy-900 border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-md'
              }`}
            >
              {/* Primary Event Badge */}
              {item.isPrimary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gold-500 text-navy-950 text-xs font-black tracking-wider uppercase shadow-md">
                  Conference Event
                </div>
              )}

              <div>
                {/* Date Display */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${
                      item.isPrimary ? 'text-gold-400' : 'text-teal-700'
                    }`}>
                      {item.date}
                    </span>
                    <span className={`text-sm sm:text-base font-bold uppercase tracking-wider ${
                      item.isPrimary ? 'text-teal-200' : 'text-slate-500'
                    }`}>
                      {item.month}
                    </span>
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    item.isPrimary ? 'bg-white/10 border border-white/20' : 'bg-white border border-slate-200'
                  }`}>
                    {icons[idx]}
                  </div>
                </div>

                <h3 className={`text-lg sm:text-xl font-bold mb-3 ${
                  item.isPrimary ? 'text-white' : 'text-navy-900'
                }`}>
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  item.isPrimary ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Status Note */}
              <div className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs font-semibold ${
                item.isPrimary ? 'border-white/10 text-teal-300' : 'border-slate-200 text-teal-800'
              }`}>
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span>Active Submission Window</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bring Your Research Banner (from Page 7) */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-sm font-bold shadow-2xs">
            <span>“Bring your research to new horizons”</span>
          </div>
        </div>
      </div>
    </section>
  );
}
