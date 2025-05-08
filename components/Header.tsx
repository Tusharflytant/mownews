"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50  transition-all duration-300 bg-white ${
        isScrolled
          ? "lg:bg-black lg:shadow-md"
          : "lg:bg-white py-8 lg:border-b lg:border-gray-200"
      }`}
    >
      {/* Desktop View */}
      
      <div className="hidden lg:flex max-w-[1440px] mx-auto px-6 py-4 items-center justify-between">
        {/* Left: Logo */}
        {!isScrolled && (
        <Link href="/">
     <Image
  src="/logo-insurfiy.png"
  alt="Logo"
  width={200}  // increased from 140
  height={120} // increased from 80
  className="cursor-pointer"
/>
        </Link>
        )}
        
        {/* Center: Nav Links */}
        <nav className="flex-1 mt-6 flex justify-center">
          <ul
            className={`flex space-x-8 text-md font-medium tracking-wide ${
              isScrolled ? "text-white" : "text-black"
            }`}
          >
            <li>
              <Link href="/etfs" className="hover:text-purple-700 uppercase font-bold">
                Auto Insurance
              </Link>
            </li>
            <li>
              <Link href="/finance" className="hover:text-purple-700 uppercase font-bold">
                Affordable Insurance
              </Link>
            </li>
            <li>
              <Link href="/stock" className="hover:text-purple-700 uppercase font-bold">
                Business Insurance
              </Link>
            </li>
            <li>
              <Link href="/trading" className="hover:text-purple-700 uppercase font-bold">
                Health Insurance
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: Contact Button (only on desktop before scrolling) */}
        {!isScrolled && (
          <div>
            <Link href="/contact">
            <button className="bg-purple-700 mt-6 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-purple-600 border-2 border-purple-600 transition-all duration-300">
            Contact
            </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-4 py-3 flex items-center justify-between">
        {/* Left: Toggle Menu */}
        <div className="text-2xl text-black" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Center: Logo */}
        <Link href="/">
          <Image src="/logo-insurfiy.png" alt="Logo" width={130} height={80} />
        </Link>

        
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <ul className="lg:hidden text-black flex flex-col items-center space-y-4 pt-3 pb-6 text-base tracking-wide bg-white">
          <li>
            <Link href="/etfs" onClick={handleCloseMenu} className="hover:text-purple-700 uppercase">
            Auto Insurance
            </Link>
          </li>
          <li>
            <Link href="/finance" onClick={handleCloseMenu} className="hover:text-purple-700 uppercase">
            Affordable Insurance
            </Link>
          </li>
          <li>
            <Link href="/stock" onClick={handleCloseMenu} className="hover:text-purple-700 uppercase">
            Business Insurance
            </Link>
          </li>
          <li>
            <Link href="/trading" onClick={handleCloseMenu} className="hover:text-purple-700 uppercase">
            Health Insurance
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleCloseMenu}>
            <button className="bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-purple-600 border-2 border-purple-600 transition-all duration-300">
            Contact
            </button>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
