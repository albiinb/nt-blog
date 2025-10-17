'use client'

import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb'
import { Container } from '@/components/container/Container'
import { Image } from '@/components/image/Image'
import { AuthorSection } from '@/components/sections/author/AuthorSection'
import { InfoSection } from '@/components/sections/info/InfoSection'
import { useArticleById } from '@/hooks/useArticleById'
import { formatDateLong } from '@/utils/utils'

export const PostDetailsPage = ({ id }: { id: string }) => {
  const { data: article } = useArticleById(id)

  return (
    <>
      {article && (
        <>
          <Breadcrumb currentTab={article.title} />
          <Container>
            <div className='px-[20px] sm:px-[0px] text-center mt-[20px] sm:mt-[60px]'>
              <h1 className='font-[700] text-[28px] sm:text-[48px] text-antracite'>
                {article.title}
              </h1>
              <p className='font-[400] text-[16px] text-antracite'>
                {formatDateLong(article.publishedAt)} | {'6 min read'}
              </p>
              <div className='mt-[20px] sm:mt-[60px]'>
                <Image
                  src={article.urlToImage}
                  alt='Article cover image'
                  sizeClassName='w-full h-[400px] sm:h-[600px]'
                />
              </div>
              <div className='my-[25px] text-left'>
                <p>{article.content}</p>
              </div>
            </div>
          </Container>
          <AuthorSection author={article.author} />
          <InfoSection theme='dark' />
        </>
      )}
    </>
  )
}
