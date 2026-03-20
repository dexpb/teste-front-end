import type { FC, SVGProps } from 'react'

import type { IconName, PublicIconProps } from '../../shared/types/icons'

import {
  BoxIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CorridaIcon,
  CreditCardIcon,
  CrownSimpleIcon,
  CuidadosDeSaudeIcon,
  FacebookIcon,
  FerramentasIcon,
  HeartIcon,
  InstagramIcon,
  LinkedInIcon,
  MagnifyingGlassIcon,
  ModaIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  SupermercadosIcon,
  TecnologiaIcon,
  TruckIcon,
  UserCircleIcon,
  WhiskeyIcon,
} from './ui/icons'

export const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  box: BoxIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  corrida: CorridaIcon,
  creditCard: CreditCardIcon,
  crownSimple: CrownSimpleIcon,
  cuidadosDeSaude: CuidadosDeSaudeIcon,
  facebook: FacebookIcon,
  ferramentas: FerramentasIcon,
  heart: HeartIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  moda: ModaIcon,
  shieldCheck: ShieldCheckIcon,
  shoppingCart: ShoppingCartIcon,
  supermercados: SupermercadosIcon,
  tecnologia: TecnologiaIcon,
  truck: TruckIcon,
  accountCircle: UserCircleIcon,
  whiskey: WhiskeyIcon,
  search: MagnifyingGlassIcon,
}

export const Icon: FC<PublicIconProps> = ({
  name,
  size = 20,
  className,
  ...rest
}) => {
  const Component = icons[name]

  return (
    <Component
      width={size}
      height={size}
      className={className}
      {...rest}
    />
  )
}

