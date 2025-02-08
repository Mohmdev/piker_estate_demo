import { type MainMenu as MainMenuType } from '@payload-types'
import { cn } from '@utils/ui'
import { CTAs } from '../CTAs'
import { DesktopNavGroup } from './nav-group'

export const DesktopNav: React.FC<MainMenuType & { className?: string }> = (props) => {
  const { menuCta, navGroups, className } = props

  return (
    <div className={cn('hidden lg:flex gap-6 h-full', className)}>
      {(navGroups || []).map((navGroup, groupIndex) => (
        <DesktopNavGroup group={navGroup} key={groupIndex} />
      ))}
      <CTAs {...menuCta} />
    </div>
  )
}
