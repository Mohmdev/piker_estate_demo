import { type MainMenu as MainMenuType } from '@payload-types'
import { cn } from '@utils/ui'
import type { Dispatch, SetStateAction } from 'react'
import { CTAs } from '../CTAs'
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
    <div className={cn('hidden lg:flex gap-6 h-full', className)}>
      {(navGroups || []).map((navGroup, groupIndex) => (
        <DesktopNavGroup
          group={navGroup}
          key={groupIndex}
          setHovered={setHovered}
          hovered={hovered}
        />
      ))}
      <CTAs {...menuCta} />
    </div>
  )
}
