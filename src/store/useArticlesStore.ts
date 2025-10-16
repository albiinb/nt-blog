import { v4 } from 'uuid'
import { create } from 'zustand'
import { Article, Nullable } from '@/schema/types'
import { fetchArticles } from '@/service/articles'
import { CATEGORIES, TCategories } from '@/utils/constants'

type ArticleState = {
  articles: Article[]
  lastArticle: Nullable<Article>
  totalResults: number
  category: TCategories
  q: string
  page: number
  isLoading: boolean
  error: Nullable<string>

  fetchArticles: (params: {
    q?: string
    category?: TCategories
    page?: number
    updateLastArticle?: boolean
  }) => Promise<void>

  fetchArticleById: (params: { id: string }) => Nullable<Article>
  setCategory: (category: TCategories) => void
  setPage: (page: number) => void
}

export const useArticlesStore = create<ArticleState>((set, get) => ({
  articles: [],
  lastArticle: null,
  totalResults: 0,
  category: CATEGORIES.business,
  q: '',
  page: 1,
  isLoading: false,
  error: null,

  fetchArticles: async ({
    q = '',
    category = CATEGORIES.business,
    page = 1,
    updateLastArticle = true
  }) => {
    // Weird numbers because of the API :)
    const pageSize = 10

    set({ isLoading: true })

    try {
      const { data } = await fetchArticles({
        q,
        category,
        page,
        pageSize: pageSize
      })

      if (data.status === 'ok') {
        const articles = data.articles.map((article) => ({ ...article, id: v4() }))
        set({
          // Adding custom id because of the API ( does not provide it )
          articles: articles,
          totalResults: data.totalResults,
          category,
          page
        })

        if (updateLastArticle) {
          set({
            lastArticle: articles?.[0]
          })
        }
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
  },

  setCategory(category) {
    set({ category, page: 1 })
    const { q, page, fetchArticles } = get()
    fetchArticles({ q, category, page })
  },

  setPage(page) {
    set({ page })
    const { q, category, fetchArticles } = get()
    fetchArticles({ q, category, page, updateLastArticle: false })
  }
}))
