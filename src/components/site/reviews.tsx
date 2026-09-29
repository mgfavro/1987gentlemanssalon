import { reviews } from "@/lib/site";
import { QuoteIcon, StarIcon } from "./icons";

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-primary/60" />
            Word on the Street
            <span className="h-px w-8 bg-primary/60" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
            What the regulars say.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative flex flex-col rounded-2xl border border-primary/15 bg-card p-8"
            >
              <QuoteIcon className="size-9 text-primary/30" />
              <div className="mt-3 flex text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="size-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-foreground/90">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-condensed text-sm uppercase tracking-[0.2em] text-muted-foreground">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
