import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { getUserSession } from "@/lib/core/session";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard | FreshCart Organic Supermarket",
  description: "Production-ready user dashboard overview for FreshCart grocery orders, cart, analytics, and profile summary.",
};

export default async function DashboardPage() {
  const sessionUser = await getUserSession();

  const user = sessionUser
    ? {
        id: sessionUser.id,
        name: sessionUser.name,
        email: sessionUser.email,
        emailVerified: sessionUser.emailVerified ?? false,
        image: sessionUser.image,
        role: (sessionUser as { role?: string }).role || "user",
        acceptTerms: (sessionUser as { acceptTerms?: boolean }).acceptTerms ?? false,
        createdAt: sessionUser.createdAt ? String(sessionUser.createdAt) : null,
        updatedAt: sessionUser.updatedAt ? String(sessionUser.updatedAt) : null,
      }
    : null;

  return <DashboardLayout serverUser={user} />;
}
