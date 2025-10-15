import { v4 } from 'uuid'
import { create } from 'zustand'
import { Article, Nullable } from '@/schema/types'
import { fetchArticles } from '@/service/articles'
import { CATEGORIES, TCategories } from '@/utils/constants'

type ArticleState = {
  articles: Article[]
  totalResults: number
  category: Nullable<TCategories>
  q: string
  page: number
  isLoading: boolean
  error: Nullable<string>

  fetchArticles: (params: {
    q?: string
    category?: TCategories
    page?: number
  }) => Promise<void>

  fetchArticleById: (params: { id: string }) => Nullable<Article>
}

export const useArticlesStore = create<ArticleState>((set, get) => ({
  articles: [],
  totalResults: 0,
  category: CATEGORIES.general,
  q: '',
  page: 1,
  isLoading: false,
  error: null,

  fetchArticles: async ({ q = '', category = CATEGORIES.general, page = 1 }) => {
    // Weird numbers because of the API :)
    const pageSize = page === 1 ? 13 : 12

    set({ isLoading: true })

    try {
      const { data } = await fetchArticles({
        q,
        category,
        page,
        pageSize: pageSize
      })

      if (data.status === 'ok') {
        set({
          // Adding custom id because of the API ( does not provide it )
          articles: data.articles.map((article) => ({ ...article, id: v4() })),
          totalResults: data.totalResults,
          category,
          page
        })
      } else {
        console.error('Error fetching articles:', data.message)
        set({
          error: data.message
        })
      }
    } catch (err: any) {
      console.error('Fetch error:', err)
      set({
        error: err?.data?.message
      })
    } finally {
      set({ isLoading: false })
    }
  },

  fetchArticleById({ id }) {
    const state = get()
    const article = state.articles.find((a) => a.id === id)
    if (article) {
      return article
    }
    return null
  }
}))
