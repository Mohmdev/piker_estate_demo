import { CMSLink } from '@components/CMSLink'
import type { MainMenu } from '@payload-types'
import { cn } from '@utils/ui'
import { AnimatePresence, motion } from 'motion/react'
import React, { useState, type Dispatch, type SetStateAction } from 'react'
import { DropdownContent } from './group-content'

export type NavGroupProps = {
  group: NonNullable<MainMenu['navGroups']>[number]
  children?: React.ReactNode
  hovered: string | null
  setHovered: Dispatch<SetStateAction<string | null>>
}

export const DesktopNavGroup: React.FC<NavGroupProps> = (props) => {
  const { children, group } = props
  const {
    groupLabel,
    link: linkProps,
    enableDirectLink = false,
    enableDropdown = false,
    dscrpArea: descriptionArea,
    navItems,
  } = group

  const [open, setOpen] = useState(false)
  const activateDropdown = open

  return (
    <div className="flex items-center gap-6">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-fit h-full flex items-center"
      >
        {/* Nav Group */}
        {enableDirectLink ? (
          <CMSLink
            {...linkProps}
            className={cn(
              'relative h-full flex items-center',
              'group',
              'after:absolute after:bottom-0 after:left-0 after:h-0.5',
              'after:w-full after:bg-violet-600',

              // // 1. Fade In/Out
              // 'after:opacity-0 after:transition-opacity after:duration-200',
              // activateDropdown ? 'after:opacity-100' : 'after:opacity-0',

              // // 2. Slide Left to Right
              // 'after:origin-left after:transition-transform after:duration-200',
              // activateDropdown ? 'after:scale-x-100' : 'after:scale-x-0',

              // // 3. Center Expand
              // 'after:origin-center after:transition-transform after:duration-200',
              // activateDropdown ? 'after:scale-x-100' : 'after:scale-x-0',

              // 4. Gradient Sweep
              'after:bg-gradient-to-r after:from-violet-600 after:to-violet-400',
              'after:transition-all after:duration-300',
              'after:bg-[length:200%_100%] after:opacity-0 after:rounded-lg',
              activateDropdown
                ? 'after:bg-left after:opacity-100'
                : 'after:bg-right after:opacity-0',

              // // 5. Expand from Center
              // 'after:transition-transform after:duration-200',
              // activateDropdown ? 'after:scale-x-100' : 'after:scale-x-0',
            )}
          >
            {groupLabel && groupLabel}
            {children && children}
            <span
              style={{
                transform: activateDropdown ? 'scaleX(1)' : 'scaleX(0)',
              }}
              className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
            />
          </CMSLink>
        ) : (
          <span
            className={cn(
              'select-none',
              //
              'relative h-full flex items-center',
              'group',
              'after:absolute after:bottom-0 after:left-0 after:h-0.5',
              'after:w-full after:bg-violet-600',
              //
              'after:bg-gradient-to-r after:from-violet-600 after:to-violet-400',
              'after:transition-all after:duration-300',
              'after:bg-[length:200%_100%] after:opacity-0 after:rounded-lg',
              activateDropdown
                ? 'after:bg-left after:opacity-100'
                : 'after:bg-right after:opacity-0',
            )}
          >
            {groupLabel && groupLabel}
          </span>
        )}
        {/*  */}
        {/* Dropdown Wrapper */}
        {enableDropdown && (
          <AnimatePresence>
            {activateDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.4,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className={cn(
                  'fixed inset-x-0 top-0 pt-25 pb-10 z-[-1]',
                  'backdrop-blur-md',
                  'bg-zinc-950/100',
                  'bg-navigation',
                  'border-border/50 border-1',
                  // 'rounded-t-4xl',
                  // 'rounded-b-lg',
                  'rounded-lg',
                )}
              >
                <DropdownContent
                  dscrpArea={descriptionArea}
                  navItems={navItems}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}
