import React from 'react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Connect with Global</span>
            <span className="block text-blue-400">Event Enthusiasts</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join the world's largest community for event enthusiasts. Discover,
            share, and create memorable experiences together.
          </p>
          <div className="mt-10">
            <a
              className="inline-block text-lg text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}
