import { salon, services } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "./icons";

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-primary/60" />
            The Menu
            <span className="h-px w-8 bg-primary/60" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
            Grooming, done right.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cuts, shaves and beard work tailored to you. Prices are a starting
            point — final pricing depends on length, detail and your barber.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="group relative flex flex-col rounded-2xl border border-primary/15 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ServiceIcon name={s.icon} className="size-6" />
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-cream">
                  {s.name}
                </h3>
                <span className="font-condensed text-sm uppercase tracking-wide text-primary">
                  {s.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-primary/15 bg-secondary/40 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-semibold text-cream">
              Ready for a fresh cut?
            </h3>
            <p className="mt-1 text-muted-foreground">
              Reserve online in seconds, or give us a ring at {salon.phone}.
            </p>
          </div>
          <a
            href={salon.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "h-12 shrink-0 px-8 text-base")}
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
