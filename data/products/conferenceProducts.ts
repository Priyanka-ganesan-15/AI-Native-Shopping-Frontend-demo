export type ConferenceProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  reason: string;
  highlights: string[];
};

export const conferenceProducts: ConferenceProduct[] = [
  {
    id: "1",
    name: "Relaxed Wool Blazer",
    brand: "COS",
    price: 195,
    image: "/products/blazer-1.jpg",
    reason: "Selected for your conference brief",
    highlights: ["Structured silhouette", "Neutral palette", "Professional occasion"],
  },
  {
    id: "2",
    name: "Wide-Leg Pleated Trousers",
    brand: "TOTEME",
    price: 260,
    image: "/products/trousers-1.jpg",
    reason: "Complements your neutral palette",
    highlights: ["Fluid tailoring", "Versatile base layer", "Pairs with blazers"],
  },
  {
    id: "3",
    name: "Silk Blend Shell Top",
    brand: "THE ROW",
    price: 320,
    image: "/products/top-1.jpg",
    reason: "Pairs well with tailored silhouettes",
    highlights: ["Refined texture", "Clean neckline", "Layering essential"],
  },
  {
    id: "4",
    name: "Sculpted Leather Loafers",
    brand: "ARKET",
    price: 175,
    image: "/products/shoes-1.jpg",
    reason: "Grounds the look with quiet structure",
    highlights: ["Polished finish", "Comfort for long days", "Conference-ready"],
  },
  {
    id: "5",
    name: "Soft Structured Shoulder Bag",
    brand: "MASSIMO DUTTI",
    price: 210,
    image: "/products/bag-1.jpg",
    reason: "Adds depth to your modern professional direction",
    highlights: ["Practical capacity", "Minimal hardware", "Completes the outfit"],
  },
];
