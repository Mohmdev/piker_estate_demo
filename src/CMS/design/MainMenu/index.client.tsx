'use client'

import type { MainMenu } from '@payload-types'
import { useHeaderTheme } from '@providers/HeaderTheme'
import { cn } from '@utils/ui'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { PiArrowUpRightDuotone } from 'react-icons/pi'
import { CTAs, Logo } from './FlyoutNav'
import { MobileMenu } from './FlyoutNav/mobile'

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
    setScrolled(latest > 250 ? true : false)
  })
  // const { headerTheme } = useHeaderObserver()
  //
  //
  const { tabs, menuCta } = mainMenuData

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? 'bg-neutral-950 py-3 shadow-xl'
          : 'bg-neutral-950/0 py-6 shadow-none'
      }`}
    >
      <nav className="container mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <DesktopNav menuCta={menuCta} tabs={tabs} />
        <MobileMenu />
      </nav>
    </header>
  )
}

type DesktopNavType = Pick<MainMenu, 'menuCta' | 'tabs'>
export const DesktopNav: React.FC<DesktopNavType> = ({ menuCta, tabs }) => {
  return (
    <div className="hidden gap-6 lg:flex">
      {(tabs || []).map((tab, tabIndex) => (
        <NavItem item={tab} key={tabIndex} />
      ))}
      <CTAs {...menuCta} />
    </div>
  )
}

type NavItemProps = {
  item: NonNullable<MainMenu['tabs']>[number]
  children?: React.ReactNode
  // DropdownContent?: React.ElementType
}

const NavItem: React.FC<NavItemProps> = (props) => {
  // Data
  const { children, item } = props
  const {
    label,
    link: { type, newTab, reference, url } = {},
    enableDirectLink = false,
    enableDropdown = false,
    description,
    descriptionLinks,
    items: subItems,
  } = item
  //
  //
  //

  //
  // Nav States
  //
  const [open, setOpen] = useState(false)
  const activateDropdown = open
  //
  // Get the href
  //
  const getPathPrefix = (relationTo: string) => {
    if (relationTo === 'posts') return '/blog'
    if (relationTo === 'pages') return '' // home page
    return `/${relationTo}`
  }
  const href =
    type === 'reference' &&
    typeof reference?.value === 'object' &&
    reference.value.slug
      ? `${getPathPrefix(reference?.relationTo)}/${reference.value.slug}`
      : url
  if (!href) return null
  //
  // New Tab Props
  //
  const newTabProps = newTab
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {}

  return (
    <div className="flex items-center gap-6">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        // className="relative h-fit w-fit"
        className="w-fit h-fit"
      >
        {/* Tab */}
        {enableDirectLink ? (
          <Link
            className="relative"
            //
            href={href || url || ''}
            {...newTabProps}
          >
            {label && label}
            {children && children}
            <span
              style={{
                transform: activateDropdown ? 'scaleX(1)' : 'scaleX(0)',
              }}
              className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
            />
          </Link>
        ) : (
          <>{label && label}</>
        )}
        {/*  */}
        {/* Dropdown */}
        {enableDropdown && (
          <AnimatePresence>
            {activateDropdown && (
              <div>
                {/* <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  style={{ translateX: '-50%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute left-1/2 top-12 bg-white text-black"
                >
                  <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                  <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                </motion.div> */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  // style={{ translateX: '-50%' }}
                  // style={{ left: '0', right: '0' }}
                  transition={{
                    duration: 0.4,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                  // className="absolute left-1/2 top-12 bg-white text-black"
                  className="fixed inset-x-0 top-0 pt-28 pb-6 bg-neutral-950 z-[-1]"
                >
                  <DropdownContent
                    description={description}
                    descriptionLinks={descriptionLinks}
                    items={subItems}
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

import { CMSLink } from '@components/CMSLink'
import RichText from '@components/RichText'
import { FaArrowUpRightDots } from 'react-icons/fa6'
type DropdownContentProps = Pick<
  NonNullable<MainMenu['tabs']>[number],
  'description' | 'descriptionLinks' | 'items'
>

export const DropdownContent: React.FC<DropdownContentProps> = (props) => {
  const { description, descriptionLinks, items } = props

  // .grid {
  //     display: grid;
  //     grid-template-columns: repeat(16,1fr);
  //     grid-row-gap: 0;
  //     grid-column-gap: 0
  // }

  // @media(max-width: 1600px) {
  //     .grid {
  //         grid-template-columns:repeat(16,1fr)
  //     }
  // }

  // @media(max-width: 1024px) {
  //     .grid {
  //         grid-template-columns:repeat(8,1fr)
  //     }
  // }

  // @media(max-width: 768px) {
  //     .grid {
  //         grid-template-columns:repeat(8,1fr)
  //     }
  // }

  // @media(max-width: 400px) {
  //     .grid {
  //         grid-template-columns:repeat(8,1fr)
  //     }
  // }

  return (
    <div
      className={cn(
        'grid grid-cols-8 lg:grid-cols-16',
        'relative container h-full',
        'pointer-events-all',
        //
        // 'w-screen left-0',
        // 'border-t-1 border-border/50',
        '',
      )}
    >
      <div className="grid [grid-column-end:span_4] max-w-[300px]">
        {description}
        {descriptionLinks && (
          <div className="flex flex-col gap-4 py-8 px-0">
            {descriptionLinks.map((link, linkIndex) => (
              <CMSLink
                // {...link}
                key={linkIndex}
                label={link.link.label}
                type={link.link.type}
                reference={link.link.reference}
                url={link.link.url}
                className={cn(
                  'flex items-center flex-row gap-2 w-full leading-none',
                  ' transition-all duration-300 ease-out hover:text-indigo-300',
                )}
              >
                <FaArrowUpRightDots className="w-4 h-4" />
              </CMSLink>
            ))}
          </div>
        )}
      </div>
      {items &&
        items?.map((item, index) => {
          let columnSpan = 12 / (items?.length || 1)
          const containsFeatured = items?.some(
            (navItem) => navItem.style === 'featured',
          )

          if (containsFeatured) {
            columnSpan = item.style === 'featured' ? 6 : 3
          }
          return (
            <div
              key={index}
              className={cn(
                'grid relative',
                ' border border-blue-500',
                // `[grid-column-end:span_${columnSpan}]`,
                // `col-span-${columnSpan}`,
                // `[grid-column-end:span_${columnSpan}]`,
              )}
              style={{ gridColumnEnd: `span ${columnSpan}` }}
            >
              {item.style === 'default' && item.defaultLink && (
                <CMSLink
                  // {...item.defaultLink.link}
                  // label={item.defaultLink.link.label}
                  type={item.defaultLink.link.type}
                  reference={item.defaultLink.link.reference}
                  url={item.defaultLink.link.url}
                  className="flex flex-col gap-4 justify-between border border-red-500"
                >
                  <div className="m-0 grow-1 text-lg font-medium">
                    {item.defaultLink.link.label}
                  </div>
                  <div className="text-sm min-h-20 flex flex-col justify-between gap-4">
                    {item.defaultLink.description}
                    <PiArrowUpRightDuotone size={16} />
                  </div>
                </CMSLink>
              )}
              {item.style === 'list' && item.listLinks && (
                <div className="flex flex-col gap-2">
                  <div className="text-sm m-0 uppercase">
                    {item.listLinks.tag}
                  </div>
                  {item.listLinks.links &&
                    item.listLinks.links.map((link, linkIndex) => (
                      <CMSLink
                        className="font-medium transition-all duration-300 ease-out hover:opacity-80 focus:decoration-none"
                        key={linkIndex}
                        {...link.link}
                      >
                        {link.link?.newTab && link.link?.type === 'custom' && (
                          <PiArrowUpRightDuotone className="w-4 h-4 ml-2" />
                        )}
                      </CMSLink>
                    ))}
                </div>
              )}
              {item.style === 'featured' && item.ftrdLink && (
                <div className="flex flex-col gap-4">
                  <div className="text-sm m-0 uppercase">
                    {item.ftrdLink.tag}
                  </div>
                  {item.ftrdLink?.label && (
                    <RichText data={item.ftrdLink.label} />
                  )}
                  <div className="flex flex-row gap-2">
                    {item.ftrdLink.links &&
                      item.ftrdLink.links.map((link, linkIndex) => (
                        <CMSLink
                          className="transition-all duration-300 ease-out flex items-center flex-row gap-2 hover:opacity-80 focus:decoration-none"
                          key={linkIndex}
                          {...link.link}
                        >
                          <PiArrowUpRightDuotone className="w-4 h-4 ml-2" />
                        </CMSLink>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}
