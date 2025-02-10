'use client'

import { CMSLink } from '@components/CMSLink'
import RichText from '@components/RichText'
import type { Page } from '@payload-types'
import { cn } from '@utils/ui'
import { motion } from 'motion/react'

type MiniSliderProps = {
  richText: Page['hero']['richText']
  links: NonNullable<Page['hero']['links']>
  className?: string
}

export const MiniSlider: React.FC<MiniSliderProps> = ({
  richText,
  links,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 justify-center items-start',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg opacity-90"
      >
        Want to buy or rent Home?
      </motion.div>

      {/* Rich Text (for main heading) */}
      {richText && (
        <RichText
          className="mb-6 text-start"
          data={richText}
          enableGutter={false}
        />
      )}

      {/* Submit Property Button */}
      {Array.isArray(links) && links.length > 0 && (
        <ul className="flex justify-start gap-4">
          {links.map(({ link }, i) => (
            <li key={i}>
              <CMSLink {...link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
