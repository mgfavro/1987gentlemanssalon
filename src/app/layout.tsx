import type { Metadata } from "next";
import { Playfair_Display, Oswald, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-condensed",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://1987-gentlemans-salon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "1987 Gentleman's Salon — Barbershop in Fairfax, VA",
    template: "%s · 1987 Gentleman's Salon",
  },
  description:
    "A premier gentleman's barbershop in Fairfax, VA. Precision fades, classic cuts, beard shaping and hot-towel shaves. Open daily 11 AM – 9 PM. Walk-ins welcome.",
  keywords: [
    "barbershop Fairfax VA",
    "1987 Gentleman's Salon",
    "men's haircut Fairfax",
    "beard trim",
    "hot towel shave",
    "fades Fairfax Virginia",
  ],
  openGraph: {
    title: "1987 Gentleman's Salon — Barbershop in Fairfax, VA",
    description:
      "Precision fades, classic cuts, beard shaping and hot-towel shaves in Fairfax, VA. Open daily 11 AM – 9 PM.",
    url: siteUrl,
    siteName: "1987 Gentleman's Salon",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1987 Gentleman's Salon — Barbershop in Fairfax, VA",
    description:
      "Precision fades, classic cuts, beard shaping and hot-towel shaves in Fairfax, VA.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
