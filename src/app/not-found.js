"use client";

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui';

export default function NotFound() {
   return (
      <Container className="flex items-center justify-center min-h-[70vh]">
         {/* Main container for 404 content */}
         <div className="text-center max-w-md">
            {/* Image container */}
            <div className="mb-6 flex justify-center">
               <Image
                  src="/icons/not-found.svg"
                  alt="Page not found"
                  width={100}
                  height={100}
                  className="opacity-80"
               />
            </div>

            {/* Error heading */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>

            {/* Error description */}
            <p className="text-gray-500 mb-8">
               Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>

            {/* Action button container */}
            <div className="flex justify-center space-x-4">
               <Button
                  href="/"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-center font-medium transition-colors duration-200">
                  Go Discover
               </Button>
            </div>
         </div>
      </Container>
   );
}