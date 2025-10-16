import { Button } from '@/components/button/Button'
import { Container } from '@/components/container/Container'
import { useArticlesStore } from '@/store/useArticlesStore'
import { CATEGORIES, TCategories } from '@/utils/constants'
import { capitalizeFirstLetter } from '@/utils/utils'

export const Categories = () => {
  const { category: selectedCategory, setCategory } = useArticlesStore()

  const onChangeCategory = (category: TCategories) => {
    setCategory(category)
  }

  return (
    <Container>
      <div className='flex justify-start items-center gap-4 my-[15px] px-[20px] sm:px-[0px]'>
        {Object.values(CATEGORIES).map((category) => (
          <Button
            key={category}
            onClick={() => onChangeCategory(category)}
            variant={category === selectedCategory ? 'default' : 'secondary'}
          >
            {capitalizeFirstLetter(category)}
          </Button>
        ))}
      </div>
    </Container>
  )
}
