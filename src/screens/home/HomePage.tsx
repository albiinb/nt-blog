'use client'

import { useEffect } from 'react'
import { Categories } from '@/components/categories/Categories'
import { AllPostsSection } from '@/components/sections/all-posts/AllPostsSection'
import { InfoSection } from '@/components/sections/info/InfoSection'
import { LatestPostSection } from '@/components/sections/latest-post/LatestPostSection'
import { NewsletterSection } from '@/components/sections/newsletter/NewsletterSection'
import { SearchSection } from '@/components/sections/search/SearchSection'
import { useArticlesStore } from '@/store/useArticlesStore'

export const HomePage = () => {
  const { articles, fetchArticles } = useArticlesStore()

  useEffect(() => {
    fetchArticles({})
  }, [fetchArticles])

  return (
    <div>
      <SearchSection />
      <Categories />
      <LatestPostSection />
      <AllPostsSection title='News posts' articles={articles.slice(1)} />
      <InfoSection />
      <NewsletterSection />
    </div>
  )
}
