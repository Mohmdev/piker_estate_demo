'use client'

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'

import React, { Dispatch, SetStateAction, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import useMeasure from 'react-use-measure'

import type { Header as HeaderType, Page, Post } from '@payload-types'
import Link from 'next/link'

export const FlyoutNav: React.FC<{
  data?: HeaderType
  scrollDistance?: number
}> = ({ data, scrollDistance = 150 }) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const navItems = data?.navItems || []

  const getFlyoutContent = (label: string | null) => {
    if (!label) return undefined
    return LABEL_TO_FLYOUT_MAP[label as keyof typeof LABEL_TO_FLYOUT_MAP]
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > scrollDistance ? true : false)
  })

  return (
    <header
      className={`fixed top-0 z-50 w-full text-white
        transition-all duration-300 ease-out lg:px-12
        ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-md py-3 shadow-xl'
            : 'bg-zinc-950/0 backdrop-blur-none py-6 shadow-none'
        }`}
    >
      <div className="container flex-row flex flex-nowrap items-center justify-between">
        <Logo />
        <nav className="hidden gap-6 lg:flex">
          <div className="flex items-center gap-6">
            {navItems.map(({ link }, i) => (
              <NavLink
                key={i}
                {...link}
                FlyoutContent={getFlyoutContent(link.label)}
              />
            ))}
          </div>
          <CTAs />
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}

const NavLink = ({
  children,
  FlyoutContent,
  type,
  newTab,
  reference,
  url,
  label,
}: {
  children: React.ReactNode
  FlyoutContent?: React.ElementType
  type?: 'custom' | 'reference' | null
  newTab?: boolean | null | undefined
  reference?: { relationTo: 'pages' | 'posts'; value: Page | Post } | null
  url?: string | null
  label?: string | null
}) => {
  const [open, setOpen] = useState(false)

  const showFlyout = FlyoutContent && open

  console.log('NavLink render:', { label, FlyoutContent, open, showFlyout })

  const href =
    type === 'reference' &&
    typeof reference?.value === 'object' &&
    reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  console.log('Inside NavLink', href, url, type, reference)

  if (!href) return null

  const newTabProps = newTab
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {}

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link href={href || url || ''} className="relative" {...newTabProps}>
        {label && label}
        {children && children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const CTAs = () => {
  return (
    <div className="flex items-center gap-3 *:transition-colors *:duration-400 *:ease-in-out text-sm text-white">
      <button className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-1 font-medium  transition-colors hover:bg-white hover:text-black ">
        <FaUserCircle />
        <span>Sign in</span>
      </button>
      <button className="rounded-lg border-2 border-rose-700 bg-rose-700 px-4 py-1 font-medium  transition-colors hover:border-rose-600 hover:bg-rose-600 hover:text-white ">
        Schedule a Demo
      </button>
    </div>
  )
}

const Logo = ({ color = 'white' }: { color?: string }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold" style={{ color }}>
        Nexweb
      </span>
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="w-10"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor={color}
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor={color}
        ></path>
      </svg>
    </div>
  )
}

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">About us</h2>
          <p className="mb-6 max-w-xs text-sm text-neutral-400">
            Placeholder is the world's leading placeholder company.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-indigo-300 hover:underline"
        >
          Learn more <FiArrowRight />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Features</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
          </p>
        </a>
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Testimonials</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
          </p>
        </a>
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Press</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
          </p>
        </a>
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Blog</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
          </p>
        </a>
      </div>
    </div>
  )
}

const PricingContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">For Individuals</h3>
          <a href="#" className="block text-sm hover:underline">
            Introduction
          </a>
          <a href="#" className="block text-sm hover:underline">
            Pay as you go
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">For Companies</h3>
          <a href="#" className="block text-sm hover:underline">
            Startups
          </a>
          <a href="#" className="block text-sm hover:underline">
            SMBs
          </a>
          <a href="#" className="block text-sm hover:underline">
            Enterprise
          </a>
        </div>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  )
}

const CareersContent = () => {
  return (
    <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4">
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-white">Careers</h2>
          <p className="text-sm text-indigo-100">
            Placeholder was rated a top place to work by Placeholder.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-indigo-200 hover:underline"
        >
          Careers site <FiArrowRight />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-semibold">Business</h3>
          <a href="#" className="block text-sm hover:underline">
            Marketing
          </a>
          <a href="#" className="block text-sm hover:underline">
            Finance
          </a>
          <a href="#" className="block text-sm hover:underline">
            Legal
          </a>
          <a href="#" className="block text-sm hover:underline">
            Sales
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Engineering</h3>
          <a href="#" className="block text-sm hover:underline">
            Full stack
          </a>
          <a href="#" className="block text-sm hover:underline">
            Dev ops
          </a>
          <a href="#" className="block text-sm hover:underline">
            QA
          </a>
          <a href="#" className="block text-sm hover:underline">
            Data
          </a>
          <a href="#" className="block text-sm hover:underline">
            Machine learning
          </a>
          <a href="#" className="block text-sm hover:underline">
            Management
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">More</h3>
          <a href="#" className="block text-sm hover:underline">
            Support
          </a>
          <a href="#" className="block text-sm hover:underline">
            Office
          </a>
          <a href="#" className="block text-sm hover:underline">
            Other
          </a>
        </div>
      </div>
    </div>
  )
}

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode
  href: string
  FoldContent?: React.ElementType
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [ref, { height }] = useMeasure()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen(false)
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? '180deg' : '0deg' }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen(false)
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : '0px',
            marginBottom: open ? '24px' : '0px',
            marginTop: open ? '12px' : '0px',
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  )
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

const LINKS = [
  {
    text: 'About us',
    href: 'posts',
    component: AboutUsContent,
  },
  {
    text: 'Pricing',
    href: 'contact',
    component: PricingContent,
  },
  {
    text: 'Careers',
    href: '#',
    component: CareersContent,
  },
  {
    text: 'Documentation',
    href: '#',
  },
]
// First, let's create a mapping between CMS labels and their flyout components
const LABEL_TO_FLYOUT_MAP = {
  Posts: AboutUsContent, // If you want Posts to show the About flyout
  Contact: PricingContent, // If you want Contact to show the Pricing flyout
  // Add more mappings as needed
} as const
