'use client'

import { WithSearchParams } from '@/components/search-params/WithSearchParams'
import { SearchResultsPage } from '@/screens/search-results/SearchResultsPage'

export default function SearchResults() {
  return (
    <WithSearchParams>
      {({ searchParams }) => <SearchResultsPage searchParams={searchParams} />}
    </WithSearchParams>
  )
}
