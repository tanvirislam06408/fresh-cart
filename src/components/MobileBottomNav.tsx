"use client";

import React from "react";
import { Home, Store, Heart, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const MobileBottomNav: React.FC = () => {
  const { totalItems, wishlist, setIsCartOpen, setIsWishlistOpen, showToast } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/80 md:hidden px-4 py-2 shadow-lg">
      <div className="flex items-center justify-around text-gray-600 text-[10px] font-bold">
        <a
          href="#"
          className="flex flex-col items-center gap-1 text-emerald-600 hover:text-emerald-700"
        >
          <Home className="w-5 h-5 stroke-[2.2]" />
          <span>Home</span>
        </a>

        <a
          href="#products"
          className="flex flex-col items-center gap-1 hover:text-emerald-600"
        >
          <Store className="w-5 h-5 stroke-[2]" />
          <span>Shop</span>
        </a>

        <button
          onClick={() => setIsWishlistOpen(true)}
          className="flex flex-col items-center gap-1 hover:text-emerald-600 relative"
        >
          <Heart className="w-5 h-5 stroke-[2]" />
          <span>Wishlist</span>
          {wishlist.length > 0 && (
            <span className="absolute -top-1 right-2 bg-rose-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {wishlist.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 text-emerald-700 hover:text-emerald-800 relative"
        >
          <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
          <span>Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-1 right-2 bg-emerald-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-extrabold shadow">
              {totalItems}
            </span>
          )}
        </button>

        <button
          onClick={() => showToast("Account drawer opened")}
          className="flex flex-col items-center gap-1 hover:text-emerald-600"
        >
          <User className="w-5 h-5 stroke-[2]" />
          <span>Account</span>
        </button>
      </div>
    </div>
  );
};
