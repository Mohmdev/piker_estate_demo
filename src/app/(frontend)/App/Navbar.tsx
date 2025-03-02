'use client'

import type { UserPhoto } from '@payload-types'
import { useAuth } from '@providers/Auth'
import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar'
import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu'
import { SidebarTrigger } from '@ui/sidebar'
import { Bell, MessageCircle, Plus, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { NAVBAR_HEIGHT } from '../(real-estate)/search/components/_constants'

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const isDashboardPage =
    pathname.includes('/managers') || pathname.includes('/tenants')

  const handleSignOut = async () => {
    await logout()
    window.location.href = '/'
  }

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          {isDashboardPage && (
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
          )}
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Rentiful Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                RENT
                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  IFUL
                </span>
              </div>
            </div>
          </Link>
          {isDashboardPage && user && (
            <Button
              variant="secondary"
              className="md:ml-4 bg-primary-50 text-primary-700 hover:bg-secondary-500 hover:text-primary-50"
              onClick={() =>
                router.push(
                  user.role?.toLowerCase() === 'manager'
                    ? '/managers/newproperty'
                    : '/search',
                )
              }
            >
              {user.role?.toLowerCase() === 'manager' ? (
                <>
                  <Plus className="h-4 w-4" />
                  <span className="hidden md:block ml-2">Add New Property</span>
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  <span className="hidden md:block ml-2">
                    Search Properties
                  </span>
                </>
              )}
            </Button>
          )}
        </div>
        {!isDashboardPage && (
          <p className="text-primary-200 hidden md:block">
            Discover your perfect rental apartment with our advanced search
          </p>
        )}
        <div className="flex items-center gap-5">
          {user ? (
            <>
              <div className="relative hidden md:block">
                <MessageCircle className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-700 rounded-full"></span>
              </div>
              <div className="relative hidden md:block">
                <Bell className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-700 rounded-full"></span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
                  <Avatar>
                    <AvatarImage
                      src={(user.photo as UserPhoto).url || ''}
                      alt={user.username || ''}
                    />
                    <AvatarFallback className="bg-primary-600">
                      {user.role?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-primary-200 hidden md:block">
                    {user.username}
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-primary-700">
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100 font-bold"
                    onClick={() =>
                      router.push(
                        user.role?.toLowerCase() === 'manager'
                          ? '/managers/properties'
                          : '/tenants/favorites',
                        { scroll: false },
                      )
                    }
                  >
                    Go to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary-200" />
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                    onClick={() =>
                      router.push(`/${user.role?.toLowerCase()}s/settings`, {
                        scroll: false,
                      })
                    }
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  variant="secondary"
                  className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
