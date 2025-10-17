import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/button/Button'
import { Container } from '@/components/container/Container'
import { useArticlesStore } from '@/store/useArticlesStore'
import { CATEGORIES, TCategory } from '@/utils/constants'
import { capitalizeFirstLetter } from '@/utils/utils'

export const Categories = () => {
  const { setCategory, category } = useArticlesStore()
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateCategoryParam = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', category)
    params.delete('page')
    router.push(`?${params.toString()}`)
  }

  const onChangeCategory = (category: TCategory) => {
    setCategory(category)
    updateCategoryParam(category)
  }

  return (
    <Container>
      <div className='flex justify-start items-center gap-4 my-[15px] px-[20px] sm:px-[0px] overflow-x-auto'>
        {Object.values(CATEGORIES).map((c) => (
          <Button
            key={c}
            onClick={() => onChangeCategory(c)}
            variant={c === category ? 'default' : 'secondary'}
          >
            {capitalizeFirstLetter(c)}
          </Button>
        ))}
      </div>
    </Container>
  )
}
