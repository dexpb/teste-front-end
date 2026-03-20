import { useId } from 'react'

import type { Product } from '../../model/product.types'
import { formatBRL, listPriceFromSale } from '../../../../shared/lib/formatCurrency'

type Props = {
  product: Product
  onOpen: (p: Product) => void
}

export function ProductCard({ product, onOpen }: Props) {
  const headingId = useId()
  const listPrice = listPriceFromSale(product.price)
  const parcela = product.price / 2
  const blurb =
    product.descriptionShort?.trim() || product.productName

  return (
    <article className="eco-card" aria-labelledby={headingId}>
      <button
        type="button"
        className="eco-card__hit"
        onClick={() => onOpen(product)}
        aria-haspopup="dialog"
        aria-describedby={headingId}
        aria-label={`Ver detalhes: ${product.productName}`}
      >
        <div className="eco-card__media">
          <img src={product.photo} alt="" loading="lazy" width={220} height={220} />
        </div>
        <h3 id={headingId} className="eco-card__title visually-hidden">
          {product.productName}
        </h3>
        <p className="eco-card__desc">{blurb}</p>
        <div className="eco-card__prices">
          <span className="eco-card__old">{formatBRL(listPrice)}</span>
          <span className="eco-card__price">{formatBRL(product.price)}</span>
        </div>
        <p className="eco-card__installment">
          ou 2x de {formatBRL(parcela)} sem juros
        </p>
        <p className="eco-card__shipping">Frete grátis</p>
      </button>
      <button
        type="button"
        className="eco-card__buy"
        onClick={(e) => {
          e.stopPropagation()
          onOpen(product)
        }}
      >
        Comprar
      </button>
    </article>
  )
}
