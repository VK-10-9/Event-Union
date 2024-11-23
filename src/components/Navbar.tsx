import React from 'react';

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">Event Union</span>
          </div>
        </div>
      </div>
    </nav>
  );
}