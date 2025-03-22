import Link from "next/link";
import { Badge, UserCard } from ".";
import VerifiedIcon from "@public/icons/verified.svg";
import Image from "next/image";

const QuotationCard = ({ quotation }) => {
   return (
      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow mb-4">
         <Link href={`/quotations/${quotation.id}`} className="block">
            <div className="flex items-center justify-between">
               <div>
                  <h3 className="text-[20px] font-semibold leading-[140%] text-gray-800 mb-3">
                     {quotation.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                     <Badge bgColor="bg-[#F1F4F5]" textColor="text[#323232]">
                        {quotation.category}
                     </Badge>
                     <Badge bgColor="bg-[#F1F4F5]" textColor="text[#323232]">
                        Verified Company
                        <Image
                           src={VerifiedIcon}
                           alt="Verified"
                           width={16}
                           height={16}
                        />
                     </Badge>
                  </div>
               </div>
               <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            </div>

            <div className="mt-4 pt-4 border-t border-[#F1F4F5]">
               <p className="text-gray-600 mb-2 text-[10px] leading-[140%]">Who's looking this product</p>
               <UserCard user={{
                  src: quotation.requester.image,
                  name: quotation.requester.name,
                  requester_time: quotation.requester.time,
                  role: quotation.requester.role,
                  position: quotation.requester.position
               }} />
            </div>
         </Link>
      </div>
   );
};

export default QuotationCard;