"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import StepCompleted from "@public/icons/step-completed.svg";
import RightArrow from "@public/icons/right-arrow.svg";
import Diamond from "@public/icons/diamond.svg";
import setupStepsData from '@/data/setupSteps.json';

const ProfileSetupCard = () => {
   const [setupSteps, setSetupSteps] = useState(setupStepsData);
   const [completedSteps, setCompletedSteps] = useState(0);
   const [progressPercentage, setProgressPercentage] = useState(0);

   useEffect(() => {
      const completed = setupSteps.filter(step => step.completed).length;
      setCompletedSteps(completed);
      setProgressPercentage((completed / setupSteps.length) * 100);
   }, [setupSteps]);

   const handleStepClick = (stepId) => {
      setSetupSteps(prevSteps =>
         prevSteps.map(step =>
            step.id === stepId
               ? { ...step, completed: !step.completed }
               : step
         )
      );
   };

   return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
         <h2 className="text-sm font-semibold leading-[140%] text-gray-800 mb-2">
            Ready to Unlock Everything? Complete Your Setup!
         </h2>

         <p className="text-gray-600 font-[Inter] text-[14px] leading-[140%] tracking-[0%] align-bottom mb-4">
            To make the most of your Hi-Fella experience, please take a moment to complete your
            profile. It only takes a few steps, and you'll be ready to connect, collaborate, and grow!
         </p>

         {/* Progress bar */}
         <div className="mb-4">
            <div className="flex justify-between text-gray-600 font-[Inter] text-[14px] leading-[140%] tracking-[0%] mb-1">
               <span>{completedSteps}/{setupSteps.length} Completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
               <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
               ></div>
            </div>
         </div>

         {/* Setup steps */}
         <div className="space-y-3 flex flex-col">
            {setupSteps.map((step) => (
               <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className="border border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors cursor-pointer flex items-center">
                  <div className="mr-2.5 mt-0.5">
                     <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${step.completed ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                        }`}>
                        {step.completed && (
                           <Image src={StepCompleted} width={16} height={16} alt="Completed" className="inline" />
                        )}
                     </div>
                  </div>
                  <div className="flex-1">
                     <div className="flex justify-between">
                        <div>
                           <h3 className="font-semibold text-[14px] leading-[140%] text-gray-800 flex items-center">
                              {step.title} (<Image src={Diamond} width={14} height={14} alt="Diamond" className="inline" />{step.reward})
                           </h3>
                           <p className="text-gray-600 text-[14px] leading-[140%] align-bottom">{step.description}</p>
                        </div>
                        <Image src={RightArrow} width={14} height={14} alt="Right Arrow" className="inline" />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ProfileSetupCard;