'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-purple-50 text-black mt-24 pt-14 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo & Description */}
          <div>
            <Link href="/">
              <Image 
                src="/logo-insurfiy.png" 
                alt="Website Logo" 
                width={180} 
                height={60}
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-gray-700 leading-relaxed">
              Your go-to source for the latest in Auto, Affordable, Health, and Business insurance insights – all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-purple-600 hover:underline">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600 hover:underline">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-purple-600 hover:underline">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-purple-600 hover:underline">Terms & Conditions</Link></li>
              <li><Link href="/dmca" className="hover:text-purple-600 hover:underline">DMCA</Link></li>
              <li><Link href="/cookies" className="hover:text-purple-600 hover:underline">Cookies Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/etfs" className="hover:text-purple-600 hover:underline">Auto Insurance</Link></li>
              <li><Link href="/finance" className="hover:text-purple-600 hover:underline">Affordable Insurance</Link></li>
              <li><Link href="/trading" className="hover:text-purple-600 hover:underline">Business Insurance</Link></li>
              <li><Link href="/stock" className="hover:text-purple-600 hover:underline">Health Insurance</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-300" />

        {/* Bottom Text */}
        <p className="text-xs text-gray-600 text-center leading-relaxed">
          © 2025 Your INSURIFIY. All rights reserved. Content on this site may not be reused without written permission.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
