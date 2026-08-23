export type SpecRow = { label: string; value: string };
export type DoseRow = { crop: string; stage: string; dose: string };

export type Product = {
  slug: string;
  name: string;
  category: "Water Soluble Fertilizer" | "Micronutrient" | "Liquid Fertilizer";
  /** Fertilizer type line shown on the label, e.g. "100% Water Soluble Complex Fertilizer". */
  fertilizerType: string;
  packs: string[];
  grade: string;
  /** Short blurb shown on the product card. */
  desc: string;
  /** Longer intro copy shown at the top of the detail page. */
  longDesc?: string;
  image: string;
  /** "Nutrient Contents" / "As per FCO Specification" table. */
  specs: SpecRow[];
  /** "Advantages" bullet list — populated for the fortified liquid range. */
  benefits?: string[];
  /** Crops the product is recommended for. */
  majorCrops?: string[];
  /** Simple "Dose/acre" style bullet points. */
  doseNotes?: string[];
  /** Full crop / stage / dose table, used for CalciBoZ. */
  doseTable?: DoseRow[];
  /** "Directions for Use" copy. */
  directions?: string;
  /** "Compatibility" copy. */
  compatibility?: string;
  /** Packing line as printed on the label, e.g. "1 Ltr. & 500 ml." */
  packing: string;
  brochure?: string;
};

export const filters = [
  "All Products",
  "Liquid Fertilizer",
  "Micronutrient",
  "Water Soluble Fertilizer",
] as const;

/** Storage note is identical across the whole range — shown once per liquid/label product. */
export const STANDARD_STORAGE =
  "Protect from frost. Store above 5°C. Keep in a cool, well-ventilated store. Do not store in direct sunlight or near direct sources of heat. Keep out of reach of children. Keep away from food, drink and animal feedstuffs. For agriculture use only — not for medicinal use.";

