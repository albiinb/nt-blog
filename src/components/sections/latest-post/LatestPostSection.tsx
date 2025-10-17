import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/button/Button'
import { Container } from '@/components/container/Container'
import { Image } from '@/components/image/Image'
import { Skeleton } from '@/components/ui/skeleton'
import { Article, Nullable } from '@/schema/types'
import { Icons } from '@/utils/icons'
import { truncateText } from '@/utils/utils'

interface LastPostSectionProps {
  article: Nullable<Article> | undefined
  isLoading: boolean
}

export const LatestPostSection: FC<LastPostSectionProps> = ({ article, isLoading }) => {
  const router = useRouter()

  const onReadMore = () => {
    if (article) router.push(`/post/${article.id}`)
  }

  if (isLoading) {
    return (
      <Container>
        <div className='mx-[20px] sm:mx-[0px]'>
          <Skeleton className='w-full h-[500px]' />
        </div>
      </Container>
    )
  }

  return (
    <>
      {article && (
        <Container>
          <div className='bg-pastel-blue border border-gray rounded-[20px] my-[15px] mx-[20px] sm:mx-[0px] px-[20px] py-[40px] sm:px-[80px] sm:py-[40px]'>
            <div className='flex flex-col-reverse sm:flex-row  justify-center items-center gap-5'>
              <div className='flex-1'>
                <Image
                  src={article.urlToImage}
                  alt='Last article cover image'
                  sizeClassName='w-full w-[450px] h-[350px]'
                />
              </div>
              <div className='flex-1 flex-col justify-between'>
                <div className='bg-primary text-center rounded-[10px] p-[8px] max-w-[100px] mb-[15px] hidden sm:block'>
                  <p className='text-[12px] font-[600] text-white'>6 min read</p>
                </div>
                <h1 className='font-[700] text-antracite text-[24px] mb-[15px]'>
                  {article.title}
                </h1>
                <p className='mb-[15px]'>{truncateText(article.content)}</p>
                <Button icon={Icons.ChevronRight} onClick={onReadMore}>
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  )
}
