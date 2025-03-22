import clsx from "clsx";

export default function Container({
   children,
   className = '',
   fluid = false,
   as: Component = 'div',
   padding = true,
   ...props
}) {
   return (
      <Component
         className={clsx(
            padding && 'px-4 py-8',
            fluid ? 'w-full' : 'container mx-auto',
            className
         )}
         {...props}>
         {children}
      </Component>
   );
};