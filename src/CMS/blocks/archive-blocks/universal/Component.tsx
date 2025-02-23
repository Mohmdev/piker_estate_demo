import type { CardPostData } from '@components/Card'
import { CollectionArchive } from '@components/CollectionArchive'
import RichText from '@components/RichText'
import configPromise from '@payload-config'
import type { UniversalArchiveBlock as Props } from '@payload-types'
import { getPayload } from 'payload'
import React from 'react'

export const UniversalArchiveBlock: React.FC<
  Props & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    relationTo,
  } = props

  const limit = limitFromProps || 3

  let posts: CardPostData[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const collectionToFetch =
      populateBy === 'collection' ? relationTo : selectedDocs?.[0]?.relationTo

    // Simplified where clause that works across all collections
    const whereClause = categories?.length
      ? {
          'categories.value': {
            in: categories.map((cat) =>
              typeof cat.value === 'object' ? cat.value.id : cat.value,
            ),
          },
        }
      : undefined

    const fetchedPosts = await payload.find({
      collection: collectionToFetch || 'blog',
      depth: 1,
      limit,
      where: whereClause,
    })

    posts = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as CardPostData[]

      posts = filteredSelectedPosts
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText
            className="ms-0 max-w-[48rem]"
            data={introContent}
            enableGutter={false}
          />
        </div>
      )}
      <CollectionArchive posts={posts} />
    </div>
  )
}
