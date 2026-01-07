import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading, Subheading } from "@/components/www/heading";
import { Section } from "@/components/www/section";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For solo users or small teams just getting started.",
    features: [
      "1 active agent",
      "Connect up to 2 tools",
      "500 tasks/month",
      "Access to standard agent templates",
      "Community support",
    ],
    storage: "15GB",
    cta: "Get Started",
    href: "/auth?plan=starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "Built for teams automating multiple workflows.",
    features: [
      "Up to 5 active agents",
      "Connect unlimited tools",
      "10,000 tasks/month",
      "Custom agent workflows",
      "Priority support",
      "Team collaboration tools",
      "Activity logs (last 7 days)",
    ],
    storage: "50GB",
    cta: "Get Pro",
    href: "/auth?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$89",
    description: "For solo users or small teams just getting started.",
    features: [
      "Unlimited agents",
      "Unlimited tool integrations",
      "SLA-backed support",
      "API access & SSO",
      "Priority support",
      "Custom compliance and security",
    ],
    storage: "100+GB",
    cta: "Contact Us",
    href: "/contact",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <Section classNames={{ container: "gap-12 md:gap-20" }}>
      <hgroup className="mx-auto flex max-w-lg flex-col gap-4 text-center">
        <Heading>Pricing</Heading>
        <Subheading>
          Simple, transparent pricing.
          <br />
          No hidden fees.
        </Subheading>
      </hgroup>

      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-0">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col border-0 shadow-none ring-1 ring-border transition-all duration-300",
              plan.highlighted
                ? "relative z-10 scale-100 bg-background shadow-md lg:-left-3 lg:-top-2 lg:w-[105%] lg:scale-[1.02] lg:shadow-xl"
                : "bg-background hover:bg-background/80"
            )}
          >
            {plan.highlighted && (
              <div className="absolute -top-2 left-0 right-0 mx-auto w-fit rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Most Popular
              </div>
            )}

            <CardHeader className="py-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {plan.name}
              </div>
              <CardTitle className="flex items-baseline gap-1 text-4xl font-bold md:text-5xl">
                {plan.price}
                <span className="text-base font-medium tracking-normal text-foreground/40">
                  / month
                </span>
              </CardTitle>
              <CardDescription className="text-base font-medium leading-snug">
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-6">
              <Link href={plan.href} className="w-full">
                <Button
                  className="w-full"
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>

              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Includes
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                      <div
                        className={cn(
                          "mt-0.5 flex size-5 items-center justify-center rounded-full text-white",
                          plan.highlighted ? "bg-green-400" : "bg-muted-foreground/30"
                        )}
                      >
                        <IconCheck size={12} stroke={3} />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter className="border-t p-6">
              <div className="flex w-full items-center justify-between text-sm font-medium">
                <span className="text-muted-foreground">Storage</span>
                <span className={cn(plan.highlighted && "font-bold text-green-400")}>
                  {plan.storage}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
