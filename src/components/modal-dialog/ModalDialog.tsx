import { FC, ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'

interface IModalDialog {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
  description?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: ReactNode
}

export const ModalDialog: FC<IModalDialog> = ({
  open,
  setOpen,
  title,
  description,
  disabled,
  children
}) => {
  return (
    <>
      <Dialog open={open} onOpenChange={!disabled ? setOpen : () => {}}>
        <DialogContent className={`sm:max-w-[425px] w-full rounded-[30px] shadow-none`}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className='py-4'>{children}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}
