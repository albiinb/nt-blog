'use client'

import { FC, useEffect } from 'react'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { AllPostsSection } from '@/components/sections/all-posts/AllPostsSection'
import { useSearchArticles } from '@/hooks/useSearchArticles'
import { useArticlesStore } from '@/store/useArticlesStore'
import { mapPageQuery } from '@/utils/utils'

interface Props {
  searchParams: ReadonlyURLSearchParams
}

export const SearchResultsPage: FC<Props> = ({ searchParams }) => {
  const { query, setQuery, setPage } = useArticlesStore()
  const { data: articles, isLoading } = useSearchArticles()

  const searchQuery = searchParams.get('query')
  const pageQuery = searchParams.get('page')

  useEffect(() => {
    if (searchQuery) {
      setQuery(searchQuery)
    }
    setPage(mapPageQuery(pageQuery))
  }, [searchQuery, pageQuery, setQuery, setPage])

  return (
    <div>
      <AllPostsSection
        title={`Search results: ${query}`}
        articles={articles}
        isLoading={isLoading}
      />
    </div>
  )
}
