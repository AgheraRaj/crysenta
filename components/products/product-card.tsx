import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/products";

export const categoryPill: Record<string, string> = {
    "Water Soluble Fertilizer": "border-blue-700 text-blue-700",
    Micronutrient: "border-amber-700 text-amber-700",
    "Liquid Fertilizer": "border-[#6d8333] text-[#5c7029]",
};

const categoryDot: Record<string, string> = {
    "Water Soluble Fertilizer": "bg-blue-600",
    "Micronutrient": "bg-amber-600",
    "Liquid Fertilizer": "bg-[#6d8333]",
};

const categoryText: Record<string, string> = {
    "Water Soluble Fertilizer": "text-blue-600",
    "Micronutrient": "text-amber-600",
    "Liquid Fertilizer": "text-[#6d8333]",
};

/** Soft, muted background + CTA tones — one per product, echoing its packet color. */
const accents = {
    green: {
        tint: "from-[#edf5e8] to-[#dcebd4]",
        fillFrom: "from-[#3f9b2f]",
        fillTo: "to-[#278020]",
    },

    blue: {
        tint: "from-[#e8f3f9] to-[#d5e9f3]",
        fillFrom: "from-[#238bb5]",
        fillTo: "to-[#08739d]",
    },

    amber: {
        tint: "from-[#f8f0df] to-[#eee0bd]",
        fillFrom: "from-[#b98a22]",
        fillTo: "to-[#936a12]",
    },

    rose: {
        tint: "from-[#f8e9ef] to-[#f0d6df]",
        fillFrom: "from-[#a84470]",
        fillTo: "to-[#853354]",
    },

    red: {
        tint: "from-[#f9e8e3] to-[#f0d2c8]",
        fillFrom: "from-[#c83d20]",
        fillTo: "to-[#a52c15]",
    },

    teal: {
        tint: "from-[#e7f5f1] to-[#d3ebe5]",
        fillFrom: "from-[#4daea0]",
        fillTo: "to-[#359487]",
    },

    pink: {
        tint: "from-[#fcebea] to-[#f6d6d4]",
        fillFrom: "from-[#e88482]",
        fillTo: "to-[#d96563]",
    },

    sky: {
        tint: "from-[#eaf5fb] to-[#d8ebf5]",
        fillFrom: "from-[#55a8d1]",
        fillTo: "to-[#358ab8]",
    },
    brown: {
        tint: "from-[#f4e9dc] to-[#e8d5c0]",
        fillFrom: "from-[#9a4f0b]",
        fillTo: "to-[#743905]",
    },
} as const;

type AccentKey = keyof typeof accents;

/** Maps each product slug to the muted family echoing its actual packet color. */
const productAccent: Record<string, AccentKey> = {
    "npk-19-19-19": "brown",
    "npk-00-52-34": "green",
    "npk-00-00-50": "rose",
    "npk-12-61-00": "blue",
    "npk-13-40-13": "amber",
    "npk-13-00-45": "teal",
    "calcium-nitrate": "red",
    "boron-20": "pink",
    groxal: "green",
    calciboz: "sky",
    deltrol: "green",
};

const categoryFallback: Record<string, AccentKey> = {
    "Water Soluble Fertilizer": "blue",
    Micronutrient: "amber",
    "Liquid Fertilizer": "green",
};

function getAccent(product: Product) {
    const key = productAccent[product.slug] ?? categoryFallback[product.category] ?? "green";
    return accents[key];
}

export default function ProductCard({ product }: { product: Product }) {
    const accent = getAccent(product);

    return (
        <Card className="group h-full gap-0 overflow-hidden rounded-2xl bg-white p-0">
            {/* IMAGE PANEL — premium gradient backdrop, tinted per product */}
            <div className={`relative m-2 h-56 overflow-hidden rounded-xl bg-gradient-to-b ${accent.tint}`}>
                {/* soft radial glow on hover */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" />

                {/* grade badge, floating */}
                <span className="absolute top-3 left-3 z-10 rounded-full border border-white/60 bg-white/80 px-2.5 py-1 text-[10px] font-bold tracking-wide text-neutral-700 backdrop-blur-sm">
                    {product.grade}
                </span>

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="relative object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                />
            </div>

            {/* INFO */}
            <CardContent className="flex h-full flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${categoryDot[product.category] ?? "bg-neutral-400"}`} />
                    <span className={`text-[11px] font-semibold tracking-[0.1em] ${categoryText[product.category] ?? "text-neutral-400"} uppercase`}>
                        {product.category}
                    </span>
                </div>

                <h3 className="mt-2 text-xl leading-tight font-bold tracking-tight text-neutral-900">
                    {product.name}
                </h3>

                {/* pack size pills */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.packs.map((pack) => (
                        <span
                            key={pack}
                            className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-semibold text-neutral-600"
                        >
                            {pack}
                        </span>
                    ))}
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-500">
                    {product.desc}
                </p>

                <div className="pt-4">
                    <Link
                        href={`/products/${product.slug}`}
                        className="relative flex w-full items-center justify-between overflow-hidden rounded-full border border-neutral-200 py-2.5 pr-2.5 pl-5 text-sm font-semibold text-neutral-800 transition-colors duration-300 group-hover:border-transparent group-hover:text-white"
                    >
                        {/* sliding fill — colored per product */}
                        <span
                            className={`absolute inset-0 -translate-x-full bg-gradient-to-r ${accent.fillFrom} ${accent.fillTo} transition-transform duration-400 ease-out group-hover:translate-x-0`}
                        />

                        <span className="relative">View Detail</span>
                        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/20 group-hover:text-white">
                            <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}