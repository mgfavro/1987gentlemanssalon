export const salon = {
  name: "1987 Gentleman's Salon",
  established: "1987",
  tagline: "Old-school craft. Modern edge.",
  city: "Fairfax, Virginia",
  phone: "(703) 254-1140",
  phoneHref: "tel:+17032541140",
  address: {
    line1: "8558 Lee Hwy, Unit D",
    line2: "Fairfax, VA 22031",
    full: "8558 Lee Hwy, Unit D, Fairfax, VA 22031",
  },
  bookingUrl:
    "https://www.fresha.com/lvp/1987-gentlemans-salon-lee-highway-fairfax-GyPDn0",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1987+Gentleman%27s+Salon+8558+Lee+Hwy+Unit+D+Fairfax+VA+22031",
  mapEmbedUrl:
    "https://www.google.com/maps?q=8558+Lee+Hwy+Unit+D+Fairfax+VA+22031&output=embed",
  hoursLabel: "Open daily · 11 AM – 9 PM",
} as const;

export const hours: { day: string; time: string }[] = [
  { day: "Monday", time: "11:00 AM – 9:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 9:00 PM" },
  { day: "Thursday", time: "11:00 AM – 9:00 PM" },
  { day: "Friday", time: "11:00 AM – 9:00 PM" },
  { day: "Saturday", time: "11:00 AM – 9:00 PM" },
  { day: "Sunday", time: "11:00 AM – 9:00 PM" },
];

export type Service = {
  name: string;
  description: string;
  price: string;
  icon: "scissors" | "razor" | "beard" | "clipper" | "kid" | "brush";
};

export const services: Service[] = [
  {
    name: "Signature Haircut",
    description:
      "A tailored cut built around your head shape and style — finished with a precise line-up.",
    price: "from $35",
    icon: "scissors",
  },
  {
    name: "Skin & Taper Fades",
    description:
      "The house specialty. Seamless, blended fades with the kind of detail Ali is known for.",
    price: "from $40",
    icon: "clipper",
  },
  {
    name: "Beard Trim & Shaping",
    description:
      "Sculpted, lined and conditioned so your beard frames the cut instead of fighting it.",
    price: "from $20",
    icon: "beard",
  },
  {
    name: "Hot Towel Shave",
    description:
      "A traditional straight-razor shave with hot towels and warm lather. The full ritual.",
    price: "from $30",
    icon: "razor",
  },
  {
    name: "Head Shave",
    description:
      "A clean, close razor head shave finished smooth with hot towels and aftercare.",
    price: "from $30",
    icon: "brush",
  },
  {
    name: "Kids' Cut",
    description:
      "Patient, friendly cuts for the young gentlemen — a favorite with local families.",
    price: "from $25",
    icon: "kid",
  },
];

export const barbers: { name: string; role: string; blurb: string }[] = [
  {
    name: "Ali",
    role: "Master Barber",
    blurb:
      "Regulars praise Ali for unmatched attention to detail and razor-precise fades. Every cut leaves the chair exactly right.",
  },
  {
    name: "Yousof",
    role: "Barber & Stylist",
    blurb:
      "Skilled, professional and meticulous — clients rave about his flawless results and easy, welcoming chair-side manner.",
  },
];

export const reviews: { quote: string; author: string }[] = [
  {
    quote:
      "Ali's precise fades, friendly vibe and consistent attention to detail make this my go-to spot. Clean, welcoming, and always a great cut.",
    author: "Local regular",
  },
  {
    quote:
      "I had an excellent experience. Yousof did my haircut and I couldn't be happier — highly skilled, professional, and great attention to detail.",
    author: "First-time client",
  },
  {
    quote:
      "A true professional who does amazing haircuts. The shop is spotless and the atmosphere is relaxed. Great for both kids' and men's cuts.",
    author: "Fairfax family",
  },
];

export const features: { title: string; text: string }[] = [
  {
    title: "Skilled Barbers",
    text: "Seasoned hands who treat every cut like it's their own reputation on the line.",
  },
  {
    title: "Spotless Shop",
    text: "A clean, welcoming environment that regulars mention in review after review.",
  },
  {
    title: "Precision Fades",
    text: "Blends and line-ups dialed in to the millimeter — the detail that keeps people coming back.",
  },
  {
    title: "Walk-ins Welcome",
    text: "Booked or on a whim, seven days a week from 11 to 9. Pull up a chair.",
  },
];
