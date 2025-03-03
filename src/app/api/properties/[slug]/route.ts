import { getPropertyBySlug } from '@/_data/real-estate/getProperty'
import { NextResponse } from 'next/server'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params

    if (!slug) {
      return NextResponse.json(
        { error: 'Property slug is required' },
        { status: 400 },
      )
    }

    // Fetch the property using the server-side function
    const property = await getPropertyBySlug({ slug })

    if (!property) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 })
    }

    return NextResponse.json(property)
  } catch (error) {
    console.error('Error in property API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch property' },
      { status: 500 },
    )
  }
}
