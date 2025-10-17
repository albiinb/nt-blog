import { useQueryClient } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../button/Button'
import { Container } from '../container/Container'
import { PAGE_SIZE } from '@/hooks/useArticles'
import { useArticlesStore } from '@/store/useArticlesStore'

export const Pagination = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { totalResults, page, setPage } = useArticlesStore()
  const queryClient = useQueryClient()

  const maxPages = parseInt(Math.max(totalResults / PAGE_SIZE).toFixed())

  const updatePageParam = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`?${params.toString()}`)
    queryClient.invalidateQueries({
      queryKey: ['articles']
    })
  }

  const onPrev = () => {
    setPage(page - 1)
    updatePageParam(page - 1)
  }

  const onNext = () => {
    setPage(page + 1)
    updatePageParam(page + 1)
  }

  const onPage = (page: number) => {
    setPage(page)
    updatePageParam(page)
  }

  return (
    <Container>
      <div className='flex justify-between items-center my-[15px] overflow-x-auto'>
        <div>
          <Button
            variant='ghost'
            disabled={page === 1}
            onClick={onPrev}
            className='text-primary'
          >
            Previous
          </Button>
        </div>
        <div className='flex gap-2'>
          {[...Array(maxPages).keys()].map((i) => (
            <Button
              key={i}
              variant={page === i + 1 ? 'default' : 'link'}
              onClick={() => onPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
        <div>
          <Button
            variant='ghost'
            disabled={page === maxPages}
            onClick={onNext}
            className='text-primary'
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  )
}
