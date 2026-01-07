import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("py-12 md:py-16 [&+section]:pt-0 [header+&]:pt-0", {
  variants: {
    variant: {
      default: "",
      hero: "pt-24 md:pt-32",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  classNames?: {
    container?: string;
  };
}

function Section({ className, variant, classNames, children, ...props }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ variant }), className)} {...props}>
      <div className={cn("container", classNames?.container)}>{children}</div>
    </section>
  );
}

export { Section, sectionVariants };
