import { HangerStatus } from "../../types/hanger";

export type HangerOutfitPiece = {
  id: string;
  name: string;
  brand: string;
  note: string;
  imageTone: "blazer" | "trouser" | "shell" | "loafer" | "tote" | "alt";
};

export type HangerReaction = {
  person: string;
  emoji: string;
  count: number;
  note: string;
};

export type HangerComment = {
  id: string;
  person: string;
  message: string;
  timestamp: string;
};

export type HangerConsensus = {
  mostLoved: string;
  mixedOpinions: string;
  overallSentiment: string;
};

export type HangerDetail = {
  slug: string;
  name: string;
  status: HangerStatus;
  outfitPieces: HangerOutfitPiece[];
  stylistNotes: string[];
  consensus: HangerConsensus;
  reactions: HangerReaction[];
  discussion: HangerComment[];
};

const MOCK_HANGERS: Record<string, HangerDetail> = {
  "day-1-keynote": {
    slug: "day-1-keynote",
    name: "Day 1 Keynote",
    status: "Draft",
    outfitPieces: [
      {
        id: "piece-blazer",
        name: "Relaxed Wool Blazer",
        brand: "TOTEME",
        note: "Creates confident structure without feeling rigid.",
        imageTone: "blazer",
      },
      {
        id: "piece-trouser",
        name: "Wide Leg Trouser",
        brand: "COS",
        note: "Softens the silhouette and allows easy movement.",
        imageTone: "trouser",
      },
      {
        id: "piece-shell",
        name: "Silk Shell Top",
        brand: "The Row",
        note: "Introduces a polished layer under tailoring.",
        imageTone: "shell",
      },
      {
        id: "piece-loafer",
        name: "Leather Loafer",
        brand: "A.Emery",
        note: "Grounds the look with understated sharpness.",
        imageTone: "loafer",
      },
      {
        id: "piece-tote",
        name: "Structured Tote",
        brand: "DeMellier",
        note: "Carries keynote essentials while keeping clean lines.",
        imageTone: "tote",
      },
    ],
    stylistNotes: [
      "This outfit balances authority and approachability.",
      "The blazer creates structure while the relaxed trouser softens the overall silhouette.",
      "Together, the pieces feel intentionally assembled and aligned to your conference setting.",
    ],
    consensus: {
      mostLoved: "Relaxed Wool Blazer",
      mixedOpinions: "Leather Loafer",
      overallSentiment: "Very positive",
    },
    reactions: [
      {
        person: "Sarah",
        emoji: "❤️",
        count: 12,
        note: "Sarah loved this look and asked for the same blazer cut.",
      },
      {
        person: "Emma",
        emoji: "🔥",
        count: 8,
        note: "Emma saved this hanger for her upcoming leadership offsite.",
      },
      {
        person: "Olivia",
        emoji: "✨",
        count: 6,
        note: "Olivia prefers Look 2 shoes but likes the rest of the direction.",
      },
    ],
    discussion: [
      {
        id: "comment-1",
        person: "Sarah",
        message: "Love this blazer. It feels elevated without trying too hard.",
        timestamp: "2h ago",
      },
      {
        id: "comment-2",
        person: "Emma",
        message: "The navy version feels stronger for stage lighting.",
        timestamp: "1h ago",
      },
      {
        id: "comment-3",
        person: "Olivia",
        message: "Shoes are perfect. Maybe add one softer jewelry option.",
        timestamp: "35m ago",
      },
    ],
  },
};

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getHangerDetail(slug: string): HangerDetail {
  const trimmedSlug = slug.trim().toLowerCase();
  const mocked = MOCK_HANGERS[trimmedSlug];

  if (mocked) {
    return mocked;
  }

  const fallbackName = titleFromSlug(trimmedSlug) || "Untitled Hanger";

  return {
    slug: trimmedSlug,
    name: fallbackName,
    status: "Draft",
    outfitPieces: [
      {
        id: "fallback-1",
        name: "Relaxed Wool Blazer",
        brand: "TOTEME",
        note: "A strong base layer for a polished outfit story.",
        imageTone: "blazer",
      },
      {
        id: "fallback-2",
        name: "Wide Leg Trouser",
        brand: "COS",
        note: "Balances structure with comfort and movement.",
        imageTone: "trouser",
      },
      {
        id: "fallback-3",
        name: "Leather Loafer",
        brand: "A.Emery",
        note: "Keeps the outfit grounded and conference-ready.",
        imageTone: "loafer",
      },
      {
        id: "fallback-4",
        name: "Structured Tote",
        brand: "DeMellier",
        note: "Maintains a clean silhouette with practical utility.",
        imageTone: "tote",
      },
    ],
    stylistNotes: [
      "This hanger follows an editorial balance between sharp tailoring and softer layers.",
      "Keep the palette neutral and textured so each piece complements the next.",
    ],
    consensus: {
      mostLoved: "Relaxed Wool Blazer",
      mixedOpinions: "Shoe direction",
      overallSentiment: "Positive",
    },
    reactions: [
      {
        person: "Sarah",
        emoji: "❤️",
        count: 4,
        note: "Sarah liked the overall direction.",
      },
      {
        person: "Emma",
        emoji: "🔥",
        count: 3,
        note: "Emma saved the hanger as inspiration.",
      },
      {
        person: "Olivia",
        emoji: "✨",
        count: 2,
        note: "Olivia suggested one alternate shoe option.",
      },
    ],
    discussion: [
      {
        id: "fallback-comment-1",
        person: "Sarah",
        message: "Great foundation. I would keep the blazer as-is.",
        timestamp: "Just now",
      },
    ],
  };
}
