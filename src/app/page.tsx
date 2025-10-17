'use client'

import { WithSearchParams } from '@/components/search-params/WithSearchParams'
import { HomePage } from '@/screens/home/HomePage'

export default function Home() {
  return (
    <WithSearchParams>
      {({ searchParams }) => <HomePage searchParams={searchParams} />}
    </WithSearchParams>
  )
}
