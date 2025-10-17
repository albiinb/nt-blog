'use client'

import { FC } from 'react'
import { ArticleCard } from '@/components/article-card/ArticleCard'
import { Container } from '@/components/container/Container'
import { Pagination } from '@/components/pagination/Pagination'
import { Skeleton } from '@/components/ui/skeleton'
import { Article } from '@/schema/types'

interface Props {
  title: string
  articles: Article[] | undefined
  isLoading: boolean
}

export const AllPostsSection: FC<Props> = ({ title, articles, isLoading }) => {
  return (
    <div className='my-[15px] sm:px-auto px-[20px] sm:px-[0px]'>
      <Container>
        <h1 className='font-[700] text-antracite text-[32px] mb-[30px]'>{title}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {isLoading &&
            Array.from(Array(9).keys()).map((i) => (
              <Skeleton key={i} className='w-full h-[300px]' />
            ))}
          {!isLoading &&
            articles?.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
        </div>
      </Container>
      {!!articles?.length && <Pagination />}
    </div>
  )
}
