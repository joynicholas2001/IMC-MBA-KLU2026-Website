import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Navigation, 
  Train, 
  Plane, 
  Landmark, 
  Sun,
  ShieldCheck,
  Compass
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CONFERENCE_INFO } from '../data/conference';

export default function VenueContact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Location & Connectivity"
          title="Venue, Travel & Contact Details"
          subtitle="Explore the lush green campus of KLEF at Vaddeswaram, Andhra Pradesh, and direct communication channels."
        />

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Venue & Postal Address */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-4 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>Conference Venue & Postal Address</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-navy-900 mb-3">
                Department of MBA, KLEF
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                  Department of MBA, KLEF (Deemed to be University), Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh, India – 522 302.
                </p>
              </div>

              {/* Campus Setting Details */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-1.5"></span>
                  <span>Set in a self-contained, eco-friendly green academic campus.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-1.5"></span>
                  <span>Situated in the Krishna–Guntur corridor, moments from Vijayawada and Amaravati.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-1.5"></span>
                  <span>Equipped with hybrid conferencing facilities for physical and virtual sessions.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={CONFERENCE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Conveners Contact Card (Page 9 Replica) */}
          <div className="lg:col-span-7 bg-navy-900 text-white p-6 sm:p-8 rounded-3xl border border-navy-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/50 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Contact the Conveners</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Conveners & Co-Convener Direct Lines
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                For questions regarding abstracts, presentation formats, local accommodation, or conference schedules, please contact the conveners.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {CONFERENCE_INFO.contacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">
                        {contact.role}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-2 mb-1 leading-snug">
                        {contact.name}
                      </h4>
                    </div>
                    <a
                      href={`tel:${contact.tel}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gold-400 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Email & Form Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-800/80 text-teal-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-teal-300 uppercase font-bold tracking-wider">Email Queries</div>
                    <a
                      href={CONFERENCE_INFO.gmailComposeUrl('Conference Inquiry – IMC 2026')}
                      onClick={(e) => CONFERENCE_INFO.handleEmailClick(e, 'Conference Inquiry – IMC 2026')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-teal-300 font-mono transition-colors"
                    >
                      {CONFERENCE_INFO.submissionEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-800/80 text-teal-200">
                    <ShieldCheck className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-teal-300 uppercase font-bold tracking-wider">Online Portal</div>
                    <a
                      href={CONFERENCE_INFO.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-teal-300 hover:underline flex items-center gap-1"
                    >
                      <span>Google Form</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-slate-400 italic">
              “Join us in shaping new horizons for a sustainable future.”
            </div>
          </div>
        </div>

        {/* Travel Information & Regional Attractions (Brochure Pages 2 & 3) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Gateway to the Venue
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 mb-3">
              Vijayawada & The Surrounding Region
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Vijayawada is one of Andhra Pradesh’s busiest commercial and trading centres, set on the banks of the Krishna River and ringed by the Indrakeeladri hills. With its major railway junction and airport, it serves as the primary gateway to KLEF at Vaddeswaram, reached comfortably by road. December is typically mild and pleasant in coastal Andhra Pradesh.
            </p>
          </div>

          {/* 6 Attractions Grid */}
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-teal-700" />
              <span>Places to Visit in the Region (Brochure Page 3):</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CONFERENCE_INFO.regionalAttractions.map((place, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500 hover:bg-teal-50/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 inline-block mb-2">
                      {place.tagline}
                    </span>
                    <h5 className="text-base font-bold text-navy-900 mb-1.5">
                      {place.name}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {place.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
