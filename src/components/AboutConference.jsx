import React from 'react';
import { 
  Network, 
  Compass, 
  Handshake, 
  GraduationCap, 
  Mic, 
  FileText, 
  MessagesSquare, 
  Share2, 
  Globe, 
  BookOpen, 
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CONFERENCE_INFO } from '../data/conference';

export default function AboutConference() {
  const objectiveIcons = [
    <Network className="w-6 h-6 text-teal-700" key="1" />,
    <Compass className="w-6 h-6 text-teal-700" key="2" />,
    <Handshake className="w-6 h-6 text-teal-700" key="3" />,
    <GraduationCap className="w-6 h-6 text-teal-700" key="4" />
  ];

  const highlightIcons = {
    "Keynote & Speaker Sessions": <Mic className="w-5 h-5 text-teal-700" />,
    "Paper Presentations": <FileText className="w-5 h-5 text-teal-700" />,
    "Panel Discussions": <MessagesSquare className="w-5 h-5 text-teal-700" />,
    "Academia–Industry Networking": <Share2 className="w-5 h-5 text-teal-700" />,
    "Hybrid Participation": <Globe className="w-5 h-5 text-teal-700" />,
    "Publication Opportunities": <BookOpen className="w-5 h-5 text-teal-700" />
  };

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Conference Overview"
          title="About the Conference"
          subtitle="A global multidisciplinary platform dedicated to research, dialogue, and collaborative action for sustainable prosperity."
        />

        {/* Narrative Description from Brochure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-4 uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Interdisciplinary Mandate</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4 leading-snug">
                Advancing practical, ethical, and inclusive solutions for a rapidly transforming world.
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                The <strong className="text-navy-900">International Multidisciplinary Conference on New Horizons for a Sustainable Future</strong> brings together scholars, business leaders, policymakers, practitioners and students to explore ideas that advance sustainable prosperity.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                Against the backdrop of rapid technological change, climate challenges and evolving societies, the conference promotes practical, ethical and inclusive solutions informed by the <strong className="text-teal-800">United Nations Sustainable Development Goals (SDGs)</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Organised by the Department of MBA, KL Business School, KLEF, the conference is a global platform for research, dialogue and action. Hosted in hybrid mode on <strong className="text-navy-900">22–23 December 2026</strong>, it welcomes participation from across disciplines and geographies, in person at the Vaddeswaram campus or online.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                <span>Hybrid Presentation Options</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>All 17 UN SDGs Integrated</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-navy-900"></span>
                <span>Delegates from Academia & Industry</span>
              </div>
            </div>
          </div>

          {/* Intended Participants Card */}
          <div className="lg:col-span-5 bg-navy-900 text-white p-6 sm:p-8 rounded-2xl border border-navy-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/70 border border-teal-500/50 text-teal-300 text-xs font-bold mb-4 uppercase tracking-wide">
                <Users className="w-3.5 h-3.5 text-gold-400" />
                <span>Target Audience</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Who Should Participate?
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                IMC 2026 invites diverse stakeholders across academia, corporate ecosystems, government, and civil society to participate and exchange perspectives.
              </p>

              <div className="space-y-2.5">
                {CONFERENCE_INFO.participants.map((person, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400/50 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-100">{person}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-teal-300 font-medium">
              Join delegates across multidisciplinary tracks in person or virtually.
            </div>
          </div>
        </div>

        {/* 4 Conference Objectives */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Core Mission
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2">
              Conference Objectives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONFERENCE_INFO.objectives.map((obj, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-teal-600 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {objectiveIcons[idx]}
                </div>
                <h4 className="text-base font-bold text-navy-900 mb-2 leading-snug">
                  {obj.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Highlights */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Event Components
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2">
              Conference Highlights
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONFERENCE_INFO.highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-600 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 shrink-0">
                  {highlightIcons[item.title] || <Sparkles className="w-5 h-5 text-teal-700" />}
                </div>
                <div>
                  <h4 className="text-base font-bold text-navy-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
