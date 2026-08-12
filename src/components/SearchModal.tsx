"use client";

import React, { useState } from "react";
import { Search, X, ShoppingBag, ArrowRight } from "lucide-react";
import { FEATURED_PRODUCTS, POPULAR_PRODUCTS, DEAL_PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, addToCart, setQuickViewProduct } = useCart();
  const [query, setQuery] = useState("");

  if (!isSearchOpen) return null;

  const allItems = [...FEATURED_PRODUCTS, ...DEAL_PRODUCTS, ...POPULAR_PRODUCTS];
  const uniqueItems = Array.from(new Map(allItems.map((item) => [item.id, item])).values());

  const results = query.trim() === ""
    ? uniqueItems.slice(0, 4)
    : uniqueItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-16 px-4 animate-in fade-in duration-150">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl z-10 border border-gray-100 space-y-4">
        {/* Search Bar Input */}
        <div className="relative flex items-center">
          <Search className="w-6 h-6 text-gray-400 absolute left-4" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fresh apples, organic broccoli, milk, steak..."
            className="w-full pl-13 pr-12 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-3 p-2 text-gray-400 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-3 block">
            {query.trim() === "" ? "Trending Searches" : `Results (${results.length})`}
          </span>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setQuickViewProduct(product);
                  setIsSearchOpen(false);
                }}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF9F6] hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-xl object-cover bg-white"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{product.name}</h4>
                    <span className="text-xs text-emerald-700 font-semibold">
                      {product.category} • ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    setIsSearchOpen(false);
                  }}
                  className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow hover:bg-emerald-700"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
