import React from 'react';
import { 
  FileUp, 
  Send, 
  CreditCard, 
  MonitorPlay, 
  Mail, 
  CheckCircle, 
  FileCheck2, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CONFERENCE_INFO } from '../data/conference';

export default function SubmissionWorkflow() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONFERENCE_INFO.submissionEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const steps = [
    {
      num: 1,
      title: "Submit Abstract",
      deadline: "By 05 December 2026",
      desc: "Email your structured abstract to the conference email, explicitly mentioning your chosen conference track in the subject line or cover text.",
      icon: <FileUp className="w-5 h-5 text-teal-700" />
    },
    {
      num: 2,
      title: "Submit Full Paper",
      deadline: "By 15 December 2026",
      desc: "Send your complete research paper in editable MS Word format to icmbaklbs@gmail.com following the cover page author guidelines.",
      icon: <Send className="w-5 h-5 text-teal-700" />
    },
    {
      num: 3,
      title: "Register & Pay Fee",
      deadline: "Online Form",
      desc: "Complete the online registration form through Google Forms and pay the applicable fee for your delegate category.",
      icon: <CreditCard className="w-5 h-5 text-teal-700" />
    },
    {
      num: 4,
      title: "Present Your Work",
      deadline: "22–23 December 2026",
      desc: "Join the conference sessions and present your research either on-campus at KLEF Vaddeswaram or remotely via interactive online sessions.",
      icon: <MonitorPlay className="w-5 h-5 text-teal-700" />
    }
  ];

  return (
    <section id="submission" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Call for Papers"
          title="Paper Submission & Author Guidelines"
          subtitle="A clear four-step path from abstract submission to presentation and certificate issuance."
        />

        {/* 4 Steps Horizontal Workflow */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-600 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-teal-700 text-white font-mono font-black text-sm flex items-center justify-center shadow-xs">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2.5 py-1 rounded-full">
                      {step.deadline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">Step {step.num} of 4</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Email & Author Guidelines Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Submission Action Box */}
          <div className="lg:col-span-5 bg-navy-900 text-white p-6 sm:p-8 rounded-3xl border border-navy-800 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/50 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>Official Submission Channel</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Send Your Manuscript
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              All abstracts and full research papers must be emailed directly to the official conference submission address in editable MS Word format.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 flex items-center justify-between gap-3">
              <div className="truncate">
                <div className="text-[11px] text-teal-300 font-semibold uppercase tracking-wider">
                  Submission Email ID:
                </div>
                <a
                  href={CONFERENCE_INFO.gmailComposeUrl('Paper Submission – IMC 2026')}
                  onClick={(e) => CONFERENCE_INFO.handleEmailClick(e, 'Paper Submission – IMC 2026')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-white hover:text-teal-300 transition-colors font-mono"
                >
                  {CONFERENCE_INFO.submissionEmail}
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="space-y-3">
              <a
                href={CONFERENCE_INFO.gmailComposeUrl('Abstract Submission – IMC 2026', 'Dear Organising Committee,\n\nI would like to submit my abstract for IMC 2026.\n\nSelected Track: [Please mention your chosen track]\n\nRegards,')}
                onClick={(e) => CONFERENCE_INFO.handleEmailClick(e, 'Abstract Submission – IMC 2026', 'Dear Organising Committee,\n\nI would like to submit my abstract for IMC 2026.\n\nSelected Track: [Please mention your chosen track]\n\nRegards,')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Open Gmail to Submit Abstract</span>
              </a>

              <div className="text-[11px] text-slate-400 text-center">
                Editable MS Word format (.doc, .docx) required.
              </div>
            </div>
          </div>

          {/* Guidelines for Authors */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
              <FileCheck2 className="w-3.5 h-3.5 text-teal-700" />
              <span>Guidelines for Authors</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6">
              Manuscript Submission Requirements
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-0.5">Original & Unpublished Research</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit original, unpublished conceptual, empirical, interdisciplinary or practice-oriented work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-0.5">Track Mention & Editable File Format</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    State your chosen track in the email; send both the abstract and full paper in editable MS Word format (.doc / .docx).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-0.5">Cover Page Details</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Include on the cover page: paper title, author and co-author names, institution, mobile number and email ID.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-0.5">Presentation Mode & Certificates</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Presenters may join in person or online. Official certificates are provided to all registered delegates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
