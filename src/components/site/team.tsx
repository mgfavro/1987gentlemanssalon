import { barbers } from "@/lib/site";
import { PoleIcon } from "./icons";

function initials(name: string) {
  return name.slice(0, 2).toUpperCase();
}

export function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-y border-primary/15 bg-secondary/30 py-24 md:py-32"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-primary/60" />
            The Chairs
            <span className="h-px w-8 bg-primary/60" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
            Meet your barbers.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The hands behind the reputation — praised by name in review after
            review.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {barbers.map((b) => (
            <article
              key={b.name}
              className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card p-8 text-center"
            >
              <div className="mx-auto grid size-24 place-items-center rounded-full border border-primary/30 bg-primary/10 font-display text-3xl font-semibold text-primary">
                {initials(b.name)}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                {b.name}
              </h3>
              <p className="mt-1 inline-flex items-center gap-2 font-condensed text-sm uppercase tracking-[0.2em] text-primary">
                <PoleIcon className="size-4" />
                {b.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {b.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
