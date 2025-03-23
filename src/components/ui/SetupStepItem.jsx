"use client";

import React from 'react';
import Image from 'next/image';
import StepCompleted from "@public/icons/step-completed.svg";
import RightArrow from "@public/icons/right-arrow.svg";
import Diamond from "@public/icons/diamond.svg";
import clsx from 'clsx';

const SetupStepItem = ({ step, onStepClick }) => {
   return (
      <div
         onClick={() => onStepClick(step.id)}
         className={clsx(
            step.completed ? "border-primary bg-gray-50" : "border-gray-200",
            "border rounded-xl p-3 hover:border-blue-300 transition-colors cursor-pointer flex items-center"
         )}>
         <div className="mr-2.5 mt-0.5">
            <div className={
               clsx(
                  step.completed ? 'border-primary bg-primary' : 'border-gray-300',
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center"
               )}>
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
   );
};

export default SetupStepItem;