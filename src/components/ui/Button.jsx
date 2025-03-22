import clsx from "clsx";
import Link from "next/link";

export default function Button({
   children,
   variant = 'primary',
   href,
   icon,
   iconPosition = 'left',
   className = '',
   padding = true,
   ...props
}) {
   const baseClasses = clsx(
      'rounded-full transition font-medium text-sm leading-[22px] align-middle inline-flex items-center cursor-pointer',

      padding && 'px-4 py-2.5',
      variant === 'primary' && 'bg-primary text-white',
      variant === 'secondary' && 'bg-[#F2F2F2] text-black border border-[#F2F2F2]',
      variant === 'primary-outline' && 'bg-transparent text-primary border border-primary hover:bg-primary/5',
      variant === 'secondary-outline' && 'bg-transparent text-black border border-[#F2F2F2] hover:bg-[#F2F2F2]/10',

      className
   );

   // render as a navlink
   if (href) {
      return (
         <Link href={href} className={baseClasses} {...props}>
            {icon && iconPosition === 'left' && <span className="mr-2 font-medium text-sm leading-[22px] align-middle">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2 font-medium text-sm leading-[22px] align-middle">{icon}</span>}
         </Link>
      );
   }

   // render as a button
   return (
      <button className={baseClasses} {...props}>
         {icon && iconPosition === 'left' && <span className="mr-2 font-medium text-sm leading-[22px] align-middle">{icon}</span>}
         {children}
         {icon && iconPosition === 'right' && <span className="ml-2 font-medium text-sm leading-[22px] align-middle">{icon}</span>}
      </button>
   );
};
