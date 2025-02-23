import { ListingArchiveBlock } from '@CMS/blocks/archive-blocks/real-estate/ListingArchiveBlock'
import { ListingBlock } from '@CMS/blocks/archive-blocks/real-estate/ListingBlock'
import { UniversalArchiveBlock } from '@CMS/blocks/archive-blocks/universal/Component'
import { CallToActionBlock } from '@blocks/CallToAction/Component'
import { ContentBlock } from '@blocks/Content/Component'
import { FormBlock } from '@blocks/Form/Component'
import { MediaBlock } from '@blocks/MediaBlock/Component'
import type { Config } from '@payload-types'
import React, { Fragment } from 'react'
import { BannerBlock } from './Banner/Component'
import { CodeBlock } from './Code/Component'
import { BlogArchiveBlock } from './archive-blocks/blog/Component'

type BlockTypes = Config['blocks']
type Block = BlockTypes[keyof BlockTypes]

const blockComponents = {
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  banner: BannerBlock,
  code: CodeBlock,
  // Archive blocks
  'universal-archive': UniversalArchiveBlock,
  'blog-archive': BlogArchiveBlock,
  listingBlock: ListingBlock,
  listingArchiveBlock: ListingArchiveBlock,
} as const

export const RenderBlocks: React.FC<{
  blocks: Block[] | null | undefined
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error: Different block types have different props */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
