import React from 'react';
import PageHeader from '../components/PageHeader';
import CommitteeDirectory from '../components/CommitteeDirectory';

export default function CommitteesPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <PageHeader
        title="Conference Committees"
        subtitle="Distinguished university leadership, advisory boards, conveners, and faculty organising committee members of IMC 2026."
        breadcrumb="Committees"
        badge="Organising Leadership"
      />

      {/* Complete Committees Directory */}
      <CommitteeDirectory />
    </div>
  );
}
