import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumb, badge = "IMC 2026" }) {
  return (
    <div className="relative bg-gradient-to-br from-navy-950 via-teal-950 to-navy-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-teal-800/40 overflow-hidden">
      {/* Decorative background glow and grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 hover:text-teal-300 transition-colors"
          >
            <HomeIcon className="w-3.5 h-3.5 text-teal-400" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-teal-300 font-semibold">{breadcrumb || title}</span>
        </nav>

        {/* Badge & Title */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/60 border border-teal-600/40 text-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
          <span>{badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
