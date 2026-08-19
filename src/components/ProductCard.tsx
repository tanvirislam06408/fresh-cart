"use client";

import React from "react";
import { Heart, Star, ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = "" }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useCart();
  const inWishlist = isInWishlist(product.id);

  return (
    <div
      className={`group relative bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full select-none w-full ${className}`}
    >
      {/* Upper Content: Image + Details */}
      <div className="flex flex-col flex-1">
        {/* Image Container */}
        <div
          className="relative w-full h-52 rounded-2xl overflow-hidden bg-gray-50 mb-4 cursor-pointer shrink-0"
          onClick={() => setQuickViewProduct(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
            loading="lazy"
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            {product.discountBadge && (
              <span className="bg-amber-500 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-sm">
                {product.discountBadge}
              </span>
            )}
            {product.isOrganic && (
              <span className="bg-emerald-600 text-white font-semibold text-[10px] uppercase px-2 py-0.5 rounded-full shadow-sm">
                Organic
              </span>
            )}
          </div>

          {/* Wishlist Button */}
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
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-4 h-4 ${inWishlist ? "fill-rose-500" : ""}`} />
          </button>

          {/* Quick View Button on hover overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5" /> Quick View
            </span>
          </div>
        </div>

        {/* Category & Title */}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
              {product.category}
            </span>
            <h3
              onClick={() => setQuickViewProduct(product)}
              className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition-colors cursor-pointer line-clamp-2 min-h-[2.75rem]"
              title={product.name}
            >
              {product.name}
            </h3>
            <span className="text-xs text-gray-500 block mt-1 font-medium">
              {product.unit}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2.5 mb-2">
            <div className="flex text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-xs font-bold text-gray-800">
              {product.rating}
            </span>
            <span className="text-[11px] text-gray-400 font-medium">
              ({product.reviewsCount})
            </span>
          </div>
        </div>
      </div>

      {/* Price & Add to Cart (Pinned to Bottom) */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
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
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
          Add
        </button>
      </div>
    </div>
  );
};
