import { create } from 'zustand'
import { CATEGORIES, TCategory } from '@/utils/constants'

type ArticleUIState = {
  category: TCategory
  query: string
  page: number
  totalResults: number
  setCategory: (category: TCategory) => void
  setQuery: (query: string) => void
  setPage: (page: number) => void
  setTotalResults: (totalResults: number) => void
}

export const useArticlesStore = create<ArticleUIState>((set) => ({
  category: CATEGORIES.business,
  query: '',
  page: 1,
  totalResults: 0,
  setCategory: (category) => set({ category, page: 1 }),
  setQuery: (query) => set({ query, page: 1 }),
  setPage: (page) => set({ page }),
  setTotalResults: (totalResults) => set({ totalResults })
}))
