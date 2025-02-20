import { CollectionArchive } from '@components/CollectionArchive'
import RichText from '@components/RichText'
import configPromise from '@payload-config'
import type { ArchiveBlock as ArchiveBlockProps, Blog } from '@payload-types'
import { getPayload } from 'payload'
import React from 'react'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
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

  let posts: Blog[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.value
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: 'blog',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posts = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Blog[]

      posts = filteredSelectedPosts
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionArchive
        posts={posts.map((post) => ({
          ...post,
          categories: post.categories?.map((category) =>
            typeof category === 'object'
              ? {
                  relationTo: category.relationTo,
                  value: category.value,
                }
              : category,
          ),
        }))}
        relationTo={
          populateBy === 'collection'
            ? relationTo || 'blog'
            : selectedDocs?.[0]?.relationTo || 'blog'
        }
      />
    </div>
  )
}
