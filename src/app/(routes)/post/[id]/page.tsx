import { PostDetailsPage } from '@/screens/post-details/PostDetailsPage'

export default async function PostDetails({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <PostDetailsPage id={id} />
}
