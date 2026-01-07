import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-2">
      <nav className="container flex h-12 flex-row items-center justify-between rounded-full border-[0.5px] border-[#cecece] bg-background p-3 px-4">
        <Link href="/" className="flex items-center gap-1.5 font-semibold">
          <span className="h-4 w-3.5 rounded-[4px] border-r-4 border-t-4 border-pink-500"></span>
          <span>Company</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 text-sm font-medium md:flex">
          {LINKS.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              size="sm"
              className="h-8 rounded-full text-foreground/50 hover:bg-black/5 hover:text-black"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full px-3">
              <Link href="/auth">Sign In</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden">
                <IconMenu2 className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4 pt-10">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground/70 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <hr />

              <Button asChild size="lg" className="mt-auto w-full rounded-full">
                <Link href="/auth">Sign In</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
