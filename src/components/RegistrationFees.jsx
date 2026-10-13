import React from 'react';
import { Check, ExternalLink, ShieldCheck, QrCode } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PRICING_DATA } from '../data/pricing';
import { CONFERENCE_INFO } from '../data/conference';

export default function RegistrationFees() {
  return (
    <section id="registration" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Delegate Categories"
          title="Registration Fees"
          subtitle="Transparent, subsidized fee structures for domestic and international participants."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRICING_DATA.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                tier.highlight
                  ? 'border-teal-600 ring-2 ring-teal-600/20 shadow-lg -translate-y-1'
                  : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                {/* Header & Category Code */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-navy-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                    {tier.code}
                  </span>
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-4 leading-snug">
                  {tier.category}
                </h3>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-mono">
                      {tier.feeInr}
                    </span>
                    {tier.feeUsd && (
                      <span className="text-sm font-bold text-teal-700">
                        / {tier.feeUsd}
                      </span>
                    )}
                  </div>
                  {tier.internationalNote && (
                    <div className="text-xs font-semibold text-teal-700 mt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                      <span>{tier.internationalNote}</span>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-600">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={CONFERENCE_INFO.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all ${
                    tier.highlight
                      ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-navy-900'
                  }`}
                >
                  <span>Register as {tier.code}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Registration CTA Card with QR Code from PDF */}
        <div className="bg-navy-900 text-white rounded-3xl p-6 sm:p-10 border border-navy-800 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Official Registration Portal</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Secure Your Participation
            </h3>
            <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
              Registration is completed through the official online Google Form: scan the QR code or click the registration button below.
            </p>

            <div className="pt-2">
              <a
                href={CONFERENCE_INFO.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-sm shadow-lg shadow-teal-950/50 hover:shadow-teal-600/30 transition-all inline-flex items-center gap-2"
              >
                <span>Open Registration Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Authentic QR Code from Brochure */}
          <div className="shrink-0 flex flex-col items-center bg-white p-3.5 rounded-2xl shadow-md border border-slate-200 text-navy-900">
            <img 
              src="/assets/logos/registration_qr_code.png" 
              alt="Official Google Form Registration QR Code from Brochure" 
              className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
            />
            <span className="text-[11px] font-bold text-slate-700 mt-2 font-mono">
              Scan to Register
            </span>
            <span className="text-[9px] text-teal-800 font-semibold font-mono">
              forms.gle/HTLtp4W5AYuTjwNF7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
