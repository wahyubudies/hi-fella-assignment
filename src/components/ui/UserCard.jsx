import Image from "next/image";
import { Badge } from ".";

const UserCard = ({ user }) => {
   return (
      <div className="flex items-center">
         <Image
            src={user.src}
            alt={user.name}
            width={50}
            height={50}
            className="rounded-full mr-3"
         />
         <div>
            <p className="font-medium text-gray-800 text-[12px] leading-[140%]">
               {user.name}
            </p>
            <Badge className="my-1" bgColor="bg-[#ACF5BE]" textColor="text-[#259340]">{user.role}</Badge>
            <p className="text-gray-600 text-[10px] leading-[140%]">
               {user.position}  {user.requester_time && `- ${user.requester_time}`}
            </p>
         </div>
      </div>
   );
};

export default UserCard;