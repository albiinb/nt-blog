export type Nullable<T> = T | null

export interface Source {
  id: Nullable<string>
  name: string
}

export interface Article {
  id: string
  source: Source
  author: Nullable<string>
  title: string
  description: Nullable<string>
  url: string
  urlToImage: Nullable<string>
  /** Format: date-time */
  publishedAt: string
  content: string
}

export interface ArticlesSuccessResponse {
  status: 'ok'
  totalResults: number
  articles: Article[]
}

export interface ArticlesErrorResponse {
  status: 'error'
  code: string
  message: string
}

export type ArticlesResponse = ArticlesSuccessResponse | ArticlesErrorResponse
