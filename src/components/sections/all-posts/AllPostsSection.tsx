'use client'

import { FC } from 'react'
import { ArticleCard } from '@/components/article-card/ArticleCard'
import { Container } from '@/components/container/Container'
import { Pagination } from '@/components/pagination/Pagination'
import { Article } from '@/schema/types'

interface Props {
  title: string
  articles: Article[]
}

export const AllPostsSection: FC<Props> = ({ title, articles }) => {
  return (
    <>
      <div className='my-[15px] px-[30px] sm:px-auto'>
        <Container>
          <h1 className='font-[700] text-antracite text-[32px] mb-[30px]'>{title}</h1>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </div>
      {!!articles.length && <Pagination />}
    </>
  )
}
