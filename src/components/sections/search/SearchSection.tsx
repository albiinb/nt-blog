'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Formik } from 'formik'
import { Button } from '@/components/button/Button'
import { Container } from '@/components/container/Container'
import { Input } from '@/components/input/Input'

export const SearchSection = () => {
  const router = useRouter()
  const [initialValues, setInitialValues] = useState<{ query: string }>({ query: '' })

  const onSubmit = ({ query }: { query: string }) => {
    setInitialValues({ query })
    router.push(`/search?query=${query}`)
  }

  return (
    <Container>
      <div className='px-[20px] sm:px-[0px] my-[60px]'>
        <div className='flex flex-col justify-center items-center text-center gap-[12px]'>
          <h1 className='font-[700] text-[20px] sm:text-[32px] text-primary'>
            Native Teams Blog
          </h1>
          <h1 className='font-[700] text-[32px] sm:text-[48px] text-antracite'>
            Resources, Tips and Tricks About the Modern Way of Working
          </h1>
          <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
              {({ handleSubmit, isSubmitting, isValid }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <div className='flex justify-center items-center'>
                    <div className='relative'>
                      <Input
                        name='query'
                        label='Search for posts'
                        disabled={isSubmitting}
                        style={{ width: '400px', height: '40px' }}
                      />
                      <div className='static sm:absolute sm:right-[-59px] sm:top-0 '>
                        <Button
                          type='submit'
                          disabled={isSubmitting || !isValid}
                          className='mt-[15px] sm:mt-0'
                          full
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Container>
  )
}
