'use client'

import type { MainMenu } from '@payload-types'
import { useHeaderTheme } from '@providers/HeaderTheme'
import { cn } from '@utils/ui'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { PiArrowUpRightLight } from 'react-icons/pi'
import { Hamburger, MobileMenu } from './FlyoutNav/mobile'

export const MainMenuClient: React.FC<{ mainMenuData: MainMenu }> = ({
  mainMenuData,
}) => {
  // Theme States
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname])
  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme])
  //
  // Nav States
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 100 ? true : false)
  })
  // const { headerTheme } = useHeaderObserver()
  //
  //
  const { navGroups, menuCta } = mainMenuData

  return (
    <header
      className={cn(
        'flex',
        'h-full',
        'fixed top-0 z-50 w-full text-white',
        'transition-all duration-300 ease-out',
        scrolled
          ? 'h-[63px] bg-zinc-950/90 backdrop-blur-md shadow-xl'
          : 'h-[74px] bg-zinc-950/0 backdrop-blur-[0px] shadow-none',
      )}
    >
      <nav className="container flex items-center flex-row justify-between">
        <Link href="/" className="z-50">
          <Logo />
        </Link>

        <DesktopNav menuCta={menuCta} navGroups={navGroups} className="z-40" />
        <MobileMenu menuCta={menuCta} navGroups={navGroups} className="z-25" />
      </nav>
    </header>
  )
}

export type NavMenuProps = Pick<MainMenu, 'menuCta' | 'navGroups'>

export const DesktopNav: React.FC<NavMenuProps & { className?: string }> = (props) => {
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

export type NavGroupProps = {
  group: NonNullable<MainMenu['navGroups']>[number]
  children?: React.ReactNode
}

const DesktopNavGroup: React.FC<NavGroupProps> = (props) => {
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
                  'bg-zinc-950/90 backdrop-blur-md ',
                )}
              >
                <DropdownContent dscrpArea={descriptionArea} navItems={navItems} />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

import { CMSLink } from '@components/CMSLink'
import RichText from '@components/RichText'
import { CTAs } from './FlyoutNav/CTAs'
import { Logo } from './FlyoutNav/Logo'
type DropdownContentProps = Pick<
  NonNullable<MainMenu['navGroups']>[number],
  'dscrpArea' | 'navItems'
>

export const DropdownContent: React.FC<DropdownContentProps> = (props) => {
  const { dscrpArea: descriptionArea, navItems } = props
  const { enable, text, links } = descriptionArea || {}

  return (
    <div
      className={cn(
        'grid grid-cols-8 lg:grid-cols-18 justify-between',
        'relative container h-full',
        'pointer-events-all',
      )}
    >
      {/* Column 1 / Description Area */}
      {enable && (
        <div className="grid [grid-column-end:span_4]">
          <div className="flex flex-col gap-5 max-w-[85%] prose">
            {text && (
              <RichText
                data={text}
                enableGutter={false}
                className="ml-0 text-left max-w-max select-none text-muted-foreground text-xl prose"
              />
            )}
            <div className="flex flex-col gap-4 py-4 px-0">
              {links?.map((link, linkIndex) => (
                <CMSLink
                  key={linkIndex}
                  label={link.link.label}
                  type={link.link.type}
                  reference={link.link.reference}
                  url={link.link.url}
                  className={cn(
                    'flex items-center flex-row gap-2 w-full leading-none',
                    'transition-all duration-300 ease-out hover:text-indigo-400',
                    'not-prose',
                  )}
                >
                  <PiArrowUpRightLight className="w-4 h-4" />
                </CMSLink>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Column 2 / ITEMS  */}
      {navItems &&
        navItems?.map((item, index) => {
          let columnSpan = 12 / (navItems?.length || 1)
          const containsFeatured = navItems?.some(
            (navItem) => navItem.style === 'featured',
          )

          if (containsFeatured) {
            columnSpan = item.style === 'featured' ? 6 : 4
          }
          return (
            <div
              key={index}
              className="grid relative"
              style={{ gridColumnEnd: `span ${columnSpan}` }}
            >
              {/* Default Links */}
              {item.style === 'default' && item.defaultLink && (
                <div className="flex flex-col items-center ml-4">
                  <div className="flex flex-col gap-4 max-w-max">
                    <CMSLink
                      type={item.defaultLink.link.type}
                      reference={item.defaultLink.link.reference}
                      url={item.defaultLink.link.url}
                      label={item.defaultLink.link.label}
                      className={cn(
                        'flex flex-row justify-start items-center gap-2',
                        'transition-colors duration-300 ease-out focus:decoration-none',
                        'font-normal text-sm xl:text-md hover:text-violet-300 prose leading-none',
                      )}
                    >
                      <div className="text-sm min-h-16 flex flex-col justify-between gap-4">
                        {item.defaultLink.description}
                      </div>
                    </CMSLink>
                  </div>
                </div>
              )}
              {/* List Links */}
              {item.style === 'list' && item.listLinks && (
                <div className="flex flex-col items-center ml-4">
                  <div className="flex flex-col gap-4 max-w-max">
                    <div className="text-sm text-muted-foreground uppercase tracking-widest prose select-none">
                      {item.listLinks.tag}
                    </div>
                    <div className="flex flex-col gap-4 font-light">
                      {item.listLinks.links &&
                        item.listLinks.links.map((link, linkIndex) => (
                          <CMSLink
                            key={linkIndex}
                            {...link.link}
                            className={cn(
                              'flex flex-row justify-start items-center gap-2',
                              'transition-colors duration-300 ease-out focus:decoration-none',
                              'font-normal text-sm xl:text-md hover:text-violet-300 prose leading-none',
                            )}
                          >
                            {link.link?.newTab && link.link?.type === 'custom' && (
                              <PiArrowUpRightLight className="w-4 h-4" />
                            )}
                          </CMSLink>
                        ))}
                    </div>
                  </div>
                </div>
              )}
              {/* Featured Section and Links */}
              {item.style === 'featured' && item.ftrdLink && (
                <div className="flex flex-col gap-4 items-end prose">
                  <div className="text-sm m-0 uppercase font-medium tracking-widest select-none text-violet-500 prose text-end">
                    {item.ftrdLink.tag}
                  </div>
                  {item.ftrdLink?.label && (
                    <RichText
                      data={item.ftrdLink.label}
                      enableGutter={false}
                      className="mr-0 text-right max-w-max select-none text-muted-foreground "
                    />
                  )}
                  <div className="flex flex-col  max-w-max justify-end items-end gap-2">
                    {item.ftrdLink.links &&
                      item.ftrdLink.links.map((link, linkIndex) => (
                        <CMSLink
                          key={linkIndex}
                          {...link.link}
                          className={cn(
                            'flex flex-row justify-start items-center gap-2',
                            'transition-colors duration-300 ease-out focus:decoration-none',
                            'font-normal text-md text-foreground hover:text-violet-300 prose leading-none',
                          )}
                        >
                          <PiArrowUpRightLight className="w-3 h-3" />
                        </CMSLink>
                      ))}
                  </div>
                </div>
              )}
              {/*  */}
            </div>
          )
        })}
    </div>
  )
}
