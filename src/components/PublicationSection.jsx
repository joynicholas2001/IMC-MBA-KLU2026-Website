import React from 'react';
import { BookOpen, ShieldAlert, Award, FileSearch, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function PublicationSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Dissemination"
          title="Publication Opportunities"
          subtitle="Avenues for scholarly visibility in peer-reviewed proceedings and academic outlets."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Statement Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 shrink-0">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">
                  ISBN Conference Proceedings & Journal Outlets
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  “Selected papers presented at the conference will be considered for publication in an <strong className="text-navy-900">ISBN conference proceedings volume</strong> or in <strong className="text-navy-900">suitable journals</strong>, depending on manuscript quality, editorial assessment, peer review and the respective publication requirements.”
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <FileSearch className="w-5 h-5 text-teal-700 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Rigorous Peer Review</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <Award className="w-5 h-5 text-teal-700 shrink-0" />
                <span className="text-xs font-bold text-slate-700">ISBN Proceedings Volume</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Registered Presenters Only</span>
              </div>
            </div>
          </div>

          {/* Mandatory Clear Disclaimer Callout */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-4 shadow-sm">
            <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-1">
                Author Advisory & Publication Policy
              </h4>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed font-medium">
                <strong className="underline">Publication is not automatic or guaranteed.</strong> In strict compliance with academic standards, consideration is contingent upon rigorous editorial screening, independent double-blind peer review, and compliance with ethical guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
