"use client";

import React, { useState } from "react";
import { Sidebar, NavTab } from "./Sidebar";
import { TopHeader } from "./TopHeader";
import { StatCard } from "./StatCard";
import { STATS_DATA } from "./mockData";
import { AnalyticsSection } from "./AnalyticsSection";
import { RecentOrders } from "./RecentOrders";
import { CartPreview } from "./CartPreview";
import { ProfileSummary, UserSessionData } from "./ProfileSummary";
import { RecentActivity } from "./RecentActivity";

interface DashboardLayoutProps {
  serverUser?: UserSessionData | null;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  serverUser,
}) => {
  const [activeTab, setActiveTab] = useState<NavTab>("dashboard");
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // Map active tab to human readable title
  const tabTitles: Record<NavTab, string> = {
    dashboard: "Dashboard Overview",
    orders: "My Orders",
    cart: "Cart Overview",
    profile: "User Profile",
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-gray-900 flex font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* 1. Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Right Content Area */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          isCollapsed ? "lg:pl-20" : "lg:pl-64"
        }`}
      >
        {/* 2. Top Header Navigation */}
        <TopHeader
          pageTitle={tabTitles[activeTab]}
          onMobileMenuToggle={() => setMobileOpen(true)}
          user={serverUser}
        />

        {/* 3. Main Dashboard Content Body */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-8 grow max-w-7xl w-full mx-auto">
          {/* STATS OVERVIEW CARDS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS_DATA.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </section>

          {/* TAB DRIVEN VIEW RENDERING */}
          {activeTab === "dashboard" && (
            <>
              {/* ANALYTICS SECTION */}
              <section>
                <AnalyticsSection />
              </section>

              {/* RECENT ORDERS TABLE */}
              <section>
                <RecentOrders />
              </section>

              {/* THREE COLUMN GRID: CART PREVIEW, PROFILE SUMMARY, RECENT ACTIVITY */}
              {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-4">
                  <CartPreview />
                </div>

                <div className="lg:col-span-4">
                  <ProfileSummary user={serverUser} />
                </div>

                <div className="lg:col-span-4">
                  <RecentActivity />
                </div>
              </section> */}
            </>
          )}

          {activeTab === "orders" && (
            <section className="space-y-6 animate-in fade-in duration-200">
              <RecentOrders />
            </section>
          )}

          {activeTab === "cart" && (
            <section className="max-w-2xl mx-auto animate-in fade-in duration-200">
              <CartPreview />
            </section>
          )}

          {activeTab === "profile" && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
              <div className="lg:col-span-6">
                <ProfileSummary user={serverUser} />
              </div>
              <div className="lg:col-span-6">
                <RecentActivity />
              </div>
            </section>
          )}
        </main>

        {/* Dashboard Footer */}
        <footer className="border-t border-gray-100 bg-white py-4 px-6 text-center text-xs text-gray-500 font-medium">
          <p>
            © 2026 FreshCart Organic Supermarket. Production Quality User
            Dashboard.
          </p>
        </footer>
      </div>
    </div>
  );
};
