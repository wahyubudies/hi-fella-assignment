"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout';
import Avatar from "@public/images/avatar.png";
import Logo from "@public/images/logo.png";

const Navigation = () => {
   const [mounted, setMounted] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dropdownRef = useRef(null);

   useEffect(() => {
      setMounted(true);
   }, []);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <header className="bg-white border-b border-gray-200 py-2">
         <Container className="flex items-center justify-between !py-2 !px-8">
            <Link href="/" className="flex items-center">
               <Image
                  src={Logo}
                  alt="Hi-Fella"
                  width={120}
                  height={32}/>
            </Link>

            <div className="flex-1 max-w-xl mx-8">
               <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                     </svg>
                  </div>
                  <input
                     type="search"
                     className="block w-full p-2 pl-10 text-sm text-gray-900 bg-gray-100 rounded-full focus:ring-gray-200 focus:border-gray-200 outline-none"
                     placeholder="Search profile, company or product"/>
               </div>
            </div>

            <div className="flex items-center relative" ref={dropdownRef}>
               <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <span className="mr-2 text-sm font-medium">John Doe</span>
                  <svg
                     className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <Link href="/profile" className="ml-2">
                     <Image
                        src={Avatar}
                        alt="User Profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                     />
                  </Link>
               </div>

               {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                     <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Your Profile
                     </Link>
                     <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Settings
                     </Link>
                     <Link href="/wallet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Wallet
                     </Link>
                     <div className="border-t border-gray-100 my-1"></div>
                     <Link href="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        Sign out
                     </Link>
                  </div>)}
            </div>
         </Container>
      </header>
   );
};

export default Navigation;