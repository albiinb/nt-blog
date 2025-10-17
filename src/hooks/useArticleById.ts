import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Article } from '@/schema/types'
import { useArticlesStore } from '@/store/useArticlesStore'
import { showError } from '@/utils/utils'

export function useArticleById(id: string) {
  const queryClient = useQueryClient()
  const { category, query, page } = useArticlesStore()

  return useQuery<Article | null>({
    queryKey: ['article', id],
    queryFn: async () => {
      const possibleKeys = [
        ['articles', 'category', category, page],
        ['articles', 'search', query, page]
      ]

      for (const key of possibleKeys) {
        const cached = queryClient.getQueryData<Article[]>(key)
        const found = cached?.find((a) => a.id === id)
        if (found) return found
      }

      showError()
      return null
    }
  })
}
