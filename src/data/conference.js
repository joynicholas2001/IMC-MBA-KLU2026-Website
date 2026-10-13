export const CONFERENCE_INFO = {
  title: "International Multidisciplinary Conference 2026",
  shortTitle: "IMC 2026",
  theme: "New Horizons for a Sustainable Future",
  subtitle: "Integrating Innovation, Business, Technology and Society",
  dates: "22–23 December 2026",
  startDate: "2026-12-22T09:00:00+05:30",
  mode: "Hybrid Mode (On-Campus & Online)",
  institution: "KLEF (Deemed to be University)",
  businessSchool: "KL Business School",
  department: "Department of MBA",
  fullVenue: "Department of MBA, KLEF (Deemed to be University), Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh, India – 522 302",
  city: "Vaddeswaram, Guntur District / Vijayawada",
  state: "Andhra Pradesh",
  registrationUrl: "https://forms.gle/HTLtp4W5AYuTjwNF7",
  submissionEmail: "icmbaklbs@gmail.com",
  // Gmail compose URL — opens Gmail in Chrome on desktop/laptop tabs
  gmailComposeUrl: (subject = "", body = "") => {
    const base = "https://mail.google.com/mail/?view=cm&fs=1&to=icmbaklbs%40gmail.com";
    const s = subject ? `&su=${encodeURIComponent(subject)}` : "";
    const b = body ? `&body=${encodeURIComponent(body)}` : "";
    return `${base}${s}${b}`;
  },
  // Mobile mailto URL — triggers the native Gmail app on Android/iOS
  mailtoUrl: (subject = "", body = "") => {
    const s = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    const b = body ? `${subject ? "&" : "?"}body=${encodeURIComponent(body)}` : "";
    return `mailto:icmbaklbs@gmail.com${s}${b}`;
  },
  // Smart opener:
  // - Android Phone / Tablet: Launches the official Gmail app directly via package com.google.android.gm intent
  // - iOS Phone / iPad: Launches the official Gmail iOS app via googlegmail:// scheme
  // - Laptop Chrome / Desktop: Opens Gmail Compose directly in Chrome tab / Gmail PWA window
  openEmail: (subject = "", body = "") => {
    if (typeof window === "undefined") return;

    const userAgent = (navigator.userAgent || navigator.vendor || window.opera || "").toLowerCase();
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /ipad|iphone|ipod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    const encSubject = subject ? encodeURIComponent(subject) : "";
    const encBody = body ? encodeURIComponent(body) : "";
    const sParam = encSubject ? `&subject=${encSubject}` : "";
    const bParam = encBody ? `&body=${encBody}` : "";

    // 1. Android Phone or Tablet -> Direct Gmail App Launch
    if (isAndroid) {
      try {
        // Direct intent targeting com.google.android.gm (official Gmail Android app)
        const intentUrl = `intent://co?to=icmbaklbs@gmail.com${sParam}${bParam}#Intent;scheme=googlegmail;package=com.google.android.gm;end`;
        window.location.href = intentUrl;
        return;
      } catch (err) {
        window.location.href = CONFERENCE_INFO.mailtoUrl(subject, body);
        return;
      }
    }

    // 2. iOS Phone (iPhone) or Tablet (iPad) -> Direct Gmail App Launch
    if (isIOS) {
      const gmailIosScheme = `googlegmail:///co?to=icmbaklbs@gmail.com${sParam}${bParam}`;
      const fallbackUrl = CONFERENCE_INFO.mailtoUrl(subject, body);
      const clickedAt = Date.now();
      window.location.href = gmailIosScheme;
      // Fallback if Gmail iOS app is not installed
      setTimeout(() => {
        if (Date.now() - clickedAt < 1200) {
          window.location.href = fallbackUrl;
        }
      }, 500);
      return;
    }

    // 3. Laptop / Desktop in Chrome / other browsers -> Gmail web compose in a new tab
    const gmailWebUrl = CONFERENCE_INFO.gmailComposeUrl(subject, body);
    window.open(gmailWebUrl, "_blank", "noopener,noreferrer");
  },
  handleEmailClick: (e, subject = "", body = "") => {
    if (e && e.preventDefault) e.preventDefault();
    CONFERENCE_INFO.openEmail(subject, body);
  },
  googleMapsUrl: "https://maps.google.com/?q=KL+Deemed+to+be+University+Vaddeswaram+Andhra+Pradesh",
  contacts: [
    {
      name: "Dr. Shyamasundar Tripathy",
      role: "Convener",
      phone: "+91 97789 69858",
      tel: "+919778969858"
    },
    {
      name: "Dr. Subhadeep Mukherjee",
      role: "Convener",
      phone: "+91 82926 48008",
      tel: "+918292648008"
    },
    {
      name: "Dr. B. Vamshi Krishna",
      role: "Co-Convener",
      phone: "+91 99898 71134",
      tel: "+919989871134"
    }
  ],
  milestones: [
    {
      year: "1980–81",
      title: "Foundation",
      description: "KL College of Engineering established, setting the foundation for high-quality technical education."
    },
    {
      year: "2006",
      title: "Autonomy",
      description: "Autonomous status gained, fostering progressive curriculum and academic freedom."
    },
    {
      year: "2009",
      title: "Deemed University",
      description: "Recognised as a deemed-to-be university (Koneru Lakshmaiah Education Foundation - KLEF)."
    },
    {
      year: "2026",
      title: "IMC 2026",
      description: "Hosts the International Multidisciplinary Conference on New Horizons for a Sustainable Future."
    }
  ],
  disciplines: [
    "Finance",
    "Marketing",
    "Human Resource Management",
    "Operations",
    "Business Analytics",
    "Leadership",
    "Entrepreneurship",
    "Emerging Technologies",
    "Responsible Decision-making"
  ],
  pillars: [
    {
      id: "innovation",
      title: "Innovation",
      subtitle: "New Pathways",
      description: "New ideas, products, processes and business models that open fresh pathways to sustainable prosperity.",
      color: "amber",
      icon: "Lightbulb"
    },
    {
      id: "business",
      title: "Business",
      subtitle: "Responsible Value",
      description: "Strategy, finance, marketing, people and operations reimagined with responsibility and long-term value.",
      color: "blue",
      icon: "Briefcase"
    },
    {
      id: "technology",
      title: "Technology",
      subtitle: "Sustainable Enablers",
      description: "AI, digital transformation, analytics and clean technologies as enablers of inclusive, sustainable growth.",
      color: "teal",
      icon: "Cpu"
    },
    {
      id: "society",
      title: "Society",
      subtitle: "Inclusive Progress",
      description: "Equity, education, well-being and livelihoods – ensuring progress reaches every stakeholder.",
      color: "purple",
      icon: "Users"
    }
  ],
  objectives: [
    {
      title: "Cross-Disciplinary Integration",
      description: "Connect research across management, science, technology and the social sciences.",
      icon: "Network"
    },
    {
      title: "Evidence-Based Solutions",
      description: "Exchange evidence-based solutions for sustainable and inclusive development.",
      icon: "Compass"
    },
    {
      title: "Stakeholder Collaboration",
      description: "Strengthen collaboration between academia, industry and policy institutions.",
      icon: "Handshake"
    },
    {
      title: "Early-Career Empowerment",
      description: "Encourage early-career researchers to contribute impactful new ideas.",
      icon: "GraduationCap"
    }
  ],
  participants: [
    "Academicians",
    "Research scholars",
    "MBA & postgraduate students",
    "Industry professionals",
    "Entrepreneurs",
    "Policymakers",
    "NGOs & development practitioners"
  ],
  highlights: [
    {
      title: "Keynote & Speaker Sessions",
      description: "Inspirational insights from distinguished academic minds and thought leaders.",
      icon: "Mic"
    },
    {
      title: "Paper Presentations",
      description: "Scholarly presentations across 12 diverse multidisciplinary conference tracks.",
      icon: "FileText"
    },
    {
      title: "Panel Discussions",
      description: "Dynamic dialogues deliberating sustainable policies and technological frontiers.",
      icon: "MessagesSquare"
    },
    {
      title: "Academia–Industry Networking",
      description: "High-value interaction connecting scholars with corporate leaders and entrepreneurs.",
      icon: "Share2"
    },
    {
      title: "Hybrid Participation",
      description: "Flexibility to attend and present in person on campus or remotely via interactive online sessions.",
      icon: "Globe"
    },
    {
      title: "Publication Opportunities",
      description: "Consideration for publication in an ISBN proceedings volume or suitable journals.",
      icon: "BookOpen"
    }
  ],
  importantDates: [
    {
      date: "05",
      month: "DEC 2026",
      isoDate: "2026-12-05",
      title: "Abstract Submission Deadline",
      description: "Email your abstract mentioning your chosen conference track to icmbaklbs@gmail.com.",
      isPassed: false,
      isPrimary: false
    },
    {
      date: "15",
      month: "DEC 2026",
      isoDate: "2026-12-15",
      title: "Full Paper Submission Deadline",
      description: "Submit your complete editable MS Word research manuscript following author guidelines.",
      isPassed: false,
      isPrimary: false
    },
    {
      date: "22–23",
      month: "DEC 2026",
      isoDate: "2026-12-22",
      title: "Conference Dates (Hybrid)",
      description: "Join on-campus at KLEF Vaddeswaram or present online from anywhere worldwide.",
      isPassed: false,
      isPrimary: true
    }
  ],
  regionalAttractions: [
    {
      name: "Prakasam Barrage",
      tagline: "Riverside Evenings & Sunsets",
      description: "A landmark barrage across the Krishna River, loved for riverside evenings, cool breezes, and picturesque sunsets."
    },
    {
      name: "Kanaka Durga Temple",
      tagline: "Sacred Hilltop Shrine",
      description: "The revered hilltop temple atop Indrakeeladri, one of coastal Andhra Pradesh's most visited pilgrim and cultural destinations."
    },
    {
      name: "Undavalli Caves",
      tagline: "4th–5th Century Heritage",
      description: "Ancient rock-cut cave temples with exquisite carved multi-storey halls dating back to the 4th–5th century CE."
    },
    {
      name: "Bhavani Island",
      tagline: "River Island Retreat",
      description: "A serene, expansive river island situated in the midst of the Krishna River, popular for boating, eco-tourism, and leisure."
    },
    {
      name: "Krishna River",
      tagline: "Lifeline of the Region",
      description: "The majestic lifeline of the region, featuring scenic riverfront ghats and spectacular golden-hour views."
    },
    {
      name: "Amaravati Stupa",
      tagline: "Ancient Buddhist Monument",
      description: "A world-renowned Buddhist heritage site and sculptural wonder in the Amaravati capital region, an easy day trip from Vijayawada."
    }
  ]
};
