import { CMSLink } from '@components/CMSLink'
import RichText from '@components/RichText'
import type { MainMenu } from '@payload-types'
import { cn } from '@utils/ui'
import { AnimatePresence, motion } from 'motion/react'
import { type Dispatch, type SetStateAction, useState } from 'react'
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { PiArrowUpRightLight } from 'react-icons/pi'
import useMeasure from 'react-use-measure'
import type { NavMenuProps } from '../index.client'
import { CTAs } from './CTAs'

export type MobileNavGroupProps = {
  group: NonNullable<MainMenu['navGroups']>[number]
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileNavGroup: React.FC<MobileNavGroupProps> = (props) => {
  const [ref, { height }] = useMeasure()
  const [open, setOpen] = useState(false)

  const { group } = props
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
      {/* When there is direct link */}
      {enableDirectLink ? (
        <div
          onClick={() => setOpen((pv) => !pv)}
          className={cn(
            'flex w-full py-4 items-center justify-between',
            'border-border text-start text-2xl font-normal leading-auto text-foreground',
            // open ? 'border-b-0' : 'border-b-1',
            'border-b-1 px-1',
            'cursor-pointer',
          )}
        >
          <CMSLink {...linkProps} label={groupLabel} />
          {enableDropdown && (
            <motion.div
              animate={{ rotate: open ? '180deg' : '0deg' }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
            >
              <FiChevronDown className="cursor-pointer select-auto text-muted-foreground prose" />
            </motion.div>
          )}
        </div>
      ) : (
        // When there is no direct link
        <div
          onClick={() => setOpen((pv) => !pv)}
          className={cn(
            'flex w-full py-4 items-center justify-between',
            'border-border text-start text-2xl font-normal text-foreground leading-auto',
            // open ? 'border-b-0' : 'border-b-1',
            'border-b-1 px-1',
            'cursor-pointer',
          )}
        >
          <span>{groupLabel && groupLabel}</span>
          {enableDropdown && (
            <motion.div
              animate={{ rotate: open ? '180deg' : '0deg' }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              className="cursor-pointer select-auto text-muted-foreground prose"
            >
              <FiChevronDown />
            </motion.div>
          )}
        </div>
      )}
      {/*  */}
      {enableDropdown && (
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
            <GroupContent dscrpArea={descriptionArea} navItems={navItems} />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export const Hamburger: React.FC<{ className?: string; onClick?: () => void }> = (
  props,
) => {
  // const [open, setOpen] = useState(false)

  return (
    <button
      // onClick={() => setOpen((pv) => !pv)}
      className={cn('block lg:hidden text-3xl z-100', props.className)}
      onClick={props.onClick}
    >
      <FiMenu />
    </button>
  )
}

export const MobileMenu: React.FC<
  NavMenuProps & {
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

type GroupContentProps = Pick<
  NonNullable<MainMenu['navGroups']>[number],
  'dscrpArea' | 'navItems'
>

const GroupContent: React.FC<GroupContentProps> = (props) => {
  const { dscrpArea: descriptionArea, navItems } = props
  const { enable, text, links } = descriptionArea || {}

  return (
    <div
      className={cn(
        'grid grid-cols-12',
        'h-fit w-full',
        'lg:h-72 lg:w-[600px] xl:w-[750px]',
        'shadow-xl',
      )}
    >
      {/* Description Area */}
      {enable && (
        <div
          className={cn(
            'col-span-12 lg:col-span-4',
            'flex flex-col justify-between gap-3 p-6',
            'bg-neutral-200 dark:bg-neutral-950 ',
            'border-1 border-border/50 rounded-lg',
            '',
          )}
        >
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
                'transition-all duration-300 ease-out text-foreground hover:text-indigo-400',
                'not-prose',
              )}
            >
              <PiArrowUpRightLight className="w-4 h-4" />
            </CMSLink>
          ))}
        </div>
      )}
      {/* navItems */}
      <div
        className={cn(
          'col-span-12 lg:col-span-8',
          ' my-6 px-4',
          // 'grid grid-cols-2 grid-rows-2 grid-flow-row gap-3',
          // '*:border-1 *:border-red-500',
          'flex flex-row flex-wrap gap-4',
        )}
      >
        {navItems &&
          navItems?.map((item, index) => (
            <div key={index} className="relative flex-1">
              {/* Default Links */}
              {item.style === 'default' && item.defaultLink && (
                <CMSLink
                  type={item.defaultLink?.link.type}
                  reference={item.defaultLink?.link.reference}
                  url={item.defaultLink?.link.url}
                  label={item.defaultLink?.link.label}
                  className="rounded border-2 border-neutral-200 p-3 transition-colors hover:bg-neutral-100 mb-1 font-semibold"
                >
                  <p className="text-xs text-foreground">
                    {item.defaultLink?.description}
                  </p>
                  <PiArrowUpRightLight className="w-4 h-4" />
                </CMSLink>
              )}

              {/* List Links */}
              {item.style === 'list' && item.listLinks && (
                <div className="flex flex-col gap-6 mb-6 min-w-max">
                  <div className="text-sm text-muted-foreground uppercase tracking-widest prose select-none">
                    {item.listLinks.tag}
                  </div>
                  <div className="flex flex-col gap-4 font-light text-foreground">
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
                <div
                  className={cn(
                    'flex-1 w-full',
                    'flex flex-col gap-4 items-start text-foreground',
                  )}
                >
                  {/* Featured Section */}
                  <div className="text-sm m-0 uppercase font-medium tracking-widest select-none text-violet-500 prose">
                    {item.ftrdLink.tag}
                  </div>
                  {item.ftrdLink?.label && (
                    <RichText
                      data={item.ftrdLink.label}
                      enableGutter={false}
                      className="w-full mx-0 text-left select-none text-muted-foreground"
                    />
                  )}
                  <div className="flex flex-row gap-2">
                    {item.ftrdLink.links &&
                      item.ftrdLink.links.map((link, linkIndex) => (
                        <CMSLink
                          key={linkIndex}
                          {...link.link}
                          className={cn(
                            'flex flex-row justify-start items-center gap-2',
                            'transition-colors duration-300 ease-out focus:decoration-none',
                            'font-normal hover:text-violet-300 prose leading-none',
                          )}
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
  )
}
