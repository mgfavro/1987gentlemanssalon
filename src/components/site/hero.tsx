import { salon } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClockIcon, PinIcon, StarIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-oxblood/15 blur-[120px]" />
      </div>

      {/* Barber-pole rails */}
      <div className="absolute inset-y-0 left-0 hidden w-2.5 opacity-70 md:block">
        <div className="barber-pole h-full w-full rounded-full" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-2.5 opacity-70 md:block">
        <div className="barber-pole h-full w-full rounded-full" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-primary/60" />
            Est. {salon.established} · {salon.city}
            <span className="h-px w-8 bg-primary/60" />
          </span>

          <h1 className="text-shadow-vintage mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl">
            1987
            <span className="mt-2 block bg-gradient-to-b from-brass-bright to-primary bg-clip-text text-transparent">
              Gentleman&apos;s Salon
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A premier barbershop in Fairfax, VA — where sharp fades, classic
            cuts and the hot-towel ritual are done with old-school pride and a
            steady hand.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={salon.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 text-base")}
            >
              Book an Appointment
            </a>
            <a
              href={salon.phoneHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-8 text-base",
              )}
            >
              Call {salon.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ClockIcon className="size-4 text-primary" />
              {salon.hoursLabel}
            </span>
            <span className="inline-flex items-center gap-2">
              <PinIcon className="size-4 text-primary" />
              {salon.address.line1}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4" />
                ))}
              </span>
              Loved by locals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
