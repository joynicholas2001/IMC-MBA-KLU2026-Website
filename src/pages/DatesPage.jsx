import React from 'react';
import PageHeader from '../components/PageHeader';
import Countdown from '../components/Countdown';
import ImportantDates from '../components/ImportantDates';
import { Calendar, Clock, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFERENCE_INFO } from '../data/conference';

export default function DatesPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <PageHeader
        title="Important Dates & Deadlines"
        subtitle="Key milestones for IMC 2026. Please mark your calendars and adhere to the scheduled submission and registration dates."
        breadcrumb="Dates"
        badge="Schedule & Deadlines"
      />

      {/* Prominent Live Countdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Live Conference Countdown
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mt-2">
              Conference Inauguration: 22 December 2026
            </h2>
          </div>
          <Countdown />
        </div>
      </div>

      {/* Important Dates Timeline Cards */}
      <div className="mt-8">
        <ImportantDates />
      </div>

      {/* Submission & Registration CTA Banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-teal-800 to-navy-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>Deadlines Approaching</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Submit Your Abstract Early
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
                Abstract submission closes on 15 November 2026. Early submissions receive expedited peer review.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                to="/submission"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Author Guidelines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/registration"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95"
              >
                <span>View Fees</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
