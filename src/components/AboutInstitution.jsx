import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Compass, 
  Sparkles,
  Milestone
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CONFERENCE_INFO } from '../data/conference';

export default function AboutInstitution() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Institutional Heritage"
          title="About KLEF & KL Business School"
          subtitle="A legacy of academic rigor, research innovation, and socially responsible leadership in the heart of Andhra Pradesh."
        />

        {/* KLEF Section */}
        <div className="mb-16">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3 uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-teal-700" />
                  <span>KLEF (Deemed to be University)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4">
                  Koneru Lakshmaiah Education Foundation
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 text-base">
                  Koneru Lakshmaiah Education Foundation (KLEF), widely known as <strong className="text-navy-900">KL University</strong>, traces its origins to KL College of Engineering, established in 1980–81. It gained autonomous status in 2006 and was recognised as a deemed-to-be university in 2009.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Based at <strong className="text-navy-900">Green Fields, Vaddeswaram, Andhra Pradesh</strong>, KLEF is a multidisciplinary institution committed to academic excellence, research, innovation, entrepreneurship and socially responsible learning. The campus sits in the Krishna–Guntur region close to Vijayawada and the Amaravati capital region, providing a lush, green, self-contained academic environment.
                </p>
              </div>

              {/* Campus Highlights Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-2xl p-6 border border-navy-800 shadow-md">
                <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Campus & Regional Context</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Green Fields Campus, Vaddeswaram</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Delegates attending in person will find a green, self-contained academic campus—an apt setting for a conference devoted to sustainable futures.
                </p>
                <div className="space-y-2 text-xs text-teal-100 font-medium border-t border-navy-800 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                    <span>Set in the vibrant Krishna–Guntur coastal region</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span>Proximity to Vijayawada rail and air gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span>Rich cultural & heritage sites along the Krishna River</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actual Photographs from Page 4 of Brochure */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm group">
                <div className="overflow-hidden h-48 sm:h-56">
                  <img 
                    src="/assets/logos/klef_campus.png" 
                    alt="KLEF Campus photograph from conference brochure" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5 bg-white text-center border-t border-slate-100">
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                    KLEF Campus (Green Fields, Vaddeswaram)
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm group">
                <div className="overflow-hidden h-48 sm:h-56">
                  <img 
                    src="/assets/logos/kl_business_school_building.png" 
                    alt="KL Business School building photograph from conference brochure" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5 bg-white text-center border-t border-slate-100">
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                    KL Business School
                  </span>
                </div>
              </div>
            </div>

            {/* Milestones Horizontal Timeline (Page 4) */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Historical Milestones
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CONFERENCE_INFO.milestones.map((m, idx) => (
                  <div 
                    key={idx}
                    className="relative bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-teal-600 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl sm:text-2xl font-black text-teal-700 font-mono tracking-tight">
                        {m.year}
                      </span>
                      <span className="p-1.5 rounded-lg bg-teal-50 text-teal-700">
                        <Milestone className="w-4 h-4" />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900 mb-1">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* KL Business School & MBA Department Section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3 uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
              <span>Department of MBA</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4">
              KL Business School & The MBA Department
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              KL Business School nurtures management education through an industry-oriented and interdisciplinary learning environment. Its Department of MBA connects core business disciplines such as finance, marketing, human resource management, operations and business analytics with leadership, entrepreneurship, emerging technologies and responsible decision-making. The department seeks to foster research engagement, professional competence and solutions to contemporary business and societal challenges.
            </p>
          </div>

          {/* Core Management Disciplines Tags */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Management Disciplines & Research Verticals:
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {CONFERENCE_INFO.disciplines.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Our Approach Banner (Exact Quote from Page 4) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-teal-900 text-white border border-teal-700/50 shadow-md">
            <div className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-1.5 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>Our Approach</span>
            </div>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-teal-50 italic">
              “Industry-oriented, interdisciplinary and research-engaged – connecting core business disciplines with leadership, entrepreneurship, emerging technologies and responsible decision-making.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
