export type Study = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  visual: "stone" | "paper" | "coffee" | "spiral" | "yin" | "cathedral";
};

export const studies: Study[] = [
  {
    number: "01",
    title: "Wabi-Sabi Stone Texture Planter",
    category: "Material Study",
    description:
      "A quiet vessel shaped around irregular volume, softened edges, and a mineral surface that feels calm before touch.",
    tags: ["stone", "matte", "organic"],
    visual: "stone"
  },
  {
    number: "02",
    title: "Paper Bag Inspired Planter",
    category: "Form Study",
    description:
      "Folded silhouettes and compressed corners translate a disposable gesture into a lasting gardenware object.",
    tags: ["fold", "soft geometry", "indoor"],
    visual: "paper"
  },
  {
    number: "03",
    title: "Coffee Ground Texture Planter",
    category: "Surface Study",
    description:
      "A granular skin with warm depth, designed to suggest material memory without becoming decorative.",
    tags: ["granular", "earth", "tactile"],
    visual: "coffee"
  },
  {
    number: "04",
    title: "Spiral Architecture Planter",
    category: "Structure Study",
    description:
      "A rotating profile explores shadow, vertical rhythm, and a sense of slow movement around planted life.",
    tags: ["spiral", "shadow", "rhythm"],
    visual: "spiral"
  },
  {
    number: "05",
    title: "Yin Yang Planter Set",
    category: "Composition Study",
    description:
      "Two companion forms balance mass and void, creating a paired object with a calm spatial relationship.",
    tags: ["pairing", "balance", "set"],
    visual: "yin"
  },
  {
    number: "06",
    title: "Cathedral Structure Planter",
    category: "Architectural Study",
    description:
      "Tall ribs, softened arches, and vertical repetition create a planter with a quiet architectural presence.",
    tags: ["ribbed", "vertical", "architecture"],
    visual: "cathedral"
  }
];
