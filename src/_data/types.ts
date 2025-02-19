import type { Search } from '@payload-types'

export interface QueryResults {
  results: Partial<Search>[]
  totalDocs: number
}
