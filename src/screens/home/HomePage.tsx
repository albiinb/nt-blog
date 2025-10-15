import { AllPostsSection } from '@/components/sections/all-posts/AllPostsSection'
import { InfoSection } from '@/components/sections/info/InfoSection'
import { LatestPostSection } from '@/components/sections/latest-post/LatestPostSection'
import { NewsletterSection } from '@/components/sections/newsletter/NewsletterSection'
import { SearchSection } from '@/components/sections/search/SearchSection'

export const HomePage = () => {
  return (
    <div>
      <SearchSection />
      <LatestPostSection />
      <AllPostsSection />
      <InfoSection />
      <NewsletterSection />
    </div>
  )
}
