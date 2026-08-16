import React from "react";
import { getUserSession } from "@/lib/core/session";
import { ProfileClient, UserData } from "./ProfileClient";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastNotification } from "@/components/ToastNotification";
import { CartDrawer } from "@/components/CartDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";
import { SearchModal } from "@/components/SearchModal";
import { WishlistModal } from "@/components/WishlistModal";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile | FreshCart Organic Supermarket",
  description: "View and manage your FreshCart account details, security settings, and membership preferences.",
};

const ProfilePage = async () => {
  const userSession = await getUserSession();

  // Format user object safely for client component
  const user: UserData | null = userSession
    ? {
        id: userSession.id,
        name: userSession.name,
        email: userSession.email,
        emailVerified: userSession.emailVerified ?? false,
        image: userSession.image,
        role: (userSession as { role?: string }).role || "user",
        acceptTerms: (userSession as { acceptTerms?: boolean }).acceptTerms ?? false,
        createdAt: userSession.createdAt ? String(userSession.createdAt) : null,
        updatedAt: userSession.updatedAt ? String(userSession.updatedAt) : null,
      }
    : null;

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] selection:bg-emerald-200 selection:text-emerald-900 font-sans ">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Global Navigation Bar */}
        {/* <Navbar /> */}

        {/* Main Profile Client Section */}
        <ProfileClient user={user} />

        {/* Global Footer */}
        <Footer />

        {/* Drawers & Modals */}
        <CartDrawer />
        <QuickViewModal />
        <SearchModal />
        <WishlistModal />
        <MobileBottomNav />
        <ToastNotification />
      </div>
    </CartProvider>
  );
};

export default ProfilePage;