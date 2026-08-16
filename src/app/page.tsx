"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PromoBanner } from "@/components/PromoBanner";
import { DealsSection } from "@/components/DealsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { OrganicHighlight } from "@/components/OrganicHighlight";
import { PopularProducts } from "@/components/PopularProducts";
import { DeliverySteps } from "@/components/DeliverySteps";
import { CustomerReviews } from "@/components/CustomerReviews";
import { AppPromotion } from "@/components/AppPromotion";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";
import { SearchModal } from "@/components/SearchModal";
import { WishlistModal } from "@/components/WishlistModal";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ToastNotification } from "@/components/ToastNotification";
import  { Toaster } from 'react-hot-toast';
import HeroSlider from "@/components/heroSlider/Hero";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-900 font-sans">
        {/* 1. Announcement Bar */}
        <AnnouncementBar />

        {/* 2. Main Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 3. Hero Section */}
        
          <HeroSlider/>

          {/* 4. Category Section */}
          <CategorySection />

          {/* 5. Featured Products */}
          <FeaturedProducts />

          {/* 6. Promotional Banner */}
          <PromoBanner />

          {/* 7. Today's Deals */}
          <DealsSection />

          {/* 8. Why Choose FreshCart */}
          <WhyChooseUs />

          {/* 9. Organic / Freshness Highlight */}
          <OrganicHighlight />

          {/* 10. Popular Products */}
          <PopularProducts />

          {/* 11. Delivery Experience */}
          <DeliverySteps />

          {/* 12. Customer Reviews */}
          <CustomerReviews />

          {/* 13. App Promotion */}
          <AppPromotion />

          {/* 14. Newsletter Section */}
          <NewsletterSection />
        </main>

        {/* 15. Footer */}
        <Footer />

        {/* Interactive Drawers & Modals */}
        <CartDrawer />
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <QuickViewModal />
        <SearchModal />
        <WishlistModal />
        <MobileBottomNav />
        <ToastNotification />
      </div>
    </CartProvider>
  );
}
