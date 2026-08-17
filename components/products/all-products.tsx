"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutGrid, Droplets, FlaskConical, Waves } from "lucide-react";

const filterIcons: Record<string, typeof LayoutGrid> = {
  "All Products": LayoutGrid,
  "Liquid Fertilizer": Droplets,
  Micronutrient: FlaskConical,
  "Water Soluble Fertilizer": Waves,
};

const filters = [
  "All Products",
  "Liquid Fertilizer",
  "Micronutrient",
  "Water Soluble Fertilizer",
];

const products = [
  {
    name: "NPK 00:52:34",
    category: "Water Soluble Fertilizer",
    packs: ["1 kg"],
    grade: "00-52-34",
    desc: "High-phosphorus, high-potassium blend ideal for flowering and fruiting stages.",
    image: "/products/00-52-34.png",
  },
  {
    name: "NPK 19:19:19",
    category: "Water Soluble Fertilizer",
    packs: ["1 kg"],
    grade: "19-19-19",
    desc: "Fully balanced NPK blend suited for general crop nutrition at every stage.",
    image: "/products/19-19-19.png",
  },
  {
    name: "NPK 12:61:00",
    category: "Water Soluble Fertilizer",
    packs: ["1 kg"],
    grade: "12-61-00",
    desc: "High-phosphorus formula for early root development and vigorous growth.",
    image: "/products/12-61-00.png",
  },
  {
    name: "NPK 13:00:45",
    category: "Water Soluble Fertilizer",
    packs: ["1 kg"],
    grade: "13-00-45",
    desc: "Potassium-rich formula strengthening fruit quality, size, and shelf life.",
    image: "/products/13-00-45.png",
  },
  {
    name: "NPK 13:40:13",
    category: "Water Soluble Fertilizer",
    packs: ["1 kg"],
    grade: "13-40-13",
    desc: "Balanced nutrition tailored for transplanting and establishment stages.",
    image: "/products/13-40-13.png",
  },
  {
    name: "NPK 00:00:50",
    category: "Water Soluble Fertilizer",
    packs: ["1 kg"],
    grade: "00-00-50",
    desc: "Pure potassium formula improving stress tolerance and crop quality.",
    image: "/products/00-00-50.png",
  },
  {
    name: "Calcium Nitrate",
    category: "Water Soluble Fertilizer",
    packs: ["1 kg"],
    grade: "CaNO3",
    desc: "Readily available calcium and nitrogen, reducing disorders in crops.",
    image: "/products/Calcium-Nitrate.png",
  },
  {
    name: "Boron 20",
    category: "Micronutrient",
    packs: ["500 ml"],
    grade: "B 20%",
    desc: "Corrects boron deficiency, supporting flowering and fruit set.",
    image: "/products/Boron-20.png",
  },
  {
    name: "Calciboz",
    category: "Liquid Fertilizer",
    packs: ["500 ml", "1 L"],
    grade: "Ca-B",
    desc: "Liquid calcium-boron combination for improved fruit firmness.",
    image: "/products/CALCIBOZ.png",
  },
  {
    name: "Deltrol",
    category: "Liquid Fertilizer",
    packs: ["500 ml", "1 L"],
    grade: "Liquid",
    desc: "Specialty formula supporting consistent growth across field conditions.",
    image: "/products/DELTROL.png",
  },
  {
    name: "Groxal",
    category: "Liquid Fertilizer",
    packs: ["500 ml", "1 L"],
    grade: "Liquid",
    desc: "Fast-absorbing nutrition for rapid correction of deficiency symptoms.",
    image: "/products/GROXAL.png",
  },
];

const categoryPill: Record<string, string> = {
  "Water Soluble Fertilizer": "border-blue-200 text-blue-700",
  Micronutrient: "border-amber-200 text-amber-700",
  "Liquid Fertilizer": "border-[#6d8333]/30 text-[#5c7029]",
};

type Product = (typeof products)[number];

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group gap-0 overflow-hidden rounded-3xl bg-white p-0">
      {/* IMAGE PANEL — flat product-shade background */}
      <div className="relative h-56 bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* INFO */}
      <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-neutral-900">{product.name}</h3>

        <div className="mt-2 flex flex-wrap gap-2">
          <span
            className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${categoryPill[product.category] ?? "border-neutral-200 text-neutral-600"}`}
          >
            {product.grade}
          </span>

          {/* pack size pills — selectable when more than one option */}
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

        <button className="mt-5 flex w-full items-center justify-between rounded-full border border-stone-200 py-2.5 pr-2.5 pl-5 text-sm font-medium text-neutral-800 transition-colors group-hover:border-[#6d8333] cursor-pointer">
          View Detail
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-[#6d8333] group-hover:text-white">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </button>
      </CardContent>
    </Card>
  );
}

export default function AllProducts() {
  const [activeFilter, setActiveFilter] = useState("All Products");

  const filteredProducts =
    activeFilter === "All Products"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-[#E7E5DE]">
      <div className="bg-[#dedbd3] rounded-t-4xl border-t-2 border-[#6d8333]">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
          <div className="relative w-fit">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              All Products
            </h2>
            <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-[#6d8333]" />
          </div>

          {/* filter pills */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const Icon = filterIcons[filter] ?? LayoutGrid;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3.5 text-sm font-medium transition-all cursor-pointer sm:rounded-full sm:px-5 sm:py-2.5 ${
                    isActive
                      ? "border-[#6d8333] bg-[#6d8333] text-white shadow-md shadow-[#6d8333]/25"
                      : "border-stone-300 bg-[#E9E8E4] text-neutral-700 hover:border-[#6d8333] hover:text-[#5c7029]"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 sm:hidden ${isActive ? "text-white" : "text-[#6d8333]"}`}
                  />
                  <span className="text-center leading-tight">{filter}</span>
                </button>
              );
            })}
          </div>

          {/* product grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="mt-10 text-sm text-neutral-500">
              No products found in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
