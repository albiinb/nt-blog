import { FC, SVGProps } from 'react'

export type IconType = FC<SVGProps<SVGSVGElement>>

interface IconProps {
  icon: IconType
  size?: number
}

export const Icon: FC<IconProps> = ({ icon: IconComponent, size = 22 }) => {
  return (
    <IconComponent width={size} height={size} style={{ width: size, height: size }} />
  )
}
