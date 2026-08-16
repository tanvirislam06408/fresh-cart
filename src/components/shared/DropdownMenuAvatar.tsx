"use client"

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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

export function DropdownMenuAvatar({ user, handleSignOut }: { user: User | undefined; handleSignOut: () => Promise<void>; }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><Avatar>
        <AvatarImage src={`${user ? user.image : 'https://github.com/shadcn.png'}`} alt="shadcn" />
        <AvatarFallback>{user?.name.slice(0,2).toUpperCase()}</AvatarFallback>
      </Avatar></Button>} />
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <Link href={user ? '/profile' : '/login'}>
            <DropdownMenuItem>
              <BadgeCheckIcon />
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href={user ? `/dashboard/${user?.role}` : '/login'}>
            <DropdownMenuItem>
              <CreditCardIcon />
              Dashboard
            </DropdownMenuItem>
          </Link>

        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <button onClick={() => handleSignOut()}>
          <DropdownMenuItem>
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
