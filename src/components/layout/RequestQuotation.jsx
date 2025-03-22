import React from 'react';
import Link from 'next/link';
import { QuotationCard } from '@/components/ui';
import quotations from "@/data/quotations.json";

const RequestQuotation = () => {
   return (
      <div className="py-6">
         <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
               <div className="bg-blue-500 text-white px-1 rounded mr-3">
                  <span className="font-bold text-xs">RFQ</span>
               </div>
               <h2 className="text-[18px] font-[600] leading-[140%] tracking-[0%] text-gray-800">Request For Quotation</h2>
            </div>
            <Link href="/quotations" className="text-[#323232] hover:underline text-[12px] font-[500] leading-[140%] tracking-[0%] text-right flex items-center">
               View All Request for Quotation
               <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            </Link>
         </div>

         <div>
            {quotations.map(quotation => (
               <QuotationCard key={quotation.id} quotation={quotation} />
            ))}
         </div>
      </div>
   );
};

export default RequestQuotation;