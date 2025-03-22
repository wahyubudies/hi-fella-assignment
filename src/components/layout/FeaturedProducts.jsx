import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/ui';
import StarExpand from "@public/icons/star-expand.svg";
import featuredProducts from '@/data/featuredProducts.json';

const FeaturedProducts = () => {
   return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
         <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
               <Image
                  src={StarExpand}
                  alt="Star"
                  width={25}
                  height={25}
                  className="text-blue-400" />
               <div className='flex flex-col'>
                  <h2 className="text-[18px] font-[600] leading-[140%] tracking-[0%] text-gray-800">Featured Products</h2>
                  <p className="text-gray-500 text-[12px] font-[400] leading-[140%] tracking-[0%] -mt-1">Ads</p>
               </div>
            </div>
            <Link href="/products/featured" className="text-[#323232] hover:underline text-[12px] font-[500] leading-[140%] tracking-[0%] text-right flex items-center">
               View All Featured Products
               <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            </Link>
         </div>

         <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            {featuredProducts.map(product => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </div >
   );
};

export default FeaturedProducts;