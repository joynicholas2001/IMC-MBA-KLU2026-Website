import React from 'react';
import PageHeader from '../components/PageHeader';
import VenueContact from '../components/VenueContact';

export default function ContactPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <PageHeader
        title="Venue & Contact Details"
        subtitle="Conference venue, transit and travel instructions, conveners direct contact numbers, and official communication channels."
        breadcrumb="Contact"
        badge="Get in Touch"
      />

      {/* Complete Venue, Travel Guide, Map & Contacts */}
      <VenueContact />
    </div>
  );
}
