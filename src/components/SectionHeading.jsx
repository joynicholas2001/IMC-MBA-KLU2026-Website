import React from 'react';

export default function SectionHeading({ badge, title, subtitle, centered = true, dark = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 border ${
          dark 
            ? 'bg-teal-900/60 text-teal-200 border-teal-700/60' 
            : 'bg-teal-50 text-teal-800 border-teal-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 ${
        dark ? 'text-white' : 'text-navy-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-12 bg-teal-700 rounded-full"></div>
        <div className="h-1 w-3 bg-gold-500 rounded-full"></div>
      </div>
    </div>
  );
}
