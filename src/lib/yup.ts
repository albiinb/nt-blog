import * as Yup from 'yup'

export const validate = (shape: Yup.ObjectShape) => {
  return Yup.object().shape(shape)
}

export const emailSchema = Yup.string().email('Invalid email').required('Email required')

export default Yup
