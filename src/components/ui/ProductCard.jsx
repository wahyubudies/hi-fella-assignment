import Image from "next/image";
import VirifiedIcon from "@public/icons/verified.svg";

const ProductCard = ({ product }) => {
   return (
      <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
         <div className="relative h-48 w-full overflow-hidden">
            <Image
               src={product.image}
               alt={product.title}
               fill
               className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
         </div>
         <div className="py-2 px-1">
            <div className="flex items-center mb-2">
               <div className="w-6 h-6 mr-2 relative">
                  <Image
                     src={product.companyLogo}
                     alt={product.company}
                     width={24}
                     height={24}
                     className="rounded-full"
                  />
               </div>
               <span className="text-gray-700 text-[14px] leading-[140%] font-normal">{product.company}</span>
               {product.verified && (
                  <Image
                     src={VirifiedIcon}
                     alt="Verified"
                     className="ml-1"
                     width={16}
                     height={16} />
               )}
            </div>
            <div className="pl-[32px]">
               <h3 className="text-[16px] leading-[140%] font-semibold text-gray-900 mb-1">{product.title}</h3>
               <div className="text-[12px] leading-[140%] font-normal text-gray-600 mb-1">Category: {product.category}</div>
               <div className="text-[12px] leading-[140%] font-normal text-gray-600 mb-1">Price: {product.price}</div>
               <div className="text-[12px] leading-[140%] font-normal text-gray-600">MOQ: {product.moq}</div>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;