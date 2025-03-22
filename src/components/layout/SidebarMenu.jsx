"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import menuItems from '@/data/menuItems.json';

const SidebarMenu = () => {
   const pathname = usePathname();
   const [activeItem, setActiveItem] = useState(null);

   // Set active item based on current path after component mounts
   useEffect(() => {
      const currentItem = menuItems.find(item => item.path === pathname) || menuItems[0];
      setActiveItem(currentItem.name);
   }, [pathname]);

   // Don't render menu items until after hydration
   const [isClient, setIsClient] = useState(false);
   useEffect(() => {
      setIsClient(true);
   }, []);

   return (
      <div className="flex-1">
         {isClient && menuItems.map((item) => (
            <Link
               key={item.id}
               href={item.path}
               onClick={() => setActiveItem(item.name)}
               className={clsx(
                  'flex items-center px-2 py-1 space-x-1 my-2 rounded-full cursor-pointer',
                  activeItem === item.name ? 'bg-blue-100' : 'hover:bg-gray-200'
               )}>
               <div className="w-8 h-8 flex items-center justify-center relative">
                  <Image
                     src={`/icons/${item.icon}`}
                     alt={item.name}
                     width={18}
                     height={18}
                  />
                  {item.hasNotification && (
                     <span className="ml-auto w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0"></span>
                  )}
               </div>
               <span
                  className={clsx(
                     'flex items-center rounded-full cursor-pointer font-inter text-sm leading-[140%] tracking-[0%] font-normal',
                     activeItem === item.name ? 'bg-blue-100 text-primary' : 'hover:bg-gray-200'
                  )}>
                  {item.name}
               </span>
               {item.isNew && (
                  <span className="ml-auto bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">
                     NEW!
                  </span>
               )}
            </Link>
         ))}
      </div>
   );
};

export default SidebarMenu;