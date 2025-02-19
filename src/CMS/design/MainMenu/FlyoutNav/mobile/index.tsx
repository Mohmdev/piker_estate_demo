import type { MainMenu } from '@payload-types'
import { cn } from '@utils/ui'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import { CTAs } from '../CTAs'
import { MobileNavGroup } from './nav-group'

export const MobileMenu: React.FC<
  MainMenu & {
    className?: string
    open: boolean
  }
> = (props) => {
  const { menuCta, navGroups, className, open } = props

  return (
    <AnimatePresence mode="popLayout">
      {open && (
        <motion.nav
          style={{ backgroundColor: 'hsla(var(--navigation) / 0.9)' }}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.4,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className={cn(
            'absolute inset-x-0 top-0 z-999',
            'flex w-full flex-col',
            'backdrop-blur-2xl',
            'overflow-hidden rounded-b-md shadow-xl border-b-1 border-border/50',
            className,
          )}
        >
          <div className="relative h-full flex">
            <div className="flex flex-col min-h-max pb-6">
              <div
                className={cn(
                  'flex flex-col gap-0',
                  'overflow-y-scroll max-h-[80vh] z-1 p-6',
                  'relative',
                  'pt-16 pb-6',
                )}
              >
                {(navGroups || []).map((navGroup, groupIndex) => (
                  <MobileNavGroup key={groupIndex} group={navGroup} />
                ))}
                <div
                  className={cn(
                    'flex justify-end p-6 z-1',
                    'border-1 border-border/50 rounded-lg mt-8',
                    'bg-space-bg-less',
                  )}
                >
                  <CTAs {...menuCta} />
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
