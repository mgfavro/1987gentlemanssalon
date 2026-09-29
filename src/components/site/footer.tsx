import { salon } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-background py-14">
      <div className="container-x">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="grid size-10 place-items-center rounded-full border border-primary/40 font-condensed text-sm font-semibold text-primary">
                87
              </span>
              <div className="leading-none">
                <p className="font-display text-lg font-semibold text-cream">
                  1987 Gentleman&apos;s Salon
                </p>
                <p className="font-condensed text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
                  Est. {salon.established} · {salon.city}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {salon.tagline}
            </p>
          </div>

          <div className="grid gap-1 text-sm text-muted-foreground">
            <p className="font-condensed uppercase tracking-[0.2em] text-primary">
              Find Us
            </p>
            <p>{salon.address.line1}</p>
            <p>{salon.address.line2}</p>
            <a href={salon.phoneHref} className="hover:text-primary">
              {salon.phone}
            </a>
          </div>

          <div className="grid gap-1 text-sm text-muted-foreground">
            <p className="font-condensed uppercase tracking-[0.2em] text-primary">
              Hours
            </p>
            <p>Open Daily</p>
            <p>11:00 AM – 9:00 PM</p>
            <a
              href={salon.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 hover:text-primary"
            >
              Book online →
            </a>
          </div>
        </div>

        <div className="mt-10 hairline" />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} 1987 Gentleman&apos;s Salon · Fairfax,
          Virginia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
