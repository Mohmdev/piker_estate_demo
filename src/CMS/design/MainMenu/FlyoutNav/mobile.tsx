import { CMSLink } from '@components/CMSLink'
import RichText from '@components/RichText'
import type { MainMenu } from '@payload-types'
import { cn } from '@utils/ui'
import { AnimatePresence, motion } from 'motion/react'
import { type Dispatch, type SetStateAction, useState } from 'react'
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { PiArrowUpRightLight } from 'react-icons/pi'
import useMeasure from 'react-use-measure'
import type { NavGroupProps, NavMenuProps } from '../index.client'
import { CTAs, Logo } from './index'

export type MobileNavGroupProps = {
  group: NonNullable<MainMenu['navGroups']>[number]
  children?: React.ReactNode
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileNavGroup: React.FC<MobileNavGroupProps> = (props) => {
  const [ref, { height }] = useMeasure()
  const [open, setOpen] = useState(false)

  const { children, group, setMenuOpen } = props
  const {
    groupLabel,
    link: linkProps,
    enableDirectLink = false,
    enableDropdown = false,
    dscrpArea: descriptionArea,
    navItems,
  } = group

  return (
    <div className="relative text-neutral-950">
      {group ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <div
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen(false)
            }}
          >
            <CMSLink {...linkProps} />
          </div>
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
        <div
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen(false)
          }}
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <CMSLink {...linkProps}>
            {children} <FiArrowRight />
          </CMSLink>
        </div>
      )}
      {group && (
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
            <GroupContent {...descriptionArea} navItems={navItems} />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export const MobileMenu: React.FC<NavMenuProps> = (props) => {
  const { menuCta, navGroups } = props
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
              {(navGroups || []).map((navGroup, groupIndex) => (
                <MobileNavGroup key={groupIndex} group={navGroup} setMenuOpen={setOpen} />
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs {...menuCta} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

type GroupContentProps = Pick<
  NonNullable<MainMenu['navGroups']>[number],
  'dscrpArea' | 'navItems'
>

const GroupContent: React.FC<GroupContentProps> = (props) => {
  const { dscrpArea: descriptionArea, navItems } = props
  const { enable, text, links } = descriptionArea || {}

  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      {/* Description Area */}
      {enable && (
        <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
          <div>
            {text && (
              <RichText
                data={text}
                enableGutter={false}
                className="ml-0 text-left max-w-max select-none text-muted-foreground text-xl prose"
              />
            )}
          </div>
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
      )}
      {/* navItems */}
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <div>
          {navItems &&
            navItems?.map((item, index) => (
              <div key={index} className="relative">
                {/* Default Links */}
                {item.style === 'default' && item.defaultLink && (
                  <CMSLink
                    type={item.defaultLink?.link.type}
                    reference={item.defaultLink?.link.reference}
                    url={item.defaultLink?.link.url}
                    label={item.defaultLink?.link.label}
                    className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100 mb-1 font-semibold"
                  >
                    <p className="text-xs">{item.defaultLink?.description}</p>
                    <PiArrowUpRightLight className="w-4 h-4" />
                  </CMSLink>
                )}

                {/* List Links */}
                {item.style === 'list' && item.listLinks && (
                  <div className="flex flex-col gap-4">
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
                              'font-normal hover:text-violet-300 prose leading-none',
                            )}
                          >
                            {link.link?.newTab && link.link?.type === 'custom' && (
                              <PiArrowUpRightLight className="w-4 h-4" />
                            )}
                          </CMSLink>
                        ))}
                    </div>
                  </div>
                )}
                {/* Featured Section and Links */}
                {item.style === 'featured' && item.ftrdLink && (
                  <div className="flex flex-col gap-4 items-end">
                    <div className="text-sm m-0 uppercase font-medium tracking-widest select-none text-violet-500 prose">
                      {item.ftrdLink.tag}
                    </div>
                    {item.ftrdLink?.label && (
                      <RichText
                        data={item.ftrdLink.label}
                        enableGutter={false}
                        className="mr-0 text-right max-w-max select-none text-muted-foreground "
                      />
                    )}
                    <div className="flex flex-row gap-2">
                      {item.ftrdLink.links &&
                        item.ftrdLink.links.map((link, linkIndex) => (
                          <CMSLink
                            className={cn(
                              ' flex items-center flex-row gap-2 focus:decoration-none',
                              'text-muted-foreground hover:text-violet-400 prose',
                              'transition-all duration-300 ease-out',
                            )}
                            key={linkIndex}
                            {...link.link}
                          >
                            <PiArrowUpRightLight className="w-4 h-4" />
                          </CMSLink>
                        ))}
                    </div>
                  </div>
                )}
                {/*  */}
              </div>
            ))}
        </div>
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
