import { useQuery } from '@tanstack/react-query'
import { v4 } from 'uuid'
import { searchArticles } from '@/service/articles'
import { useArticlesStore } from '@/store/useArticlesStore'
import { showError } from '@/utils/utils'

export const PAGE_SIZE = 50

export const useSearchArticles = () => {
  const { query, page, setTotalResults } = useArticlesStore()
  const queryKey = ['articles', 'search', query, page]

  const queryFn = async () => {
    const res = await searchArticles({ query, page, pageSize: PAGE_SIZE })

    if (res.data.status === 'ok') {
      setTotalResults(res.data.totalResults)
      return res.data.articles.map((article) => ({ ...article, id: v4() }))
    } else {
      showError(res?.data?.message)
    }
  }

  return useQuery({
    queryKey,
    queryFn,
    enabled: query.trim() !== ''
  })
}
