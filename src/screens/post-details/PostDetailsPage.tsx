import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb'
import { AuthorSection } from '@/components/sections/author/AuthorSection'
import { InfoSection } from '@/components/sections/info/InfoSection'

export const PostDetailsPage = ({ id }: { id: string }) => {
  return (
    <div>
      <Breadcrumb />
      <h1>This is Post Details Page: {id}</h1>
      <AuthorSection />
      <InfoSection />
    </div>
  )
}
