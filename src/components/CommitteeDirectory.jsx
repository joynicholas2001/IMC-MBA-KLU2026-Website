import React from 'react';
import { Award, Shield, UserCheck, Users, Sparkles, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { COMMITTEES_DATA } from '../data/committees';

export default function CommitteeDirectory() {
  return (
    <section id="committees" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership & Organisation"
          title="Conference Committees"
          subtitle="Distinguished academic leadership and organizing committee of the International Multidisciplinary Conference 2026."
        />

        {/* Chief Patron Card */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-teal-500/30 shadow-xl text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/40 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>{COMMITTEES_DATA.chiefPatron.role}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
              {COMMITTEES_DATA.chiefPatron.name}
            </h3>
            <p className="text-teal-300 text-sm font-semibold">
              {COMMITTEES_DATA.chiefPatron.designation}
            </p>
          </div>
        </div>

        {/* Patrons & Conference Advisors in Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Patrons */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-200">
              <div className="p-2 rounded-xl bg-teal-700 text-white">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-navy-900">Patrons</h3>
                <p className="text-xs text-slate-500">Executive University Leadership</p>
              </div>
            </div>

            <div className="space-y-3">
              {COMMITTEES_DATA.patrons.map((patron, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-teal-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    <span className="text-sm font-bold text-navy-900">{patron.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                    {patron.designation}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Conference Advisors & Executive Leadership */}
          <div className="flex flex-col gap-6">
            {/* Advisors */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200">
                <div className="p-2 rounded-xl bg-teal-700 text-white">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-navy-900">Conference Advisors</h3>
                  <p className="text-xs text-slate-500">Academic Deans & Department Heads</p>
                </div>
              </div>

              <div className="space-y-3">
                {COMMITTEES_DATA.advisors.map((adv, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-teal-400 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                      <span className="text-sm font-bold text-navy-900">{adv.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {adv.designation}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conveners & Organising Secretary */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex-1">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200">
                <div className="p-2 rounded-xl bg-teal-700 text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-navy-900">Conveners & Secretarial Officers</h3>
                  <p className="text-xs text-slate-500">Conference Operations & Coordination</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMMITTEES_DATA.conveners.map((conv, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 uppercase">
                      {conv.role}
                    </span>
                    <h4 className="text-sm font-bold text-navy-900 mt-2 mb-0.5">{conv.name}</h4>
                    <span className="text-xs text-slate-500 font-mono">{conv.phone}</span>
                  </div>
                ))}

                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 uppercase">
                    {COMMITTEES_DATA.coConvener.role}
                  </span>
                  <h4 className="text-sm font-bold text-navy-900 mt-2 mb-0.5">{COMMITTEES_DATA.coConvener.name}</h4>
                  <span className="text-xs text-slate-500 font-mono">{COMMITTEES_DATA.coConvener.phone}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 uppercase">
                    {COMMITTEES_DATA.organisingSecretary.role}
                  </span>
                  <h4 className="text-sm font-bold text-navy-900 mt-2 mb-0.5">{COMMITTEES_DATA.organisingSecretary.name}</h4>
                  <span className="text-xs text-slate-500">Department of MBA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organising Committee Grid (15 Members with Brochure Diamond Markers) */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200">
              Department of MBA Faculty
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 mt-2">
              Organising Committee
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {COMMITTEES_DATA.organisingCommittee.map((member, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-teal-400 transition-colors"
              >
                {/* Gold Diamond Icon matching Brochure Page 9 */}
                <div className="w-2.5 h-2.5 rotate-45 bg-amber-500 shrink-0"></div>
                <span className="text-sm font-bold text-slate-800">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
