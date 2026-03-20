import type { FC, SVGProps } from 'react'

export type IconName =
  | 'box'
  | 'chevronLeft'
  | 'chevronRight'
  | 'corrida'
  | 'creditCard'
  | 'crownSimple'
  | 'cuidadosDeSaude'
  | 'facebook'
  | 'ferramentas'
  | 'heart'
  | 'instagram'
  | 'linkedin'
  | 'moda'
  | 'shieldCheck'
  | 'shoppingCart'
  | 'supermercados'
  | 'tecnologia'
  | 'truck'
  | 'accountCircle'
  | 'whiskey'
  | 'search'

export type InternalIconProps = Omit<SVGProps<SVGSVGElement>, 'name'>

export interface PublicIconProps extends InternalIconProps {
  name: IconName
  size?: number
  className?: string
}

export type InternalIconComponent = FC<InternalIconProps>

