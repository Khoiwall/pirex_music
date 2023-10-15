import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const inputVariants = cva("w-full rounded-lg appearance-none outline-none !text-white", {
  variants: {
    sizes: {
      default: "text-body-14 px-5 py-3 font-normal",
    },
    variant: {
      default:
        "bg-base-shade-01-dp border border-solid border-primary/0 hover:border-primary active:border-primary focus:border-primary placeholder:text-white/70",
    },
  },
  defaultVariants: {
    variant: "default",
    sizes: "default",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ disabled = false, className, variant, sizes, ...props }, ref) => {
    return (
      <input
        disabled={disabled}
        className={cn([
          inputVariants({ variant, sizes, className }),
          { "bg-[#322E35] text-white/40": disabled },
        ])}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
