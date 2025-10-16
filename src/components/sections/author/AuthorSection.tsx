import { FC } from 'react'
import Image from 'next/image'
import { Container } from '@/components/container/Container'
import Avatar from '@/assets/images/author_avatar.jpg'
import { Nullable } from '@/schema/types'

interface AuthorSectionProps {
  author: Nullable<string>
}

export const AuthorSection: FC<AuthorSectionProps> = ({ author }) => {
  return (
    <>
      {author && (
        <Container>
          <div className='px-[20px] sm:px-[0px] relative mt-[120px]'>
            <div className='absolute -top-[50px] sm:-top-[75px] left-0 right-0 flex justify-center'>
              <Image
                src={Avatar.src}
                width={150}
                height={150}
                className='object-cover w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-[100px]'
                alt='Author avatar image'
                style={{ boxShadow: '#5152FB -5px 7px 1px' }}
              />
            </div>
            <div className='bg-dark-blue text-white rounded-[20px] w-full py-[60px] p-[20px] flex flex-col justify-center items-center '>
              <h1 className='font-[700] text-[24px] sm:text-[32px] mt-[40px]'>
                {author}
              </h1>
              <h3 className='font-[700] text-[12px] sm:text-[16px]'>AUTHOR</h3>
              <p className='mt-[20px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </Container>
      )}
    </>
  )
}
