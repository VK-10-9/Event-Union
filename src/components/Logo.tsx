import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="/logo.png" 
        alt="Event Union Logo" 
        className="w-10 h-10 sm:w-12 sm:h-12"
      />
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold text-white">
          Event Union
        </span>
        <span className="text-xs sm:text-sm text-gray-400">
          Connecting Global Minds
        </span>
      </div>
    </div>
  );
}
