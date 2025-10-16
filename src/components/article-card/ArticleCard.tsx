import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../button/Button'
import { Image } from '../image/Image'
import { Article } from '@/schema/types'
import { Icons } from '@/utils/icons'

interface ArticleCardProps {
  article: Article
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const router = useRouter()

  const onReadMore = (id: string) => {
    router.push(`/post/${id}`)
  }

  return (
    <div className='rounded-[15px] bg-white border-black'>
      <Image
        src={article.urlToImage}
        alt='Article cover image'
        sizeClassName='w-full h-[220px] rounded-t-[15px]'
      />
      <div className='border border-t-0 border-black rounded-b-[15px] relative'>
        <div
          className='bg-primary rounded-e-[10px] p-[8px] max-w-[100px]'
          style={{ position: 'absolute', top: -20, left: -1 }}
        >
          <p className='text-[12px] font-[600] text-white'>6 min read</p>
        </div>
        <div className='p-[15px]'>
          <h1 className='font-[700] text-[18px] text-antracite py-[15px]'>
            {article.title}
          </h1>
          <Button icon={Icons.ChevronRight} onClick={() => onReadMore(article.id)}>
            Read more
          </Button>
        </div>
      </div>
    </div>
  )
}
