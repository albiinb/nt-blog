import { Button } from '../button/Button'
import { Container } from '../container/Container'
import { useArticlesStore } from '@/store/useArticlesStore'

export const Pagination = () => {
  const { page, totalResults, setPage } = useArticlesStore()

  const maxPages = parseInt(Math.max(totalResults / 10).toFixed())

  const onPrev = () => {
    setPage(page - 1)
  }

  const onNext = () => {
    setPage(page + 1)
  }

  const onPage = (page: number) => {
    setPage(page)
  }

  return (
    <Container>
      <div className='flex justify-between items-center my-[15px]'>
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
