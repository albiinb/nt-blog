'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/button/Button'
import { Container } from '@/components/container/Container'
import { Icon } from '@/components/icon/Icon'
import { Logo } from '@/components/logo/Logo'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Icons } from '@/utils/icons'

export const Header = () => {
  const links = useMemo(
    () => ({
      info: {
        label: 'Links Group 1',
        items: [
          {
            label: 'Link One',
            path: '/'
          },
          {
            label: 'Link Two',
            path: '/'
          }
        ]
      },
      about: {
        label: 'Links Group 2',
        items: [
          {
            label: 'Link Three',
            path: '/'
          },
          {
            label: 'Link Four',
            path: '/'
          }
        ]
      }
    }),
    []
  )

  return (
    <Container>
      <div className='flex justify-between items-center py-[15px] px-[20px] sm:px-[0px]'>
        <div>
          <Logo size='small' variant='dark' />
        </div>
        <div className='hidden sm:block'>
          <NavigationMenu>
            <NavigationMenuList>
              {Object.values(links).map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[200px] gap-4'>
                      <li>
                        {link.items.map((item) => (
                          <NavigationMenuLink key={item.label} asChild>
                            <Link href={item.path}>{item.label}</Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button className='hidden sm:block'>Get started</Button>
          <div className='block sm:hidden'>
            <Icon icon={Icons.Hamburger} />
          </div>
        </div>
      </div>
    </Container>
  )
}
