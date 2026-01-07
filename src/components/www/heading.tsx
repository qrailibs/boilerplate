import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-semibold tracking-tight", {
  variants: {
    variant: {
      default: "text-2xl md:text-4xl text-center",
      title: "text-4xl leading-[1.15] md:text-[58px] text-center",
      section: "text-2xl md:text-4xl text-center",
      card: "text-lg font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const subheadingVariants = cva("text-muted-foreground", {
  variants: {
    variant: {
      default: "text-center font-medium opacity-50",
      hero: "max-w-sm text-center text-lg font-medium text-foreground/75 md:text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function Heading({ className, variant, as = "h2", ...props }: HeadingProps) {
  const Comp = as;
  return <Comp className={cn(headingVariants({ variant }), className)} {...props} />;
}

export interface SubheadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof subheadingVariants> {}

function Subheading({ className, variant, ...props }: SubheadingProps) {
  return <p className={cn(subheadingVariants({ variant }), className)} {...props} />;
}

export { Heading, Subheading, headingVariants, subheadingVariants };
