import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva("inline-flex items-center justify-center !cursor-pointer", {
  variants: {
    variant: {
      default: "font-semibold text-body-14 gap-2.5 bg-primary hover:bg-primary-hover",
      secondary: "font-semibold text-body-14 gap-2.5 bg-base-shade-01-dp",
      Transparent: "bg-transparent text-body-14 gap-2.5",
    },
    size: {
      default: "py-2.5 px-5 rounded-lg",
      0: "p-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
