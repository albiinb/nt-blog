'use client'

import { ReactComponent as NtIcon } from '@/assets/images/nt_icon.svg'

export const SubscribeSuccessModal = () => {
  return (
    <div className='text-center text-black p-[20px] flex justify-center flex-col items-center'>
      <NtIcon className='w-[200px] h-[200px]' />
      <h1 className='font-[700] text-[24px] my-[20px]'>
        Thank you <br />
        for signing up!
      </h1>
      <p>
        Your email has been added to our list. <br />
        Stay tuned for more news, and be the first to hear from us.
      </p>
    </div>
  )
}
