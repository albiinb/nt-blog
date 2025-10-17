import { AxiosResponse } from 'axios'
import moment from 'moment'
import instance from '@/lib/axios'
import { ArticlesResponse } from '@/schema/types'

const dateBefore10Days = moment().subtract(10, 'days').format('YYYY-MM-DD')

export interface FetchArticles {
  category: string
  pageSize: number
  page: number
}

export interface SearchArticles {
  query: string
  pageSize: number
  page: number
}

export const fetchArticles = async ({
  category,
  page,
  pageSize
}: FetchArticles): Promise<AxiosResponse<ArticlesResponse>> => {
  return await instance.get<ArticlesResponse>(
    `v2/top-headlines?category=${category}&page=${page}&pageSize=${pageSize}`
  )
}

export const searchArticles = async ({
  query,
  page,
  pageSize
}: SearchArticles): Promise<AxiosResponse<ArticlesResponse>> => {
  return await instance.get<ArticlesResponse>(
    `v2/everything?q=${query}&page=${page}&pageSize=${pageSize}&from=${dateBefore10Days}`
  )
}
