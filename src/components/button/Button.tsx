import { FC, ReactNode } from 'react'
import { Icon, IconType } from '../icon/Icon'
import { Button as UiButton } from '@/components/ui/button'

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  className?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  full?: boolean
  icon?: IconType
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<IButtonProps> = ({
  type,
  children,
  className,
  variant,
  size = 'lg',
  disabled,
  full,
  icon,
  onClick
}) => {
  return (
    <UiButton
      onClick={onClick}
      variant={icon ? 'ghost' : variant}
      type={type}
      size={size}
      disabled={disabled}
      className={`${className} rounded-[55px] px-[24px] cursor-pointer ${full ? 'w-full' : ''}`}
    >
      {typeof children === 'string' && !icon ? (
        <span className='font-[700] text-[16px]'>{children}</span>
      ) : icon ? (
        <div className='flex justify-center items-center gap-2'>
          <span className='font-[600] text-[16px] text-primary'>{children}</span>
          <Icon icon={icon} />
        </div>
      ) : (
        children
      )}
    </UiButton>
  )
}
