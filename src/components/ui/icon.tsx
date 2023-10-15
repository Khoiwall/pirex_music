import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";
const IconVariants = cva(
  "border-0 margin-0 outline-none p-0 align-middle inline-flex items-center justify-center overflow-hidden relative w-[90%] h-[90%] ",
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        lg: "w-5 h-5",
        xl: "w-6 h-6",
        "2xl": "w-7 h-7",
      },
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface Props
  extends VariantProps<typeof IconVariants>,
    HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Icon({ size, className, ...props }: Props) {
  return <div className={cn(IconVariants({ size, className }))} {...props} />;
}
export default Icon;
