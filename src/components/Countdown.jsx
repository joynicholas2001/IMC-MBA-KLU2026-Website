import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function Countdown({ targetDate = "2026-12-22T09:00:00+05:30" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isStarted: false,
    isMounted: false
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isStarted: true,
          isMounted: true
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isStarted: false,
          isMounted: true
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (!timeLeft.isMounted) {
    return (
      <div className="flex items-center justify-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
        <Clock className="w-5 h-5 text-teal-300 animate-spin mr-2" />
        <span className="text-white text-sm font-medium">Synchronizing Countdown...</span>
      </div>
    );
  }

  if (timeLeft.isStarted) {
    return (
      <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-teal-800 text-teal-100 border border-teal-600 shadow-md">
        <Calendar className="w-5 h-5 text-gold-400" />
        <span className="font-semibold text-sm sm:text-base">
          Conference in Progress (22–23 December 2026)
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col items-center">
      <div className="text-xs uppercase tracking-widest text-teal-200 font-semibold mb-3 flex items-center gap-2">
        <Clock className="w-3.5 h-3.5 text-gold-400" />
        <span>Countdown to Conference Start • 22 Dec 2026 (IST)</span>
      </div>
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-16 sm:w-20 md:w-24 py-3 sm:py-3.5 bg-navy-950/80 backdrop-blur-md rounded-xl border border-teal-700/50 shadow-inner group hover:border-gold-500/80 transition-all"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-gold-400 transition-colors">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-teal-200/90 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
