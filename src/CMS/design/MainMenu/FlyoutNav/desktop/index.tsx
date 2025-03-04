import { type MainMenu as MainMenuType } from '@payload-types'
import { cn } from '@utils/ui'
import Link from 'next/link'
import type { Dispatch, SetStateAction } from 'react'
import { FiSearch } from 'react-icons/fi'
import { CTAs } from '../CTAs'
import { AccountNav } from './accountNav'
import { DesktopNavGroup } from './nav-group'

export const DesktopNav: React.FC<
  MainMenuType & {
    hovered: string | null
    setHovered: Dispatch<SetStateAction<string | null>>
    className?: string
  }
> = (props) => {
  const { menuCta, navGroups, className, setHovered, hovered } = props

  return (
    <div
      className={cn(
        //
        'hidden lg:flex gap-6 h-full',
        'text-primary',
        className,
      )}
    >
      {(navGroups || []).map((navGroup, groupIndex) => (
        <DesktopNavGroup
          group={navGroup}
          key={groupIndex}
          setHovered={setHovered}
          hovered={hovered}
        />
      ))}
      <Link href="/search" className="h-full flex items-center">
        <span className="sr-only">Search</span>
        <FiSearch className="w-5 text-primary" />
      </Link>
      <div
        className={cn(
          'flex-1',
          'flex gap-3 justify-between items-center',
          '*:transition-colors *:duration-400 *:ease-in-out text-sm text-white',
        )}
      >
        <AccountNav />
        <CTAs {...menuCta} />
      </div>
    </div>
  )
}
