import { CMSLink } from '@components/CMSLink'
import RichText from '@components/RichText'
import type { MainMenu } from '@payload-types'
import { cn } from '@utils/ui'
import { PiArrowUpRightLight } from 'react-icons/pi'

type GroupContentProps = Pick<
  NonNullable<MainMenu['navGroups']>[number],
  'dscrpArea' | 'navItems'
>

export const GroupContent: React.FC<GroupContentProps> = (props) => {
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
            'bg-neutral-200 dark:bg-neutral-950',
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
                          {link.link?.newTab &&
                            link.link?.type === 'custom' && (
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
