import { useEffect, useId, useRef, useState } from 'react'

import type { Product } from '../../model/product.types'
import { formatBRL } from '../../../../shared/lib/formatCurrency'

const DESC_FALLBACK =
  'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.'

type Props = {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: Props) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setQty(1)
  }, [product])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const desc =
    product.descriptionShort?.trim() && product.descriptionShort.trim().length > 0
      ? product.descriptionShort
      : DESC_FALLBACK

  return (
    <div
      className="eco-modal"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="eco-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          ref={closeRef}
          type="button"
          className="eco-modal__close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <span aria-hidden>×</span>
        </button>
        <div className="eco-modal__grid">
          <div className="eco-modal__img-wrap">
            <img src={product.photo} alt="" width={360} height={360} />
          </div>
          <div className="eco-modal__body">
            <h2 id={titleId} className="eco-modal__title">
              {product.productName}
            </h2>
            <p className="eco-modal__price">{formatBRL(product.price)}</p>
            <p className="eco-modal__desc">{desc}</p>
            <a href="#produtos" className="eco-modal__details-link">
              Veja mais detalhes do produto &gt;
            </a>
            <div className="eco-modal__actions">
              <div
                className="eco-modal__qty"
                role="group"
                aria-label="Quantidade"
              >
                <button
                  type="button"
                  className="eco-modal__qty-btn"
                  aria-label="Diminuir quantidade"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="eco-modal__qty-value" aria-live="polite">
                  {String(qty).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="eco-modal__qty-btn"
                  aria-label="Aumentar quantidade"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                >
                  +
                </button>
              </div>
              <button type="button" className="eco-modal__buy">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
