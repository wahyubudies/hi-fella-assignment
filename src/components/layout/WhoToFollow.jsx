import React from 'react';
import { Button, UserCard } from '@/components/ui';
import usersToFollow from '@/data/usersToFollow';
import clsx from 'clsx';

const WhoToFollow = () => {
   return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
         <h2 className="text-[14px] font-[500] leading-[140%] tracking-[0%] text-gray-800 mb-2">Who to follow</h2>
         {usersToFollow.map(user => (
            <React.Fragment key={user.id}>
               <UserCard user={{
                  src: user.avatar,
                  name: user.name,
                  requester_time: null,
                  role: user.role,
                  position: user.position
               }} />
               <div className='pl-[57px]'>
                  <Button
                     variant="primary-outline"
                     padding={false}
                     className={clsx(
                        usersToFollow.length - 1 === user.id - 1 ? '' : 'mb-4',
                        "w-full !rounded-[50px] px-2 py-1 justify-center hover:bg-primary-darker max-w-[100px] mt-2"
                     )}>
                     <span className='font-bold text-[12px] leading-[140%] text-center'>
                        Follow
                     </span>
                  </Button>
               </div>
            </React.Fragment>
         ))}
      </div>
   );
};

export default WhoToFollow;