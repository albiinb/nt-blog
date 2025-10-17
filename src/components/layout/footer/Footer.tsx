'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container/Container'
import { Icon } from '@/components/icon/Icon'
import { Logo } from '@/components/logo/Logo'
import { Icons } from '@/utils/icons'

export const Footer = () => {
  const [visibleSection, setVisibleSection] = useState<string>('')

  const links = useMemo(
    () => [
      {
        label: 'PLATFORM',
        items: [
          {
            label: 'Employer of Record',
            path: '/'
          },
          {
            label: 'PEO Services',
            path: '/'
          },
          {
            label: 'Company as a Service',
            path: '/'
          },
          {
            label: 'Work Payments',
            path: '/'
          },
          {
            label: 'Global Payroll',
            path: '/'
          },
          {
            label: 'Tax Management',
            path: '/'
          },
          {
            label: 'Expenses Management',
            path: '/'
          }
        ]
      },
      {
        label: 'INFORMATION',
        items: [
          {
            label: 'Legal Entity',
            path: '/'
          },
          {
            label: 'Client Invoicing',
            path: '/'
          },
          {
            label: 'Payment Requests',
            path: '/'
          },
          {
            label: 'Global Mobility',
            path: '/'
          },
          {
            label: 'Employees Benefits',
            path: '/'
          },
          {
            label: 'For Startups',
            path: '/'
          }
        ]
      },
      {
        label: 'COMPANY',
        items: [
          {
            label: 'About',
            path: '/'
          },
          {
            label: 'Our Countries',
            path: '/'
          },
          {
            label: 'Affiliates',
            path: '/'
          },
          {
            label: 'Partnerships',
            path: '/'
          },
          {
            label: 'Charity',
            path: '/'
          },
          {
            label: 'Data & Security',
            path: '/'
          },
          {
            label: 'Book a demo',
            path: '/'
          },
          {
            label: 'Contact',
            path: '/'
          }
        ]
      }
    ],
    []
  )

  const onToggleSection = (section: string) => {
    if (visibleSection === section) {
      setVisibleSection('')
    } else {
      setVisibleSection(section)
    }
  }

  return (
    <div className='bg-dark-blue text-light-purple'>
      <Container>
        <div className='py-[40px] sm:py-[100px] px-[20px] sm:px-0'>
          <div className='flex justify-between items-start flex-col sm:flex-row gap-4'>
            <div>
              <Logo variant='light' />
            </div>
            {links.map(({ label, items }) => (
              <div key={label}>
                <div className='flex gap-2 items-center mb-[12px]'>
                  <p className='text-white '>{label}</p>
                  <div
                    className='block sm:hidden cursor-pointer'
                    onClick={() => onToggleSection(label)}
                  >
                    <Icon icon={Icons.ChevronDown} size={18} />
                  </div>
                </div>
                <ul className={visibleSection === label ? 'block' : 'hidden sm:block'}>
                  {items.map(({ label, path }) => (
                    <li key={label}>
                      <Link href={path}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className='border-t-1 border-0 border-gray' />
      <Container>
        <div className='text-gray text-[12px] flex flex-col-reverse sm:flex-row gap-4 justify-between items-center pt-[16px] pb-[50px]'>
          <p>© Native Teams Limited</p>
          <div className='flex justify-evenly items-center gap-2'>
            <p>Cookie Policy</p>
            <p>|</p>
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms & Conditions</p>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  )
}
