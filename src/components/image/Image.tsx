import { FC } from 'react'
import { Nullable } from '@/schema/types'

interface ImageProps {
  src: Nullable<string>
  alt?: string
  sizeClassName: string
}

export const Image: FC<ImageProps> = ({
  src,
  alt = 'Image',
  sizeClassName = 'w-full h-full'
}) => {
  return (
    <div>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={alt} src={src} className={`${sizeClassName} object-cover`} />
      ) : (
        <div
          className={`bg-gray ${sizeClassName} flex justify-center items-center text-center`}
          style={{ background: '#E1E1E1' }}
        >
          <div>
            <p className='text-gray font-[700] text-[16px]'>BODY IMAGE</p>
            <p className='text-gray font-[700] text-[16px]'>PLACEHOLDER FRAME</p>
          </div>
        </div>
      )}
    </div>
  )
}
