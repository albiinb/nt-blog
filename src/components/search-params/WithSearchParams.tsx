'use client'

import { ReactNode, Suspense } from 'react'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'

type WithSearchParamsProps = {
  children: (args: { searchParams: ReadonlyURLSearchParams }) => ReactNode
}

const Node = ({ children }: WithSearchParamsProps) => {
  const searchParams = useSearchParams()

  if (searchParams) return <>{children({ searchParams })}</>
}

export const WithSearchParams = ({ children }: WithSearchParamsProps) => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Node>{children}</Node>
    </Suspense>
  )
}
