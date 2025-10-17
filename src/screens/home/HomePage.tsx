'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Categories } from '@/components/categories/Categories'
import { AllPostsSection } from '@/components/sections/all-posts/AllPostsSection'
import { InfoSection } from '@/components/sections/info/InfoSection'
import { LatestPostSection } from '@/components/sections/latest-post/LatestPostSection'
import { NewsletterSection } from '@/components/sections/newsletter/NewsletterSection'
import { SearchSection } from '@/components/sections/search/SearchSection'
import { useArticles } from '@/hooks/useArticles'
import { useArticlesStore } from '@/store/useArticlesStore'
import { mapCategoryQuery, mapPageQuery } from '@/utils/utils'

export const HomePage = () => {
  const searchParams = useSearchParams()
  const { setCategory, setPage, setQuery } = useArticlesStore()
  const { data: articles, isLoading } = useArticles()

  const categoryQuery = searchParams.get('category')
  const pageQuery = searchParams.get('page')

  useEffect(() => {
    setCategory(mapCategoryQuery(categoryQuery))
    setPage(mapPageQuery(pageQuery))
    if (!categoryQuery) setQuery('')
  }, [categoryQuery, pageQuery, setCategory, setPage, setQuery])

  return (
    <div>
      <SearchSection />
      <Categories />
      <LatestPostSection article={articles?.[0]} isLoading={isLoading} />
      <AllPostsSection
        title='News posts'
        articles={articles?.slice(1)}
        isLoading={isLoading}
      />
      <InfoSection />
      <NewsletterSection />
    </div>
  )
}
