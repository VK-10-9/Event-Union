import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-2">
              Event Union
            </h3>
            <p className="text-gray-400">
              Connecting Global Minds to a Single Place
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/VK-10-9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/vishwanath-koliwad-02514631b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/EVENTUNION_CO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/eventunion.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Event Union. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
