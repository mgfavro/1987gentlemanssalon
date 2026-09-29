import { hours, salon } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClockIcon, PhoneIcon, PinIcon } from "./icons";

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export function Visit() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden border-t border-primary/15 bg-secondary/30 py-24 md:py-32"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-primary/60" />
            Visit Us
            <span className="h-px w-8 bg-primary/60" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
            Pull up a chair.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Right on Lee Highway in Fairfax. Booked or walk-in, we&apos;ll take
            good care of you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-primary/15 bg-card p-7">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-cream">
                <PinIcon className="size-5 text-primary" />
                Location
              </h3>
              <p className="mt-3 text-muted-foreground">
                {salon.address.line1}
                <br />
                {salon.address.line2}
              </p>
              <a
                href={salon.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-condensed text-sm uppercase tracking-[0.15em] text-primary underline-offset-4 hover:underline"
              >
                Get Directions →
              </a>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-card p-7">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-cream">
                <PhoneIcon className="size-5 text-primary" />
                Contact
              </h3>
              <a
                href={salon.phoneHref}
                className="mt-3 block text-lg text-cream transition-colors hover:text-primary"
              >
                {salon.phone}
              </a>
              <a
                href={salon.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "mt-5 w-full")}
              >
                Book Online
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card p-7 lg:col-span-3">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-cream">
              <ClockIcon className="size-5 text-primary" />
              Hours
            </h3>
            <ul className="mt-4 divide-y divide-border/60">
              {hours.map((h) => {
                const isToday = h.day === today;
                return (
                  <li
                    key={h.day}
                    className={cn(
                      "flex items-center justify-between py-2.5 text-sm",
                      isToday && "text-cream",
                    )}
                  >
                    <span
                      className={cn(
                        "font-condensed uppercase tracking-[0.15em]",
                        isToday ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {h.day}
                      {isToday && (
                        <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-[0.6rem] tracking-widest text-primary">
                          Today
                        </span>
                      )}
                    </span>
                    <span className={isToday ? "text-cream" : "text-muted-foreground"}>
                      {h.time}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 overflow-hidden rounded-xl border border-primary/15">
              <iframe
                title="Map to 1987 Gentleman's Salon"
                src={salon.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale-[0.3] contrast-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
