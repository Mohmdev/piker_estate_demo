import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const amenities = await payload.find({
      collection: 'amenities',
      // Optional query parameters
      depth: 1, // Control how deep to populate relationships
      limit: 100, // Number of items per page
      page: 1, // Page number
      sort: '-updatedAt', // Sort by update date descending
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    return NextResponse.json(amenities)
  } catch (error) {
    console.error('Error fetching amenities:', error)
    return NextResponse.json(
      { error: 'Error fetching amenities' },
      { status: 500 },
    )
  }
}
