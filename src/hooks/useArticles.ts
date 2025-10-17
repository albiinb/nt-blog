import { useQuery } from '@tanstack/react-query'
import { v4 } from 'uuid'
import { fetchArticles } from '@/service/articles'
import { useArticlesStore } from '@/store/useArticlesStore'
import { showError } from '@/utils/utils'

export const PAGE_SIZE = 10

export const useArticles = () => {
  const { category, page, setTotalResults } = useArticlesStore()

  const queryKey = ['articles', 'category', category, page]

  const queryFn = async () => {
    try {
      const res = await fetchArticles({ category, page, pageSize: PAGE_SIZE })
      if (res.data.status === 'ok') {
        setTotalResults(res.data.totalResults)
        return res.data.articles.map((article) => ({ ...article, id: v4() }))
      } else {
        showError(res?.data?.message)
      }
    } catch (error: any) {
      showError(error?.response?.data?.message)
    }
  }

  return useQuery({
    queryKey,
    queryFn
  })
}
