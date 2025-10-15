import { AxiosResponse } from 'axios'
import instance from '@/lib/axios'
import { ArticlesResponse } from '@/schema/types'

export interface FetchArticles {
  q: string
  category: string
  pageSize: number
  page: number
}

export const fetchArticles = async ({
  q,
  category,
  page,
  pageSize
}: FetchArticles): Promise<AxiosResponse<ArticlesResponse>> => {
  return await instance.get<ArticlesResponse>(
    `v2/top-headlines?q=${q}&category=${category}&page=${page}&pageSize=${pageSize}`
  )
}
