"use client"

import {
  User as UserIcon,
  LayoutDashboard as LayoutDashboardIcon,
  LogOut as LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "@/types/user.type"
import Link from "next/link"

export function DropdownMenuAvatar({
  user,
  handleSignOut,
}: {
  user: User | undefined;
  handleSignOut: () => Promise<void>;
}) {
  const getInitials = (name?: string) => {
    if (!name) return "FC";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 group cursor-pointer">
        <Avatar className="h-9 w-9 ring-2 ring-emerald-500/30 group-hover:ring-emerald-500/70 transition-all duration-200 shadow-sm">
          <AvatarImage
            src={user?.image || undefined}
            alt={user?.name || "User Avatar"}
          />
          <AvatarFallback className="bg-emerald-600 text-white font-bold text-xs">
            {getInitials(user?.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 p-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-emerald-100/80 text-gray-800 animate-in fade-in-80 zoom-in-95"
      >
        {/* User Info Header */}
        <div className="px-3 py-2.5 mb-1 bg-gradient-to-br from-emerald-50/90 to-teal-50/40 rounded-xl border border-emerald-100/60">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 ring-2 ring-emerald-500/30 shadow-sm shrink-0">
              <AvatarImage
                src={user?.image || undefined}
                alt={user?.name || "User profile"}
              />
              <AvatarFallback className="bg-emerald-600 text-white font-bold text-xs">
                {getInitials(user?.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-gray-900 truncate leading-tight">
                {user?.name || "Guest User"}
              </span>
              <span className="text-xs text-gray-500 truncate mt-0.5">
                {user?.email || "user@freshcart.com"}
              </span>
              {user?.role && (
                <div className="mt-1 flex items-center">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200/80">
                    {user.role}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Menu Navigation Group */}
        <DropdownMenuGroup className="space-y-0.5">
          <Link href={user ? "/profile" : "/login"} className="block">
            <DropdownMenuItem className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-900 hover:bg-emerald-50/90 focus:bg-emerald-50 focus:text-emerald-900 rounded-xl transition-colors cursor-pointer group">
              <UserIcon className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>My Profile</span>
            </DropdownMenuItem>
          </Link>

          <Link
            href={user ? `/dashboard/${user?.role || "user"}` : "/login"}
            className="block"
          >
            <DropdownMenuItem className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-900 hover:bg-emerald-50/90 focus:bg-emerald-50 focus:text-emerald-900 rounded-xl transition-colors cursor-pointer group">
              <LayoutDashboardIcon className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1.5 bg-emerald-100/70" />

        {/* Sign Out Button */}
        <DropdownMenuItem
          onClick={() => handleSignOut()}
          className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 focus:bg-rose-50 focus:text-rose-700 rounded-xl transition-colors cursor-pointer group"
        >
          <LogOutIcon className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

