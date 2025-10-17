'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { AllPostsSection } from '@/components/sections/all-posts/AllPostsSection'
import { useSearchArticles } from '@/hooks/useSearchArticles'
import { useArticlesStore } from '@/store/useArticlesStore'
import { mapPageQuery } from '@/utils/utils'

export const SearchResultsPage = () => {
  const searchParams = useSearchParams()
  const { setQuery, setPage } = useArticlesStore()
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
        title={`Search results: ${searchQuery}`}
        articles={articles}
        isLoading={isLoading}
      />
    </div>
  )
}
