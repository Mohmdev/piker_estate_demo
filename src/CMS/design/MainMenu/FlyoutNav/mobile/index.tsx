import type { MainMenu } from '@payload-types'
import { cn } from '@utils/ui'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { CTAs } from '../CTAs'
import { Hamburger } from './hamburger'
import { MobileNavGroup } from './nav-group'

export const MobileMenu: React.FC<
  MainMenu & {
    className?: string
  }
> = (props) => {
  const { menuCta, navGroups, className } = props
  const [open, setOpen] = useState(false)

  return (
    <div className={cn('relative h-max contents', className)}>
      <Hamburger onClick={() => setOpen((pv) => !pv)} className="justify-end z-100" />
      <AnimatePresence>
        {open && (
          <>
            {/* Menu Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 0.4,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              style={{
                originX: 0,
                originY: 0,
                backfaceVisibility: 'visible',
                backdropFilter: 'blur(20px)',
              }}
              className={cn(
                'fixed inset-x-0 top-0 z-20',
                'flex w-full flex-col',
                'bg-white dark:bg-neutral-950/90',
                'backdrop-blur-[20px]',
                'overflow-hidden rounded-b-md shadow-xl border-b-1 border-border/50',
              )}
            >
              <div className="relative h-full flex">
                {/* <div className="absolute inset-0 dark:bg-neutral-950/90 backdrop-blur-lg w-full" /> */}
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
                      <MobileNavGroup
                        key={groupIndex}
                        group={navGroup}
                        setMenuOpen={setOpen}
                      />
                    ))}
                    <div
                      className={cn(
                        'flex justify-end p-6 z-1',
                        'bg-card/70 border-1 border-border/50 rounded-lg mt-8',
                      )}
                    >
                      <CTAs {...menuCta} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
