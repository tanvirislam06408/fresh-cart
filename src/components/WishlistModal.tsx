"use client";

import React from "react";
import { X, Heart, Trash2, ShoppingBag } from "lucide-react";
import { FEATURED_PRODUCTS, POPULAR_PRODUCTS, DEAL_PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const WishlistModal: React.FC = () => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart, setQuickViewProduct } = useCart();

  if (!isWishlistOpen) return null;

  const allItems = [...FEATURED_PRODUCTS, ...DEAL_PRODUCTS, ...POPULAR_PRODUCTS];
  const wishlistItems = Array.from(new Map(allItems.map((i) => [i.id, i])).values()).filter(
    (item) => wishlist.includes(item.id)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#FAF9F6]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                <Heart className="w-4 h-4 fill-rose-600" />
              </div>
              <h2 className="text-xl font-extrabold text-gray-900">Saved Wishlist</h2>
              <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                {wishlistItems.length} items
              </span>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-3 py-12">
                <Heart className="w-12 h-12 text-gray-300 stroke-1" />
                <p className="text-base font-bold text-gray-700">No items saved yet</p>
                <p className="text-xs text-gray-500 max-w-xs">
                  Tap the heart icon on any product to save it to your wishlist for later.
                </p>
              </div>
            ) : (
              wishlistItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-3 bg-[#FAF9F6] rounded-2xl border border-gray-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-white cursor-pointer"
                    onClick={() => {
                      setQuickViewProduct(product);
                      setIsWishlistOpen(false);
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-gray-900 truncate">{product.name}</h4>
                    <span className="text-xs text-gray-500">{product.unit}</span>
                    <div className="text-sm font-extrabold text-emerald-700 mt-0.5">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl text-xs font-bold shadow"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-2 text-gray-400 hover:text-rose-500"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
