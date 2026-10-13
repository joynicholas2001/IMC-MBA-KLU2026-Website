import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SDGSection from '../components/SDGSection';
import TracksGrid from '../components/TracksGrid';
import { Layers } from 'lucide-react';

export default function TracksPage() {
  const [selectedSdgFilter, setSelectedSdgFilter] = useState(null);

  const handleSelectSdg = (sdgId) => {
    setSelectedSdgFilter(sdgId);
    const tracksSection = document.getElementById('tracks');
    if (tracksSection) {
      const headerOffset = 100;
      const elementPosition = tracksSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClearSdgFilter = () => {
    setSelectedSdgFilter(null);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <PageHeader
        title="Conference Tracks & Sub-Themes"
        subtitle="12 multidisciplinary tracks encompassing management, artificial intelligence, sustainable finance, human capital, and green technology, aligned with the UN Sustainable Development Goals."
        breadcrumb="Tracks"
        badge="12 Multidisciplinary Tracks"
      />

      {/* SDG Filter Section */}
      <SDGSection onSelectSdg={handleSelectSdg} />

      {/* All Tracks Grid */}
      <TracksGrid
        selectedSdgFilter={selectedSdgFilter}
        onClearSdgFilter={handleClearSdgFilter}
      />
    </div>
  );
}
