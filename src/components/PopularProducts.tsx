"use client";

import React, { useState } from "react";
import { Star, ShoppingBag, Heart, Eye, ArrowRight } from "lucide-react";
import { POPULAR_PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const PopularProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, showToast } = useCart();

  const tabs = [
    { id: "all", label: "All Products" },
    { id: "fruits", label: "Fruits" },
    { id: "vegetables", label: "Vegetables" },
    { id: "dairy", label: "Dairy" },
    { id: "meat", label: "Meat" },
    { id: "beverages", label: "Drinks & Juices" },
  ];

  const filteredProducts = activeTab === "all"
    ? POPULAR_PRODUCTS
    : POPULAR_PRODUCTS.filter((p) => p.categoryId === activeTab);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
            MOST WANTED ITEMS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Customers' Favorites
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2 font-normal">
            Top-rated products ordered continuously by our 10,000+ satisfied households.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div
                  className="relative w-full h-52 rounded-2xl overflow-hidden bg-gray-50 mb-4 cursor-pointer"
                  onClick={() => setQuickViewProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.discountBadge && (
                      <span className="bg-amber-500 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-sm">
                        {product.discountBadge}
                      </span>
                    )}
                  </div>

                  {/* Wishlist button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
                      inWishlist
                        ? "bg-rose-50 text-rose-500 shadow-md"
                        : "bg-white/80 text-gray-400 hover:text-rose-500 hover:bg-white"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? "fill-rose-500" : ""}`} />
                  </button>

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                      {product.category}
                    </span>
                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition-colors cursor-pointer line-clamp-2"
                    >
                      {product.name}
                    </h3>
                    <span className="text-xs text-gray-500 block mt-1 font-medium">
                      {product.unit}
                    </span>

                    <div className="flex items-center gap-1.5 mt-2.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                      <span className="text-[11px] text-gray-400">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-lg font-extrabold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through ml-1.5 font-medium">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Products button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => showToast("Loading 150+ more organic grocery products...")}
            className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold px-8 py-3.5 rounded-full border border-emerald-200/80 transition-all text-sm shadow-sm"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
