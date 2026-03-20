import type { ComponentProps } from 'react'

import { PartnerBanners } from './PartnerBanners'
import { ProductShelf } from './ProductShelf'

type Props = ComponentProps<typeof ProductShelf>

export function ProductShelfWithPartners(props: Props) {
  return (
    <div className="landing__section-group">
      <ProductShelf {...props} />
      <PartnerBanners />
    </div>
  )
}
