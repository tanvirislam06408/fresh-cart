import React from "react";
import { getUserSession } from "@/lib/core/session";
import { ProfileClient, UserData } from "./ProfileClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile | FreshCart Organic Supermarket",
  description:
    "View and manage your FreshCart account details, security settings, and membership preferences.",
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
        acceptTerms:
          (userSession as { acceptTerms?: boolean }).acceptTerms ?? false,
        createdAt: userSession.createdAt ? String(userSession.createdAt) : null,
        updatedAt: userSession.updatedAt ? String(userSession.updatedAt) : null,
      }
    : null;

  return <ProfileClient user={user} />;
};

export default ProfilePage;
