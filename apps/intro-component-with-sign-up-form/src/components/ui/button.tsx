import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@ardaeker/utilities";

const buttonVariants = cva(
  "inline-flex items-center justify-center w-full whitespace-nowrap text-[.9375rem] leading-[1.625rem] rounded-[.3125rem] tracking-[.0625rem] font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-[0rem_-0.25rem_0rem_0rem_rgba(0,0,0,0.09)_inset]",
  {
    variants: {
      variant: {
        default: "bg-[#38CC8B] text-white hover:bg-[#77E2B3]",
      },
      size: {
        default: "h-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
