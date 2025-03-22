import Image from "next/image";
import Banner from "@public/images/banner.png";
import { FeaturedProducts, ProfileSetupCard, RequestQuotation } from "@/components/layout";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {/* Banner section with centered content */}
      <div className="w-full flex justify-center">
        {/* Banner container with responsive width and hover effects */}
        <div className="w-[100%] max-w-[1200px] relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            src={Banner}
            alt="Welcome Banner"
            width={1200}
            height={400}
            priority
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      {/* Profile setup section */}
      <ProfileSetupCard />
      {/* Featured products section */}
      <FeaturedProducts />
      {/* Quotation request section */}
      <RequestQuotation />
    </div>
  );
}