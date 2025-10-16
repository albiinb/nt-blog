import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/button/Button'
import { Container } from '@/components/container/Container'
import { Article } from '@/schema/types'
import { Icons } from '@/utils/icons'
import { truncateText } from '@/utils/utils'

interface LastPostSectionProps {
  article: Article | null
}

export const LatestPostSection: FC<LastPostSectionProps> = ({ article }) => {
  const router = useRouter()

  const onReadMore = () => {
    if (article) router.push(`/post/${article.id}`)
  }

  if (!article) {
    return null
  }

  return (
    <Container>
      <div className='bg-pastel-blue border border-gray rounded-[20px] my-[15px] mx-[20px] sm:mx-[0px] px-[20px] py-[40px] sm:px-[80px] sm:py-[40px]'>
        <div className='flex flex-col-reverse sm:flex-row  justify-center items-center gap-5'>
          <div className='flex-1'>
            {article.urlToImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt='Post image'
                src={article.urlToImage}
                className='w-[450px] h-[350px] object-cover'
              />
            ) : (
              <div
                className='bg-gray w-[450px] h-[350px] flex justify-center items-center text-center'
                style={{ background: '#E1E1E1' }}
              >
                <div>
                  <p className='text-gray font-[700] text-[16px]'>BODY IMAGE</p>
                  <p className='text-gray font-[700] text-[16px]'>PLACEHOLDER FRAME</p>
                </div>
              </div>
            )}
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
  )
}
