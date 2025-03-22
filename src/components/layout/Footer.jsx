"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { mainLinks, moreLinks } from "@/data/footer.json";

const Footer = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer className="mt-6">
      <div className="flex flex-wrap gap-x-2 gap-y-2 mb-4">
        {mainLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-500 hover:text-gray-700 font-normal text-xs leading-[140%]">
            {link.name}
          </Link>
        ))}

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="text-gray-500 hover:text-gray-700 font-normal text-xs leading-[140%] flex items-center">
            More
            <svg
              className={`ml-1 w-3 h-3 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isMoreOpen && (
            <div className="absolute right-0 top-full mb-2 bg-white rounded-md shadow-lg z-10 w-40 border border-gray-200">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-500 hover:text-gray-700 font-normal text-xs leading-[140%]" >
        © Hi-Fella 2023. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;