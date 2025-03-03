import { getProperties } from '@/_data/real-estate/getProperty'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl

    // Parse query parameters
    const limit = parseInt(searchParams.get('limit') || '12', 10)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const sort = searchParams.get('sort') || '-createdAt'
    const whereParam = searchParams.get('where')

    // Parse the where clause if provided
    const where = whereParam ? JSON.parse(whereParam) : undefined

    // Fetch properties using the server-side function
    const result = await getProperties({
      limit,
      page,
      sort,
      where,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in properties API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 },
    )
  }
}
