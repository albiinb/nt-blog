'use client'

import { FC } from 'react'
import Link from 'next/link'
import { ReactComponent as DarkLogo } from '@/assets/brand/logo_dark.svg'
import { ReactComponent as LightLogo } from '@/assets/brand/logo_light.svg'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'small' | 'regular'
}

export const Logo: FC<LogoProps> = ({ variant = 'light', size = 'regular' }) => {
  const sizeClassName = size === 'regular' ? 'w-[230px] h-[40px]' : 'w-[160px] h-[30px]'

  const LogoComponent = variant === 'dark' ? DarkLogo : LightLogo

  return (
    <Link href='/'>
      <LogoComponent className={`${sizeClassName}`} />
    </Link>
  )
}
