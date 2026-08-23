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

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group h-full gap-0 overflow-hidden rounded-3xl bg-[#E9E8E4] p-0">
      {/* IMAGE PANEL — flat product-shade background */}
      <div className="relative m-2 h-56 rounded-2xl bg-[#dedbd3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* INFO */}
      <CardContent className="flex h-full flex-1 flex-col justify-between p-5 sm:p-6">
        <h3 className="text-lg font-bold text-neutral-900">{product.name}</h3>

        <div className="mt-2 flex flex-wrap gap-2">
          <span
            className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${categoryPill[product.category] ?? "border-neutral-200 text-neutral-600"}`}
          >
            {product.grade}
          </span>

          {/* pack size pills */}
          {product.packs.map((pack) => (
            <span
              key={pack}
              className="rounded-lg border border-neutral-200 px-2.5 py-1 text-[11px] font-semibold text-neutral-600 transition-colors"
            >
              {pack}
            </span>
          ))}
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-500">
          {product.desc}
        </p>

        <Link
          href={`/products/${product.slug}`}
          className="mt-4 flex w-full items-center justify-between rounded-full border border-neutral-200 bg-white py-2.5 pl-5 pr-2.5 text-sm font-medium text-neutral-800 transition-colors group-hover:border-[#6d8333] cursor-pointer"
        >
          View Detail
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-black transition-colors group-hover:bg-[#6d8333] group-hover:text-white">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}