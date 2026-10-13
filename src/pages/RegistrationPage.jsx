import React from 'react';
import PageHeader from '../components/PageHeader';
import RegistrationFees from '../components/RegistrationFees';
import { ShieldCheck, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RegistrationPage() {
  const steps = [
    {
      step: '01',
      title: 'Submit Abstract / Paper',
      desc: 'Submit your manuscript via email to icmbaklbs@gmail.com and await peer-review acceptance notification.',
    },
    {
      step: '02',
      title: 'Receive Acceptance Letter',
      desc: 'Upon acceptance notification, prepare to complete author registration and fee payment.',
    },
    {
      step: '03',
      title: 'Complete Fee Remittance',
      desc: 'Transfer the applicable delegate fee via NEFT / RTGS / UPI to the official KLEF university account.',
    },
    {
      step: '04',
      title: 'Fill Online Registration Form',
      desc: 'Upload proof of payment and author details to the Google Form to receive your official registration confirmation.',
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <PageHeader
        title="Conference Registration & Fees"
        subtitle="Transparent delegate fee structure for academicians, industry professionals, research scholars, students, and international participants."
        breadcrumb="Registration"
        badge="Registration Portal"
      />

      {/* 4-Step Registration Process Flow */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-3">
              How to Register for IMC 2026
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-mono font-bold text-base flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Pricing Matrix, Inclusions & Bank Details */}
      <RegistrationFees />
    </div>
  );
}
