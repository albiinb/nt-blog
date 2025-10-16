import { ComponentProps, FC, HTMLInputTypeAttribute } from 'react'
import { useField } from 'formik'
import { Input as UiInput } from '@/components/ui/input'

interface IInputProps extends ComponentProps<'input'> {
  name: string
  type?: HTMLInputTypeAttribute
  label?: string
  placeholder?: string
  required?: boolean
  info?: string
}

export const Input: FC<IInputProps> = ({
  name,
  type = 'text',
  label,
  placeholder,
  required,
  ...props
}) => {
  const [field, meta] = useField({ name, ...props })

  return (
    <div>
      <UiInput
        id={name}
        {...field}
        type={type}
        placeholder={placeholder || label}
        required={required}
        className='bg-light rounded-[55px] shadow-none border-none focus-visible:ring-0 text-antracite ps-[26px] px-[12px]'
        {...props}
      />
      {meta.touched && meta.error && (
        <p className='text-sm text-red-500 mt-1'>{meta.error}</p>
      )}
    </div>
  )
}
