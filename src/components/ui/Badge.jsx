const Badge = ({
   children,
   variant = 'default',
   bgColor,
   textColor,
   className = ''
}) => {
   const variants = {
      default: 'bg-[#BEEDF4] text-[#0A889D]',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
   };

   let colorClasses;
   if (bgColor || textColor) {
      const customBgClass = bgColor || '';
      const customTextClass = textColor || '';
      colorClasses = `${customBgClass} ${customTextClass}`;
   } else {
      colorClasses = variants[variant] || variants.default;
   }

   return (
      <div className={`${colorClasses} w-fit rounded-[20px] px-2 py-0.5 gap-[10px] flex items-center justify-center ${className}`}>
         <span className="font-normal text-xs leading-[140%] tracking-[0%] flex items-center gap-1">
            {children}
         </span>
      </div>
   );
};

export default Badge;