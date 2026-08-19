"use client";

import React from "react";
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
import HeroSlider from "@/components/heroSlider/Hero";

export default function Home() {
  return (
    <main className="grow">
      {/* 3. Hero Section */}

      <HeroSlider />

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
  );
}
