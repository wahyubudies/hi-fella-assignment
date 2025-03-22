import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from "@public/images/avatar.png";
import Bookmark from "@public/icons/bookmark.svg";
import { Badge, Button } from '@/components/ui';

const WalletProfileCard = () => {
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm">
      <div className="flex flex-col items-start mb-2">
        <Image
          src={Avatar}
          alt="John Doe"
          width={45}
          height={45}
          className="object-cover"
        />

        <h2 className="text-[18px] leading-[140%] font-medium text-gray-800 mt-2">John Doe</h2>

        <Badge bgColor="bg-[#BEEDF4]" textColor="text-[#0A889D]" className="mt-2">
          Supplier Acquisition
        </Badge>

        <p className="font-normal text-[14px] leading-[140%] tracking-[0%] text-gray-500 mt-2">
          Digital Marketing at PT ABC Indonesia
        </p>
      </div>

      <div className="border-t border-gray-200 pt-1">
        <Link href="/saved-posts" className="flex items-center py-2 gap-2 hover:underline">
          <Image
            src={Bookmark}
            alt="Saved Posts"
            width={24}
            height={24}
          />
          <span className="text-gray-800 font-medium text-sm leading-[140%]">My Saved Post</span>
        </Link>

        <div className="mt-1">
          <p className="text-gray-500 text-xs leading-[140%] mb-1">Your Balance</p>

          <Link href="/coins" className="flex items-center py-2 gap-2 hover:underline">
            <Image
              src="/icons/coin.svg"
              alt="Fella Gold"
              width={24}
              height={24}
            />
            <span className="text-gray-800 font-medium text-sm leading-[140%]">100 Fella Gold</span>
          </Link>

          <Link href="/diamonds" className="flex items-center py-2 gap-2 hover:underline">
            <Image
              src="/icons/diamond.svg"
              alt="Diamonds"
              width={24}
              height={24}
            />
            <span className="text-gray-800 font-medium text-sm leading-[140%]">100 Diamonds</span>
          </Link>

          <Button
            variant="primary-outline"
            padding={false}
            className="w-full h-[37px] !rounded-[50px] px-[26px] py-[10px] justify-center hover:bg-primary-darker mt-2">
            <span className='font-bold text-[12px] leading-[140%] text-center'>
              Open Wallet
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletProfileCard;