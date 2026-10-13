import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutConference from '../components/AboutConference';
import AboutInstitution from '../components/AboutInstitution';
import ThemePillars from '../components/ThemePillars';
import SDGSection from '../components/SDGSection';
import FAQAccordion from '../components/FAQAccordion';
import { 
  Layers, 
  Calendar, 
  CreditCard, 
  FileText, 
  Users, 
  MapPin, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conference';

export default function Home() {
  const portals = [
    {
      title: '12 Conference Tracks',
      badge: 'Multidisciplinary',
      desc: 'Explore all 12 tracks spanning Sustainable Management, Artificial Intelligence, Green Marketing, Fintech, and ESG Governance.',
      link: '/tracks',
      icon: Layers,
      color: 'teal',
      action: 'Browse Tracks',
    },
    {
      title: 'Important Dates',
      badge: 'Schedule & Timeline',
      desc: 'Milestones for abstract submission, review notification, full paper submission, and conference inauguration.',
      link: '/dates',
      icon: Calendar,
      color: 'amber',
      action: 'View Dates',
    },
    {
      title: 'Registration & Fees',
      badge: 'Delegate Categories',
      desc: 'Category-wise fee structure for Academicians, Research Scholars, Students, Industry, and International Delegates.',
      link: '/registration',
      icon: CreditCard,
      color: 'emerald',
      action: 'Fee Details & Portal',
    },
    {
      title: 'Call for Papers & Submission',
      badge: 'Author Guidelines',
      desc: 'Manuscript preparation criteria, formatting rules (.doc/.docx), cover page instructions, and indexed journal opportunities.',
      link: '/submission',
      icon: FileText,
      color: 'sky',
      action: 'Submission Guidelines',
    },
    {
      title: 'Conference Committees',
      badge: 'Leadership & Board',
      desc: 'Meet our Chief Patrons, University Leadership, Conveners, Advisory Board, and Faculty Organising Committee.',
      link: '/committees',
      icon: Users,
      color: 'indigo',
      action: 'View Committees',
    },
    {
      title: 'Venue & Travel Information',
      badge: 'Location & Transit',
      desc: 'KLEF Green Fields Campus in Vaddeswaram, Andhra Pradesh, transit from Vijayawada airport/railway, and conveners contact.',
      link: '/contact',
      icon: MapPin,
      color: 'rose',
      action: 'Venue & Contacts',
    },
  ];

  return (
    <>
      <Hero />
      <AboutConference />
      <AboutInstitution />
      <ThemePillars />
      <SDGSection />

      {/* Conference Portals Hub Navigation Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              Dedicated Portals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Explore Conference Sections
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Navigate to dedicated pages for tracks, schedules, author instructions, registration portals, and contact directories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portals.map((portal, idx) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={idx}
                  to={portal.link}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-500 transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-all shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full group-hover:bg-teal-50 group-hover:text-teal-800 transition-colors">
                        {portal.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-teal-700 transition-colors mb-2.5">
                      {portal.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {portal.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-teal-700 font-bold text-xs sm:text-sm group-hover:text-teal-800">
                    <span>{portal.action}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}
