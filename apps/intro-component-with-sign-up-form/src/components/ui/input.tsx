import * as React from "react";

import { cn } from "@ardaeker/utilities";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full h-14 text-sm leading-[1.625rem] tracking-[.0156rem] pl-5 sm:pl-8 pr-14 outline-none rounded-[.3125rem] ring-1 ring-[#DEDEDE] font-semibold placeholder:opacity-75 text-[#3D3B48] transition-opacity duration-200 focus:ring-1 focus:ring-[#5E54A4]",
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return <input type={type} className={cn(inputVariants(), className)} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
