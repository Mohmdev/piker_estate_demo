'use client'

/**
 * Client-side API functions for fetching properties
 * These functions use fetch instead of direct Payload API calls
 * to avoid server component dependencies
 */

// Define a more flexible type for the where clause
type WhereClause = Record<string, unknown>

// Client-side function to fetch properties
export const fetchProperties = async ({
  where = {},
  limit = 12,
  page = 1,
  sort = '-createdAt',
}: {
  where?: WhereClause
  limit?: number
  page?: number
  sort?: string
}) => {
  try {
    // Convert the where object to a query string
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      sort,
      where: JSON.stringify(where),
    })

    // Fetch from the API route
    const response = await fetch(`/api/properties?${params.toString()}`)

    if (!response.ok) {
      throw new Error(`Error fetching properties: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching properties:', error)
    return {
      docs: [],
      totalDocs: 0,
      page,
      totalPages: 0,
      hasNextPage: false,
      hasPrevPage: false,
    }
  }
}

// Client-side function to fetch a single property by slug
export const fetchPropertyBySlug = async (slug: string) => {
  try {
    const response = await fetch(`/api/properties/${slug}`)

    if (!response.ok) {
      throw new Error(`Error fetching property: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching property:', error)
    return null
  }
}
