import { features } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary/60" />
              The Shop
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
              A proper barbershop, the way it should be.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                1987 Gentleman&apos;s Salon is a premier barbershop in Fairfax,
                Virginia, known for exceptional service and genuinely skilled
                barbers. Clients come back for the unmatched attention to detail
                — and stay for the welcome.
              </p>
              <p>
                The room is clean, warm and unhurried. Whether it&apos;s a
                razor-sharp fade, a beard reshaped, or a young gentleman&apos;s
                first cut, every chair gets the same care and craft that&apos;s
                kept this place a neighborhood favorite.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-xl border border-primary/15 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="absolute -right-6 -top-6 size-16 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="font-display text-xl font-semibold text-cream">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
