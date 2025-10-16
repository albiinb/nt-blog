'use client'

import { FC } from 'react'
import { Button } from '@/components/button/Button'
import { Container } from '@/components/container/Container'
import { ReactComponent as IconPurple } from '@/assets/images/nt_icon_purple.svg'
import { ReactComponent as IconWhite } from '@/assets/images/nt_icon_white.svg'

interface InfoSectionProps {
  theme?: 'light' | 'dark'
}

export const InfoSection: FC<InfoSectionProps> = ({ theme = 'light' }) => {
  const IconComponent = theme === 'dark' ? IconWhite : IconPurple

  const colors = {
    ...(theme === 'dark' && { className: 'bg-midnight-blue text-white' }),
    ...(theme === 'light' && { className: 'bg-pastel-blue text-antracite' })
  }

  return (
    <div
      className={`${colors.className} py-[80px] sm:py-[120px] text-center mt-[60px] sm:mt-[100px] relative`}
    >
      <IconComponent className='hidden sm:block absolute h-full w-auto top-0 left-0 bottom-0' />
      <Container>
        <div className='p-[20px] sm:p-0'>
          <h1 className='font-[700] text-[32px] sm:text-[48px]'>
            Explore Native Teams today
          </h1>
          <p className='my-[20px]'>
            Unlock the full potential of your teams and elevate your business or personal
            growth with Native Teams. Explore our platform today and start your journey
            towards success.
          </p>
          <Button className='w-full sm:w-auto'>Learn more</Button>
        </div>
      </Container>
    </div>
  )
}
