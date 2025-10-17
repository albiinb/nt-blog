import moment from 'moment'
import { toast } from 'sonner'
import { CATEGORIES, TCategory } from './constants'

export const capitalizeFirstLetter = (text: string) => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export const truncateText = (text: string, maxLength: number = 180) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const formatDateLong = (date: string | Date) => {
  if (!date) return ''
  return moment(date).format('MMMM D, YYYY')
}

export const mapCategoryQuery = (category?: string | null): TCategory => {
  switch (category?.toLowerCase()) {
    case 'business':
      return CATEGORIES.business
    case 'sports':
      return CATEGORIES.sports
    case 'technology':
      return CATEGORIES.technology
    case 'entertainment':
      return CATEGORIES.entertainment
    case 'health':
      return CATEGORIES.health
    case 'science':
      return CATEGORIES.science
    default:
      return CATEGORIES.business
  }
}

export const mapPageQuery = (page?: string | null): number => {
  return parseInt(page ?? '1')
}

export const showError = (message?: string) => {
  toast.error(`${message ? message : 'Failed to load articles'}`, {
    duration: Infinity,
    closeButton: true
  })
}
