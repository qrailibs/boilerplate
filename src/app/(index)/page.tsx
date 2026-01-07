import Link from "next/link";
import {
  IconBoltFilled,
  IconChartBar,
  IconCpu,
  IconShieldFilled,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingSection } from "@/components/www/pricing-section";
import { Section } from "@/components/www/section";
import { Heading, Subheading } from "@/components/www/heading";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <header className="relative py-16 pt-24 md:py-24 md:pt-32">
        <div className="container relative z-10 gap-10">
          <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
            <Heading as="h1" variant="title">
              Entertaining landing page
            </Heading>
            <Subheading variant="hero">
              You can edit this page to get started and build your own project.
            </Subheading>
            <Link className="w-max" href="/auth">
              <Button size="lg" variant="default">
                Get started
              </Button>
            </Link>
          </div>
          <div className="min-h-[280px] w-full rounded-3xl border bg-background md:min-h-[520px]"></div>
        </div>

        <div className="z-1 pointer-events-none absolute -left-40 bottom-20 h-[340px] w-[480px] bg-amber-500/25 blur-[160px] md:h-[640px] md:w-[720px]"></div>
        <div className="z-1 pointer-events-none absolute -right-40 bottom-20 h-[340px] w-[480px] bg-pink-500/25 blur-[160px] md:h-[640px] md:w-[720px]"></div>
      </header>

      <Section classNames={{ container: "relative z-10 gap-10" }}>
        <hgroup className="mx-auto flex max-w-lg flex-col gap-2">
          <Heading>Advantages</Heading>
          <Subheading>Why users love our product</Subheading>
        </hgroup>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          <Card variant="ghost">
            <CardHeader className="flex-row items-center gap-2 text-amber-500">
              <IconBoltFilled className="size-5 fill-current" />
              <CardTitle>Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              Optimized for speed and performance, ensuring your application loads instantly and
              runs smoothly under any load.
            </CardContent>
          </Card>
          <Card variant="ghost">
            <CardHeader className="flex-row items-center gap-2 text-blue-500">
              <IconShieldFilled className="size-5 fill-current" />
              <CardTitle>Secure by Default</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              Built with industry-standard security practices to protect your data and your
              users&apos; privacy from day one.
            </CardContent>
          </Card>
          <Card variant="ghost">
            <CardHeader className="flex-row items-center gap-2 text-green-500">
              <IconWorld className="size-5" />
              <CardTitle>Global Scale</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              Deploy anywhere with ease. Our infrastructure is designed to scale globally, reaching
              users wherever they are.
            </CardContent>
          </Card>
          <Card variant="ghost">
            <CardHeader className="flex-row items-center gap-2 text-purple-500">
              <IconChartBar className="size-5" />
              <CardTitle>Analytics Ready</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              Integrated analytics tools provide actionable insights, helping you understand user
              behavior and grow your business.
            </CardContent>
          </Card>
          <Card variant="ghost">
            <CardHeader className="flex-row items-center gap-2 text-rose-500">
              <IconCpu className="size-5" />
              <CardTitle>AI Powered</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              Leverage the latest AI technologies to automate tasks, generate content, and enhance
              user experiences.
            </CardContent>
          </Card>
          <Card variant="ghost">
            <CardHeader className="flex-row items-center gap-2 text-cyan-500">
              <IconUsers className="size-5 fill-current" />
              <CardTitle>Community Driven</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              Join a vibrant community of developers and creators. Share knowledge, collaborate, and
              build together.
            </CardContent>
          </Card>
        </div>
      </Section>

      <PricingSection />

      <Section classNames={{ container: "max-w-[680px] gap-10" }}>
        <hgroup className="mx-auto flex max-w-lg flex-col gap-2">
          <Heading>FAQ</Heading>
          <Subheading>Frequently asked questions</Subheading>
        </hgroup>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is included in the plan?</AccordionTrigger>
            <AccordionContent>
              Our plan includes access to all core features, 24/7 support, and regular updates. You
              also get access to our community forum and extensive documentation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your subscription at any time. There are no long-term contracts or
              cancellation fees.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer a 14-day free trial so you can explore all features before committing.
              No credit card required to sign up.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How secure is my data?</AccordionTrigger>
            <AccordionContent>
              We use bank-level encryption to store your data and perform regular security audits to
              ensure your information is always safe.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section classNames={{ container: "relative" }}>
        <div className="relative overflow-hidden rounded-[40px] bg-muted px-6 py-16 text-center md:px-12 md:py-24">
          <div className="z-1 pointer-events-none absolute -left-10 -top-10 size-64 rounded-full bg-pink-500/20 blur-[100px]"></div>
          <div className="z-1 pointer-events-none absolute -bottom-10 -right-10 size-64 rounded-full bg-amber-500/20 blur-[100px]"></div>

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
            <Heading as="h2" className="text-3xl md:text-5xl">
              Ready to get started?
            </Heading>
            <p className="max-w-lg text-lg text-muted-foreground md:text-xl">
              Join thousands of users who are already building with our platform. Start your journey
              today.
            </p>
            <Link href="/auth">
              <Button size="lg">
                Get started <span className="opacity-50">FREE</span>
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
