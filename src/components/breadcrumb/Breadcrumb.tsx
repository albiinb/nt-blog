import { FC } from 'react'
import Link from 'next/link'
import { Container } from '../container/Container'
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as UiBreadcrumb
} from '@/components/ui/breadcrumb'

interface BreadcrumbProps {
  currentTab: string
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ currentTab }) => {
  return (
    <Container>
      <div className='px-[20px] sm:px-[0px]'>
        <UiBreadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='/' className='text-midnight-blue'>
                  News
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-primary'>{currentTab}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </UiBreadcrumb>
      </div>
    </Container>
  )
}
