"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";
import { SearchModal } from "@/components/SearchModal";
import { WishlistModal } from "@/components/WishlistModal";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ToastNotification } from "@/components/ToastNotification";
import { Toaster } from "react-hot-toast";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith("/dashboard");

  return (
    <div
      className={
        isDashboardRoute
          ? "min-h-screen"
          : "min-h-screen flex flex-col font-sans"
      }
    >
      {!isDashboardRoute && <AnnouncementBar />}
      {!isDashboardRoute && <Navbar />}
      {children}
      {!isDashboardRoute && <Footer />}
      <CartDrawer />
      <Toaster position="top-center" reverseOrder={false} />
      <QuickViewModal />
      <SearchModal />
      <WishlistModal />
      <MobileBottomNav />
      <ToastNotification />
    </div>
  );
}
