import React, { useEffect, useState, useRef } from 'react';
import { Users } from 'lucide-react';

export default function CommunityCounter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const targetCount = 400;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetCount);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible]);

  return (
    <div className="py-16 bg-blue-950/30" ref={counterRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-900/30 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 transition-all duration-300">
            {count.toLocaleString()}
            <span className="text-blue-400">+</span>
          </h2>
          <p className="text-xl text-gray-300">
            Community Members and Growing
          </p>
        </div>
      </div>
    </div>
  );
}
