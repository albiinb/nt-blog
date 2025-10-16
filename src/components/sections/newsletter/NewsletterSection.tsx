import { useState } from 'react'
import { Formik } from 'formik'
import { Button } from '@/components/button/Button'
import { Container } from '@/components/container/Container'
import { Input } from '@/components/input/Input'
import { ModalDialog } from '@/components/modal-dialog/ModalDialog'
import { emailSchema, validate } from '@/lib/yup'
import { SubscribeSuccessModal } from './modal/SubscribeSuccessModal'

const validationSchema = validate({
  email: emailSchema
})

export const NewsletterSection = () => {
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(true)
  const [initialValues, setInitialValues] = useState<{ email: string }>({ email: '' })

  const onSubmit = (values: { email: string }) => {
    setSuccessModalOpen(true)
    setInitialValues(values)
  }

  const onModalClose = (value: boolean) => {
    setSuccessModalOpen(value)
    setInitialValues({ email: '' })
  }

  return (
    <>
      <div className='bg-dark-blue py-[70px] text-center text-white border-t-6 border-primary'>
        <Container>
          <div className='p-[20px] sm:p-0'>
            <h1 className='font-[700] text-[32px] sm:text-[48px]'>
              Never miss out our <span className='text-primary'>latest news</span>
            </h1>
            <div className='my-[30px]'>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                enableReinitialize
              >
                {({ handleSubmit, isSubmitting, isValid }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className='flex justify-center items-center'>
                      <div className='relative'>
                        <Input
                          name='email'
                          label='Email address'
                          disabled={isSubmitting}
                          style={{ width: '400px' }}
                        />
                        <div className='static sm:absolute sm:right-[-59px] sm:top-0 '>
                          <Button
                            type='submit'
                            disabled={isSubmitting || !isValid}
                            className='mt-[15px] sm:mt-0'
                            full
                          >
                            Sign up
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            <p>By submitting this form, you will receive emails from Native Teams.</p>
            <p>For details, view our Privacy Policy.</p>
          </div>
        </Container>
      </div>
      <ModalDialog open={successModalOpen} setOpen={onModalClose}>
        <SubscribeSuccessModal />
      </ModalDialog>
    </>
  )
}
