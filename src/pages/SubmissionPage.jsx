import React from 'react';
import PageHeader from '../components/PageHeader';
import SubmissionWorkflow from '../components/SubmissionWorkflow';
import PublicationSection from '../components/PublicationSection';

export default function SubmissionPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <PageHeader
        title="Call for Papers & Submission Guidelines"
        subtitle="Complete guidelines for authors, manuscript preparation formatting criteria, submission workflow, and publication opportunities in edited books and indexed journals."
        breadcrumb="Submission"
        badge="Call for Papers"
      />

      {/* Submission Instructions & Author Guidelines */}
      <SubmissionWorkflow />

      {/* Publication Opportunities & Conditions */}
      <PublicationSection />
    </div>
  );
}
