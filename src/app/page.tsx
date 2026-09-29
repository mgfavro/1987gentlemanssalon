import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Team } from "@/components/site/team";
import { Reviews } from "@/components/site/reviews";
import { Visit } from "@/components/site/visit";
import { Footer } from "@/components/site/footer";
import { salon } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: salon.name,
  description:
    "A premier gentleman's barbershop in Fairfax, VA offering precision fades, classic cuts, beard shaping and hot-towel shaves.",
  telephone: salon.phone,
  url: "https://1987-gentlemans-salon.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8558 Lee Hwy, Unit D",
    addressLocality: "Fairfax",
    addressRegion: "VA",
    postalCode: "22031",
    addressCountry: "US",
  },
  openingHours: "Mo-Su 11:00-21:00",
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Team />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