export const products: Product[] = [
  {
    slug: "npk-19-19-19",
    name: "NPK 19:19:19",
    category: "Water Soluble Fertilizer",
    fertilizerType: "100% Water Soluble Mixture of Fertilizer",
    packs: ["1 kg"],
    packing: "1 kg",
    grade: "19-19-19",
    desc: "Fully balanced NPK blend suited for general crop nutrition at every stage.",
    longDesc:
      "A fully balanced, 100% water soluble NPK mixture fertilizer supplying nitrogen, phosphorous, and potassium in equal measure — suited to general crop nutrition across every growth stage.",
    image: "/products/19-19-19.png",
    specs: [
      { label: "Moisture, max", value: "1.5%" },
      { label: "Total nitrogen (ammoniacal & urea), min", value: "19.0%" },
      { label: "Ammoniacal nitrogen, min", value: "5.5%" },
      { label: "Available phosphorous (as P₂O₅), min", value: "19.0%" },
      { label: "Water soluble phosphorous (as P₂O₅), min", value: "16.5%" },
      { label: "Water soluble potassium (as K₂O), min", value: "19.0%" },
      { label: "Particle size", value: "Min. 90% between 1 mm and 4 mm IS sieve" },
    ],
    benefits: [
      "Supplies nitrogen, phosphorus and potassium in equal measure for balanced nutrition at every growth stage",
      "Promotes healthy vegetative growth alongside flowering and fruiting, without favouring one over the other",
      "Fully water soluble for fast, uniform uptake through fertigation or foliar spray",
      "Suitable for a wide range of crops and compatible with most commonly used pesticides and fungicides",
      "Useful for general maintenance feeding and for correcting mild, non-specific nutrient deficiencies",
    ],
    doseNotes: [
      "Foliar spray: 5–7 g per litre of water, at 10–15 day intervals during active growth",
      "Fertigation / drip irrigation: 1.5–2 g per litre of irrigation water, adjusted to crop and soil type",
      "Can be applied from early vegetative growth through to the reproductive stage",
    ],
    directions:
      "Dissolve completely in clean water before spraying or injecting. Apply during the cooler parts of the day (early morning or evening) for best absorption. Carry out a soil test where possible to avoid overuse.",
    compatibility:
      "Compatible with most water soluble fertilizers and commonly used pesticides; always jar-test before tank-mixing with an unfamiliar product.",
    brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "npk-00-52-34",
    name: "NPK 00:52:34",
    category: "Water Soluble Fertilizer",
    fertilizerType: "100% Water Soluble Complex Fertilizer",
    packs: ["1 kg"],
    packing: "1 kg",
    grade: "00-52-34",
    desc: "Mono Potassium Phosphate — a high-phosphorus, high-potassium blend ideal for flowering and fruiting stages.",
    longDesc:
      "Mono Potassium Phosphate: a 100% water soluble complex fertilizer delivering a high-phosphorus, high-potassium ratio, ideal for the flowering and fruiting stages.",
    image: "/products/00-52-34.png",
    specs: [
      { label: "Moisture, max", value: "0.5%" },
      { label: "Water soluble phosphorous (as P₂O₅), min", value: "52.0%" },
      { label: "Water soluble potassium (as K₂O), min", value: "34.0%" },
      { label: "Sodium (as NaCl), max", value: "0.5%" },
    ],
    benefits: [
      "Nitrogen-free, high phosphorus-potassium formula that pushes flowering and fruit set without stimulating unwanted vegetative growth",
      "Speeds up early root establishment after transplanting",
      "Improves fruit size, colour, and sugar content",
      "Foliar sprays have shown a suppressive effect on powdery mildew in susceptible crops such as grapes, cucurbits, and mango",
      "Low salt index and low pH make it safe to use across a wide range of crops and growth stages",
    ],
    doseNotes: [
      "Foliar spray: 3–5 g per litre of water, from 30–40 days after sowing until pre-flowering, 2–3 sprays at 10–15 day intervals",
      "Fertigation: 4–5 kg per acre, timed to the crop's flowering and fruiting stage",
    ],
    directions:
      "Dissolve fully in clean water before use. Apply in the early morning or evening to avoid leaf burn.",
    compatibility:
      "Compatible with most water soluble fertilizers and pesticides. Do not tank-mix with calcium or magnesium fertilizers — this can form an insoluble precipitate.",
      brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "npk-00-00-50",
    name: "NPK 00:00:50",
    category: "Water Soluble Fertilizer",
    fertilizerType: "100% Water Soluble Complex Fertilizer",
    packs: ["1 kg"],
    packing: "1 kg",
    grade: "00-00-50",
    desc: "Potassium Sulphate — a pure potassium formula improving stress tolerance and crop quality.",
    longDesc:
      "Potassium Sulphate: a 100% water soluble complex fertilizer supplying pure potassium and sulphur, improving crop stress tolerance and overall quality.",
    image: "/products/00-00-50.png",
    specs: [
      { label: "Moisture, max", value: "1.5%" },
      { label: "Water soluble potassium (as K₂O), min", value: "50.0%" },
      { label: "Sulphate sulphur (as S), min", value: "17.5%" },
      { label: "Sodium (as NaCl), max", value: "2.0%" },
      { label: "Total chlorides (as Cl), max", value: "2.5%" },
    ],
    benefits: [
      "Chloride-free, nitrogen-free potassium and sulphur source suited to the reproductive/finishing stage of the crop",
      "Improves fruit size, colour, shine, and overall sugar or oil content",
      "Strengthens crop resistance to disease and environmental stress",
      "A safer choice for chloride-sensitive crops such as tobacco, grapes, citrus, and onion",
      "Its mildly acidic nature helps keep drip lines and spray nozzles from clogging",
    ],
    doseNotes: [
      "Foliar spray: 6–8 g per litre of water (0.5–1% solution), applied after flower emergence",
      "Fertigation: as per soil test recommendation, typically through the fruit development stage",
    ],
    directions: "Dissolve fully in clean water before use. Apply in the early morning or evening.",
    compatibility:
      "Can be combined with most N, NP, and PK water soluble fertilizers according to crop needs. Avoid mixing with calcium-based products.",
      brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "npk-12-61-00",
    name: "NPK 12:61:00",
    category: "Water Soluble Fertilizer",
    fertilizerType: "100% Water Soluble Complex Fertilizer",
    packs: ["1 kg"],
    packing: "1 kg",
    grade: "12-61-00",
    desc: "Mono Ammonium Phosphate — a high-phosphorus formula for early root development and vigorous growth.",
    longDesc:
      "Mono Ammonium Phosphate: a 100% water soluble complex fertilizer with a high phosphorous content, supporting early root development and vigorous vegetative growth.",
    image: "/products/12-61-00.png",
    specs: [
      { label: "Moisture, max", value: "0.5%" },
      { label: "Ammoniacal nitrogen, min", value: "12.0%" },
      { label: "Water soluble phosphorous (as P₂O₅), min", value: "61.0%" },
      { label: "Sodium (as NaCl), max", value: "0.5%" },
      { label: "Matter insoluble in water, max", value: "0.5%" },
    ],
    benefits: [
      "High phosphorus with ammoniacal nitrogen for strong early root and shoot development",
      "Well suited at transplanting/establishment and again just before flowering to reduce flower and fruit drop",
      "Virtually free of chloride and sodium, safe for sensitive crops",
      "Improves nutrient absorption and supports higher yield",
      "Mildly acidifies the spray solution, improving micronutrient availability in alkaline soils",
    ],
    doseNotes: [
      "Foliar spray: 5–10 g per litre of water, at vegetative growth and again before flowering",
      "Fertigation: as per soil test and crop growth stage, typically from early growth to pre-flowering",
    ],
    directions: "Dissolve fully in clean water before use. Apply in the early morning or evening.",
    compatibility:
      "Compatible with most water soluble fertilizers and pesticides (except most herbicides). Do not tank-mix concentrated solution with calcium- or magnesium-based fertilizers.",
      brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "npk-13-40-13",
    name: "NPK 13:40:13",
    category: "Water Soluble Fertilizer",
    fertilizerType: "100% Water Soluble Mixture of Fertilizer",
    packs: ["1 kg"],
    packing: "1 kg",
    grade: "13-40-13",
    desc: "Balanced nutrition tailored for transplanting and establishment stages.",
    longDesc:
      "A 100% water soluble mixture fertilizer balancing nitrogen, phosphorous, and potassium, tailored for the transplanting and establishment stages of the crop cycle.",
    image: "/products/13-40-13.png",
    specs: [
      { label: "Total nitrogen (N), min", value: "13.0%" },
      { label: "Nitrate nitrogen (as NO₃)", value: "4.4%" },
      { label: "Total ammonical nitrogen (as NH₄)", value: "8.6%" },
      { label: "Water soluble phosphorous (as P₂O₅)", value: "40.0%" },
      { label: "Water soluble potassium (as K₂O)", value: "13.0%" },
      { label: "Sodium (as NaCl, dry basis), max", value: "0.15%" },
      { label: "Matter insoluble in water, max", value: "0.5%" },
    ],
    benefits: [
      "High-phosphorus balanced blend supporting strong root systems during transplanting and establishment",
      "Encourages healthy flowering and fruit set alongside vigorous early growth",
      "Improves fruit weight, colour, size, and shelf life",
      "Builds plant resilience against environmental stress",
      "Fully water soluble for rapid, uniform nutrient delivery",
    ],
    doseNotes: [
      "Foliar spray: 5–7 g per litre of water, at active tillering/branching and repeated 20–25 days later or before flowering",
      "Fertigation: 5–10 kg per acre, adjusted to crop stage and soil analysis",
    ],
    directions:
      "Dissolve fully in clean water before use. Suitable for foliar spray, fertigation, and drip irrigation.",
      brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "npk-13-00-45",
    name: "NPK 13:00:45",
    category: "Water Soluble Fertilizer",
    fertilizerType: "100% Water Soluble Complex Fertilizer",
    packs: ["1 kg"],
    packing: "1 kg",
    grade: "13-00-45",
    desc: "Potassium Nitrate — strengthens fruit quality, size, and shelf life.",
    longDesc:
      "Potassium Nitrate: a 100% water soluble complex fertilizer delivering nitrate-form nitrogen alongside high potassium, strengthening fruit quality, size, and shelf life.",
    image: "/products/13-00-45.png",
    specs: [
      { label: "Moisture, max", value: "0.5%" },
      { label: "Total nitrogen (all in nitrate form), min", value: "13.0%" },
      { label: "Water soluble potassium (as K₂O), min", value: "45.0%" },
      { label: "Sodium (as Na), max", value: "1.0%" },
      { label: "Total chloride (as Cl), max", value: "1.5%" },
      { label: "Matter insoluble in water, max", value: "1.5%" },
    ],
    benefits: [
      "Nitrate-form nitrogen has a synergistic effect on potassium uptake, more efficient than ammoniacal sources",
      "Increases fruit and grain size, weight, and shine, and improves oil content in oilseed crops",
      "Non-volatile, so nitrogen is not lost to the atmosphere on application",
      "Builds resistance to pests, diseases, and abiotic stress such as frost and drought",
      "Low in sodium and chloride, safe for salt-sensitive crops",
    ],
    doseNotes: [
      "Foliar spray: 10–15 g per litre of water (1–1.5% solution), one spray around 60–70 days after sowing, or repeated at post-bloom / fruit-filling stages",
      "Fertigation: 1–3 kg per acre, per soil test recommendation",
    ],
    directions: "Dissolve fully in clean water before use. Best applied at post-bloom and physiological maturity stages.",
    compatibility: "Compatible with most water soluble fertilizers and the majority of pesticides used in foliar application.",
    brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "calcium-nitrate",
    name: "Calcium Nitrate",
    category: "Water Soluble Fertilizer",
    fertilizerType: "100% Water Soluble Complex Fertilizer",
    packs: ["1 kg"],
    packing: "1 kg",
    grade: "CaNO3",
    desc: "Readily available calcium and nitrogen, reducing calcium-deficiency disorders in crops.",
    longDesc:
      "A 100% water soluble complex fertilizer supplying readily available calcium alongside nitrate-nitrogen, helping reduce calcium-deficiency disorders such as blossom end rot.",
    image: "/products/Calcium-Nitrate.png",
    specs: [
      { label: "Total nitrogen (ammoniacal & nitrate), min", value: "15.5%" },
      { label: "Nitrate nitrogen (as N), min", value: "14.5%" },
      { label: "Water soluble calcium (as Ca), min", value: "18.5%" },
      { label: "Matter insoluble in water, max", value: "1.5%" },
    ],
    benefits: [
      "Readily available calcium and nitrate-nitrogen for fast correction of calcium deficiency",
      "Helps prevent and correct blossom end rot in tomato and pepper, tip burn in leafy greens, and bitter pit / cork spot in apple",
      "Strengthens cell walls, improving fruit firmness, structure, and disease resistance",
      "Nitrate-nitrogen supports vigorous vegetative growth without acidifying the soil",
      "Improves the shelf life and keeping quality of harvested produce",
    ],
    majorCrops: [
      "Tomato",
      "Chilli & pepper",
      "Apple",
      "Pomegranate",
      "Grapes",
      "Leafy vegetables",
    ],
    doseNotes: [
      "Foliar spray: 5–7 g per litre of water, every 10–15 days during vegetative and fruiting stages",
      "Fertigation: 3–5 kg per acre through the crop cycle, particularly during fruit development",
    ],
    directions: "Dissolve fully in clean water before use. Apply in the early morning or evening to avoid leaf burn.",
    compatibility:
      "Do not tank-mix with phosphate or sulphate fertilizers — calcium will react with them to form an insoluble precipitate.",
      brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "boron-20",
    name: "Boron 20%",
    category: "Micronutrient",
    fertilizerType: "Micronutrient — Di-Sodium Octa Borate Tetra Hydrate",
    packs: ["1 kg"],
    packing: "1 kg",
    grade: "B 20%",
    desc: "Corrects boron deficiency, supporting flowering and fruit set.",
    longDesc:
      "Di-Sodium Octa Borate Tetra Hydrate — a straight micronutrient that corrects boron deficiency quickly, supporting flowering, pollination, and fruit set.",
    image: "/products/Boron-20.png",
    specs: [
      { label: "Boron (as B), min", value: "20.0%" },
      { label: "Matter insoluble in water, max", value: "1.0%" },
      { label: "Lead (as Pb), max", value: "0.003%" },
      { label: "Cadmium (as Cd), max", value: "0.0025%" },
      { label: "Arsenic (as As), max", value: "0.01%" },
    ],
    benefits: [
      "Corrects boron deficiency quickly — a nutrient essential for cell wall strength and cell division",
      "Improves pollen germination and pollen tube growth, reducing flower and bud drop",
      "Enhances fruit and seed development along with sugar translocation within the plant",
      "Helps keep calcium in a soluble, plant-available form",
      "Fully water soluble and generally compatible with common fertilizers and pesticides after a jar test",
    ],
    doseNotes: [
      "Foliar spray: 1–1.5 g per litre of water (0.1–0.15% solution), 2–3 sprays at 15–20 day intervals during flowering/fruiting",
      "Soil application / fertigation: 2–3 kg per acre per season",
    ],
    directions:
      "Dissolve fully in clean water before spraying. Apply during the cooler parts of the day (early morning or evening).",
    compatibility: "Generally compatible with commonly used fertilizers and pesticides — always jar-test before tank-mixing.",
    brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "groxal",
    name: "GroXal",
    category: "Liquid Fertilizer",
    fertilizerType: "Liquid Fertilizer (suspension)",
    packs: ["500 ml", "1 L"],
    packing: "1 Ltr. & 500 ml.",
    grade: "NPK 11:11:8",
    desc: "NPK 11:11:8 fortified with Zinc & Boron — complete nutrition with high uptake and coverage.",
    longDesc:
      "Crysenta GroXal is an NPK 11:11:8 fortified Zinc & Boron suspension, formulated with fully EDTA-chelated micronutrients for excellent leaf coverage, adhesion, and nutrient penetration.",
    image: "/products/GROXAL.png",
    specs: [
      { label: "Total nitrogen, min", value: "11.0%" },
      { label: "Urea nitrogen, min", value: "7.2%" },
      { label: "Ammonical nitrogen, max", value: "3.0%" },
      { label: "Water soluble phosphorus (as P₂O₅), min", value: "11.0%" },
      { label: "Water soluble potassium (as K₂O), min", value: "8.0%" },
      { label: "Zinc (as Zn-EDTA), min", value: "0.7%" },
      { label: "Boron (as B)", value: "0.5–0.7%" },
      { label: "pH (1% solution) at 20°C", value: "7.0–8.0" },
    ],
    benefits: [
      "High and well-balanced macro & micro nutrient supply matching the demand of crops during critical growth stages",
      "Super chelation reduces the water hardness of the spray solution",
      "Fully EDTA-chelated cationic micronutrients",
      "Excellent coverage of leaves, good adhesiveness, and regulates pH of the spray solution",
      "Ensures excellent nutrient penetration",
      "Compatible with most commonly used pesticides",
      "Boosts and retains flowering, reduces flower dropping",
      "Helps in breaking dormancy (e.g. mango)",
      "Used after harvest, it helps overcome alternate bearing",
    ],
    majorCrops: [
      "Field crops",
      "Vegetable crops",
      "Pulse crops",
      "Oilseeds crop",
      "Fodder crops",
      "Fruit crops",
      "Spices crop",
      "Flower crops",
      "Medicinal crops",
    ],
    doseNotes: [
      "Field crops, vegetable crops, pulse crops, oilseeds crop & fodder crops: 500–750 ml/acre",
      "Fruit crops, spices crop & flower crops: 5–7 ml/Ltr water",
    ],
    directions: "Shake the container well before opening and use. Spray equipment should be clean.",
    brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "calciboz",
    name: "CalciBoZ",
    category: "Liquid Fertilizer",
    fertilizerType: "Liquid Fertilizer — Fortified Calcium Suspension",
    packs: ["500 ml", "1 L"],
    packing: "1 Ltr. & 500 ml.",
    grade: "Ca-Zn-B",
    desc: "Fortified calcium suspension with Zinc & Boron for stronger cell walls and fruit firmness.",
    longDesc:
      "Crysenta CalciBoZ is an advanced flowable suspension concentrate calcium solution loaded with Zinc & Boron, offering higher elemental efficiency and better uptake capacity than traditional calcium products.",
    image: "/products/CALCIBOZ.png",
    specs: [
      { label: "Calcium (as Ca), min", value: "21.0%" },
      { label: "Boron (as B), min", value: "0.1%" },
      { label: "Zinc (as Zn), min", value: "1.5%" },
      { label: "Specific gravity", value: "1.74–1.76" },
      { label: "pH", value: "8.5–10.0" },
    ],
    benefits: [
      "High load formulation enables low application rates compared to traditional calcium products",
      "Improves cell division and elongation",
      "Helps plants build cell wall structure and strength",
      "Stimulates plant defense systems against abiotic stress conditions",
      "Aids translocation of carbohydrates and nutrients within the plant",
      "Improves the thickness of the outer skin of produce and enhances keeping quality",
      "Improves overall quality & yield across a majority of crops",
    ],
    doseTable: [
      { crop: "Apple", stage: "Fruit set stage / Fruit development stage", dose: "1–1.5 L/Hectare" },
      { crop: "Citrus", stage: "Fruit set stage / Fruit development", dose: "1–1.5 L/Hectare" },
      { crop: "Pomegranate", stage: "Fruit set stage / Fruit development stage", dose: "1–1.5 L/Hectare" },
      { crop: "Grapes", stage: "4mm & 8mm berry size, at veraison stage / 10 days after veraison stage", dose: "1–1.5 L/Hectare" },
      { crop: "Tomato", stage: "Fruit set stage (45–50 DAT), repeat every 15–20 days", dose: "1 L/Hectare" },
      { crop: "Chilli", stage: "Fruit set stage (45–50 DAT), repeat every 15–20 days", dose: "1 L/Hectare" },
      { crop: "Potato", stage: "After week of emergence", dose: "1 L/Hectare" },
      { crop: "Banana", stage: "At bunch set / bunch development, 15 days before harvest", dose: "1–1.5 L/Hectare" },
      { crop: "Tea / Coffee", stage: "Before flowering, 8–10 days before harvest", dose: "1–1.5 L/Hectare" },
      { crop: "Other crops (cereals, pulses, oilseeds, F&V)", stage: "Fruit/pod/grain setting & development stage", dose: "1–1.5 L/Hectare" },
    ],
    directions: "Shake the container well before opening and use. Spray equipment should be clean.",
    compatibility:
      "Physically and chemically compatible with a wide range of agrochemical products. Contact your local Crysenta representative for advice on product compatibility.",
      brochure: "/brochures/Crysenta International Brochure.pdf",
  },
  {
    slug: "deltrol",
    name: "Deltrol",
    category: "Liquid Fertilizer",
    fertilizerType: "Liquid Fertilizer (suspension)",
    packs: ["500 ml", "1 L"],
    packing: "1 Ltr. & 500 ml.",
    grade: "NPK 6:0:18",
    desc: "NPK 6:0:18 fortified with Calcium, Magnesium & Boron for high-K crops and fruit quality.",
    longDesc:
      "Crysenta Deltrol is an NPK 6:0:18 fortified Calcium, Magnesium & Boron suspension, formulated for specialty crops with high potassium requirements and for improving fruit retention and quality.",
    image: "/products/DELTROL.png",
    specs: [
      { label: "Total nitrogen, min", value: "6.0%" },
      { label: "Nitrate nitrogen (as N), min", value: "5.8%" },
      { label: "Water soluble potassium (as K₂O), min", value: "18.0%" },
      { label: "Water soluble calcium (as CaO), min", value: "5.0%" },
      { label: "Water soluble magnesium (as MgO), min", value: "2.0%" },
      { label: "Boron (as B)", value: "0.5–0.8%" },
      { label: "pH (1% solution) at 20°C", value: "8–9" },
    ],
    benefits: [
      "High potassium content improves inner and outer quality of specialty crops with high K-requirements",
      "Optimal wetting and rain fastness",
      "Super chelation improves the quality of the spray solution",
      "Nutrients readily available to plants",
      "Fully chelated cationic micronutrients",
      "Improves resistance of flowers to frost",
      "Improves sugar content of the fruits",
      "Improves disease resistance",
      "Particularly indicated for sandy and K-fixating soils and during dry spells",
      "Compatible with most commonly used pesticides",
      "Helps in fruit retention and improves fruit keeping quality (shape, shine & colour) with uniform fruit size top to bottom of the plant",
    ],
    majorCrops: [
      "Field crops",
      "Vegetable crops",
      "Pulse crops",
      "Oilseeds crop",
      "Fruit crops",
      "Spices crop",
      "Flower crops",
    ],
    doseNotes: [
      "Field crops, vegetable crops, pulse crops & oilseeds crop: 500–750 ml/acre",
      "Fruit crops, spices crop & flower crops: 5–7 ml/Ltr water",
    ],
    directions: "Shake the container well before opening and use. Spray equipment should be clean.",
    brochure: "/brochures/Crysenta International Brochure.pdf",
  },
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );
}