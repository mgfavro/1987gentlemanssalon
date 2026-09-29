"use client";

import { useEffect, useState } from "react";
import { salon } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PhoneIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Barbers" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-primary/15 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-primary/40 font-condensed text-sm font-semibold tracking-tight text-primary">
            87
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-wide text-cream">
              1987
            </span>
            <span className="font-condensed text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
              Gentleman&apos;s Salon
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-condensed text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={salon.phoneHref}
            className="inline-flex items-center gap-2 font-condensed text-sm uppercase tracking-[0.12em] text-cream transition-colors hover:text-primary"
          >
            <PhoneIcon className="size-4" />
            {salon.phone}
          </a>
          <a
            href={salon.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "px-5")}
          >
            Book a Chair
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-md border border-primary/30 text-cream md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-primary/15 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="container-x flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-condensed text-base uppercase tracking-[0.18em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={salon.phoneHref}
                className="inline-flex items-center gap-2 font-condensed text-base uppercase tracking-[0.12em] text-cream"
              >
                <PhoneIcon className="size-4" />
                {salon.phone}
              </a>
              <a
                href={salon.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Book a Chair
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
