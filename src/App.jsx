import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import TracksPage from './pages/TracksPage';
import DatesPage from './pages/DatesPage';
import RegistrationPage from './pages/RegistrationPage';
import SubmissionPage from './pages/SubmissionPage';
import CommitteesPage from './pages/CommitteesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/dates" element={<DatesPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/submission" element={<SubmissionPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
