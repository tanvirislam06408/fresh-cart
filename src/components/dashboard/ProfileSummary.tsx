"use client";

import React, { useState } from "react";
import { USER_PROFILE_DATA } from "./mockData";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  Edit3,
  Shield,
  Copy,
  Check,
  XCircle,
  FileCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export interface UserSessionData {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  role?: string | null;
  acceptTerms?: boolean | null;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
}

interface ProfileSummaryProps {
  user?: UserSessionData | null;
}

export const ProfileSummary: React.FC<ProfileSummaryProps> = ({ user: serverUser }) => {
  const { data: session } = authClient.useSession();
  const [imgError, setImgError] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  // Active user data prioritized: server user -> client session -> mock default fallback
  const clientUser = session?.user;
  
  const name = serverUser?.name || clientUser?.name || USER_PROFILE_DATA.name;
  const email = serverUser?.email || clientUser?.email || USER_PROFILE_DATA.email;
  const image = serverUser?.image ?? clientUser?.image ?? USER_PROFILE_DATA.avatar;
  const role = serverUser?.role || (clientUser as { role?: string })?.role || USER_PROFILE_DATA.role;
  const userId = serverUser?.id || clientUser?.id || "B3vg25DrfYkCgX62SHVoONfBkkWbKegY";
  const emailVerified = serverUser?.emailVerified ?? clientUser?.emailVerified ?? false;
  const acceptTerms = serverUser?.acceptTerms ?? (clientUser as { acceptTerms?: boolean })?.acceptTerms ?? false;
  
  const rawCreatedAt = serverUser?.createdAt || clientUser?.createdAt;
  const memberSince = rawCreatedAt
    ? new Date(rawCreatedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : USER_PROFILE_DATA.memberSince;

  const handleCopyId = () => {
    if (userId) {
      navigator.clipboard.writeText(userId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const getInitials = (n: string) => {
    if (!n) return "U";
    const parts = n.trim().split(" ");
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return n.slice(0, 2).toUpperCase();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
          <h2 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-600" />
            <span>Profile Summary</span>
          </h2>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Active Session</span>
          </span>
        </div>

        {/* Real User Identity Card */}
        <div className="flex items-center gap-4 mb-6 p-3 bg-gray-50/70 rounded-2xl border border-gray-100">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-emerald-500/30 shrink-0 bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-inner">
            {image && !imgError ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
                unoptimized
              />
            ) : (
              <span>{getInitials(name)}</span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-extrabold text-gray-900 leading-tight truncate">
              {name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded capitalize">
                <Shield className="w-3 h-3 text-emerald-700" />
                {role}
              </span>
              {emailVerified && (
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>

        {/* User Details Grid */}
        <div className="space-y-3 text-xs text-gray-600 font-medium">
          {/* Email */}
          <div className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50/50 border border-gray-100/60">
            <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="block text-[10px] uppercase font-bold text-gray-400">Email Address</span>
              <span className="font-bold text-gray-900 truncate block">{email}</span>
            </div>
          </div>

          {/* User ID */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50/50 border border-gray-100/60">
            <div className="min-w-0 pr-2">
              <span className="block text-[10px] uppercase font-bold text-gray-400">User ID (Better-Auth)</span>
              <code className="font-mono text-[11px] font-bold text-emerald-700 truncate block">
                {userId}
              </code>
            </div>
            <button
              onClick={handleCopyId}
              className="p-1.5 text-gray-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors shrink-0"
              title="Copy ID"
            >
              {copiedId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Email Verification & Terms Status */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-xl bg-gray-50/50 border border-gray-100/60 flex items-center gap-2">
              {emailVerified ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-amber-500 shrink-0" />
              )}
              <div>
                <span className="block text-[9px] uppercase font-bold text-gray-400">Email</span>
                <span className="font-bold text-gray-900 text-[11px]">
                  {emailVerified ? "Verified" : "Pending"}
                </span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-gray-50/50 border border-gray-100/60 flex items-center gap-2">
              <FileCheck className={`w-4 h-4 shrink-0 ${acceptTerms ? "text-emerald-600" : "text-gray-400"}`} />
              <div>
                <span className="block text-[9px] uppercase font-bold text-gray-400">Terms</span>
                <span className="font-bold text-gray-900 text-[11px]">
                  {acceptTerms ? "Accepted" : "False"}
                </span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50/50 border border-gray-100/60">
            <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-400">Phone Number</span>
              <span className="font-bold text-gray-900">{USER_PROFILE_DATA.phone}</span>
            </div>
          </div>

          {/* Default Address */}
          <div className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50/50 border border-gray-100/60">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-400">Default Delivery Address</span>
              <span className="font-bold text-gray-900 leading-snug block">{USER_PROFILE_DATA.address}</span>
            </div>
          </div>

          {/* Member Since */}
          <div className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50/50 border border-gray-100/60">
            <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-400">Member Since</span>
              <span className="font-bold text-gray-900">{memberSince}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Action Button */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Link
          href="/profile"
          className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-xs transition-all text-xs hover:shadow-md"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Edit & Manage Profile</span>
        </Link>
      </div>
    </div>
  );
};
