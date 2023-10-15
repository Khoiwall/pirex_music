import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    size: {
      xs: "text-body-12",
      sm: "text-body-13",
      md: "text-body-14",
      lg: "text-body-16",
      header: "text-headline",
    },
    font: {
      default: "font-default",
      header: "font-header",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    font: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}

const PText = React.forwardRef<HTMLButtonElement, TextProps>(
  ({ className, variant, size, font, ...props }) => {
    return (
      <>
        {font == "header" ? (
          <h2
            className={cn(textVariants({ variant, size, font, className }))}
            {...props}
          />
        ) : (
          <p
            className={cn(textVariants({ variant, size, font, className }))}
            {...props}
          />
        )}
      </>
    );
  }
);

export { PText, textVariants };
