import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import StarExpand from "@public/icons/star-expand.svg";

const PromotionCard = () => {
   return (
      <div className="rounded-2xl border border-primary p-3 bg-white flex flex-col">
         <div className="mb-4">
            <Image
               src={StarExpand}
               alt="Star"
               width={18}
               height={18}
               className="text-primary"
            />
         </div>

         <h2 className="text-[14px] font-semibold text-gray-800 mb-3 leading-[118%]">
            Expand Your Reach, Open New Doors.
         </h2>

         <p className="text-gray-500 mb-4 font-inter font-normal text-[10px] leading-[140%]">
            Tap into the power of Hi-Fella's Discover Page. Showcase your products to a highly engaged international audience and unlock new growth opportunities!
         </p>

         <Button
            padding={false}
            className="w-full h-[37px] !rounded-[50px] px-[26px] py-[10px] justify-center hover:bg-primary-darker">
            <span className='font-bold text-[12px] leading-[140%] text-center'>
               Boost Product
            </span>
         </Button>
      </div>
   );
};

export default PromotionCard;