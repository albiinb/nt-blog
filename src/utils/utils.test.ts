import moment from 'moment'
import { CATEGORIES } from './constants'
import {
  capitalizeFirstLetter,
  formatDateLong,
  mapCategoryQuery,
  mapPageQuery,
  truncateText
} from './utils'

describe('utils', () => {
  describe('capitalizeFirstLetter', () => {
    it('capitalizes first letter', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello')
    })
    it('returns empty string for empty input', () => {
      expect(capitalizeFirstLetter('')).toBe('')
    })
  })

  describe('truncateText', () => {
    it('truncates long text with ellipsis', () => {
      const text = 'a'.repeat(200)
      expect(truncateText(text, 50)).toBe('a'.repeat(50) + '...')
    })
    it('returns same text if shorter than maxLength', () => {
      const text = 'short text'
      expect(truncateText(text, 50)).toBe(text)
    })
  })

  describe('formatDateLong', () => {
    it('formats date correctly', () => {
      const date = '2025-10-07'
      expect(formatDateLong(date)).toBe(moment(date).format('MMMM D, YYYY'))
    })
    it('returns empty string for falsy input', () => {
      expect(formatDateLong('')).toBe('')
    })
  })

  describe('mapCategoryQuery', () => {
    it('maps valid category', () => {
      expect(mapCategoryQuery('sports')).toBe(CATEGORIES.sports)
    })
    it('defaults to business for unknown or undefined', () => {
      expect(mapCategoryQuery('unknown')).toBe(CATEGORIES.business)
      expect(mapCategoryQuery(undefined)).toBe(CATEGORIES.business)
    })
  })

  describe('mapPageQuery', () => {
    it('parses valid page number', () => {
      expect(mapPageQuery('5')).toBe(5)
    })
    it('defaults to 1 if undefined', () => {
      expect(mapPageQuery(undefined)).toBe(1)
    })
  })
})
