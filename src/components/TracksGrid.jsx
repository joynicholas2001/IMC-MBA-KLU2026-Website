import React, { useState } from 'react';
import { Search, Filter, Sparkles, Tag, ArrowRight, X, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { TRACKS_DATA } from '../data/tracks';
import { SDGS_DATA } from '../data/sdgs';
import { CONFERENCE_INFO } from '../data/conference';

export default function TracksGrid({ selectedSdgFilter, onClearSdgFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(TRACKS_DATA.map(t => t.category))];

  const filteredTracks = TRACKS_DATA.filter(track => {
    const matchesSearch = 
      track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.trackNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'All' || track.category === selectedCategory;

    const matchesSdg = 
      !selectedSdgFilter || track.sdgs.includes(selectedSdgFilter);

    return matchesSearch && matchesCategory && matchesSdg;
  });

  const getSdgMeta = (id) => {
    return SDGS_DATA.find(s => s.id === id) || { name: `SDG ${id}`, color: '#007a87', textColor: '#ffffff' };
  };

  return (
    <section id="tracks" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="12 Indicative Tracks"
          title="Conference Themes & Sub-themes"
          subtitle="Original conceptual, empirical, interdisciplinary, and practice-oriented papers are invited across 12 thematic tracks."
        />

        {/* Filter and Search Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tracks by keywords (e.g. ESG, FinTech, AI, Supply Chain)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-sm placeholder:text-slate-400 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Active SDG Filter Tag */}
            {selectedSdgFilter && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
                <span>Filtered by SDG {selectedSdgFilter}</span>
                <button
                  onClick={onClearSdgFilter}
                  className="p-0.5 hover:bg-teal-200 rounded text-teal-900"
                  title="Clear SDG filter"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tracks Grid */}
        {filteredTracks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-base mb-4">No conference tracks matched your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                if (onClearSdgFilter) onClearSdgFilter();
              }}
              className="px-4 py-2 bg-teal-700 text-white text-xs font-bold rounded-lg hover:bg-teal-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTracks.map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-teal-600 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Track Number Badge and Code */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-navy-900 text-white font-mono font-black text-sm flex items-center justify-center shadow-xs group-hover:bg-teal-700 transition-colors">
                      {track.code}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                      {track.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-3 leading-snug group-hover:text-teal-800 transition-colors">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                {/* Footer with SDG Mappings and Action */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="mb-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      <span>Associated SDGs (from brochure):</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {track.sdgs.map((sdgNum) => {
                        const meta = getSdgMeta(sdgNum);
                        return (
                          <span
                            key={sdgNum}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold shadow-2xs"
                            style={{ backgroundColor: meta.color, color: meta.textColor }}
                            title={`SDG ${sdgNum}: ${meta.name}`}
                          >
                            <span>SDG {sdgNum}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <a
                    href={CONFERENCE_INFO.gmailComposeUrl(
                      `Abstract Submission – ${track.trackNumber}: ${track.title}`,
                      `Dear Organising Committee,\n\nI would like to submit my abstract for IMC 2026.\n\nSelected Track: ${track.trackNumber} – ${track.title}\n\nRegards,`
                    )}
                    onClick={(e) => CONFERENCE_INFO.handleEmailClick(
                      e,
                      `Abstract Submission – ${track.trackNumber}: ${track.title}`,
                      `Dear Organising Committee,\n\nI would like to submit my abstract for IMC 2026.\n\nSelected Track: ${track.trackNumber} – ${track.title}\n\nRegards,`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white text-xs font-bold transition-all border border-teal-200 hover:border-teal-700"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Submit to {track.trackNumber}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Indicative List Clarification Callout from Brochure */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-teal-900 text-xs sm:text-sm font-medium">
            <span className="font-bold">Note from Brochure:</span> “This is an indicative list. Contributions from areas not listed above will also be considered.”
          </div>
        </div>
      </div>
    </section>
  );
}
