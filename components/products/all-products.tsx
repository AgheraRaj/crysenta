"use client";

import { useState } from "react";
import { LayoutGrid, Droplets, FlaskConical, Waves } from "lucide-react";
import { filters, products } from "@/lib/products";
import ProductCard from "@/components/products/product-card";

const filterIcons: Record<string, typeof LayoutGrid> = {
  "All Products": LayoutGrid,
  "Liquid Fertilizer": Droplets,
  Micronutrient: FlaskConical,
  "Water Soluble Fertilizer": Waves,
};

export default function AllProducts() {
  const [activeFilter, setActiveFilter] = useState("All Products");

  const filteredProducts =
    activeFilter === "All Products"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
      <section className="bg-[#dedbd3]">
        <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
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
                      : "border-stone-300 bg-white text-neutral-700 hover:border-[#6d8333] hover:text-[#5c7029]"
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
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="mt-10 text-sm text-neutral-500">
              No products found in this category yet.
            </p>
          )}
        </div>
    </section>
  );
}