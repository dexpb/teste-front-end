import { useEffect, useId, useMemo, useState } from 'react'

import { Icon } from '../../../icons'
import type { Product } from '../../model/product.types'
import { ProductCard } from './ProductCard'

const TABS = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
] as const

type Props = {
  products: Product[]
  onProductOpen: (p: Product) => void
  loading?: boolean
  error?: string | null
  silent?: boolean
  sectionId?: string
  showSeeAll?: boolean
  emptySearchMessage?: string
  shelfTitle?: string
  hideCategoryTabs?: boolean
}

const PAGE = 4

export function ProductShelf({
  products,
  onProductOpen,
  loading,
  error,
  silent,
  sectionId,
  showSeeAll,
  emptySearchMessage,
  shelfTitle,
  hideCategoryTabs,
}: Props) {
  const titleId = useId()
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('CELULAR')
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setOffset(0)
  }, [products])

  const maxOffset = Math.max(0, products.length - PAGE)

  const visible = useMemo(() => products.slice(offset, offset + PAGE), [products, offset])

  const goPrev = () => setOffset((o) => Math.max(0, o - PAGE))
  const goNext = () => setOffset((o) => Math.min(maxOffset, o + PAGE))

  return (
    <section
      id={sectionId}
      className={`eco-shelf${hideCategoryTabs ? ' eco-shelf--no-tabs' : ''}`}
      aria-labelledby={titleId}
    >
      <div className="eco-shelf__inner">
      <header
        className={`eco-shelf__head${showSeeAll ? ' eco-shelf__head--see-all' : ''}`}
      >
        <div className="eco-shelf__title-row">
          <span className="eco-shelf__title-line" aria-hidden />
          <h2 id={titleId} className="eco-section-heading eco-shelf__title">
            {shelfTitle ?? 'Produtos relacionados'}
          </h2>
          <span className="eco-shelf__title-line" aria-hidden />
        </div>

        {showSeeAll ? (
          <a href="#produtos" className="eco-shelf__see-all">
            Ver todos
          </a>
        ) : null}

        {!hideCategoryTabs ? (
          <div
            className="eco-shelf__filter"
            role="tablist"
            aria-label="Filtro da vitrine"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={tab === activeTab}
                className={`eco-shelf__filter-tab${tab === activeTab ? ' eco-shelf__filter-tab--active' : ''}`}
                onClick={() => {
                  setActiveTab(tab)
                  setOffset(0)
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        ) : null}
      </header>

      {!silent && error && (
        <p className="eco-shelf__msg eco-shelf__msg--error">{error}</p>
      )}
      {!silent && loading && <p className="eco-shelf__msg">Carregando produtos…</p>}
      {!silent &&
        !loading &&
        !error &&
        products.length === 0 &&
        emptySearchMessage && (
          <p className="eco-shelf__msg" role="status" aria-live="polite">
            {emptySearchMessage}
          </p>
        )}

      {!(
        !loading &&
        !error &&
        products.length === 0 &&
        emptySearchMessage
      ) && (
        <div className="eco-shelf__carousel">
          <div className="eco-shelf__track">
            <button
              type="button"
              className="eco-shelf__arrow eco-shelf__arrow--prev"
              onClick={goPrev}
              disabled={offset <= 0 || loading || products.length === 0}
              aria-label="Produtos anteriores"
            >
              <Icon name="chevronLeft" size={22} />
            </button>

            <div className="eco-shelf__grid">
              {!loading &&
                !error &&
                visible.map((p, idx) => (
                  <ProductCard
                    key={`${offset}-${idx}-${p.productName}-${p.price}`}
                    product={p}
                    onOpen={onProductOpen}
                  />
                ))}
            </div>

            <button
              type="button"
              className="eco-shelf__arrow eco-shelf__arrow--next"
              onClick={goNext}
              disabled={
                offset >= maxOffset ||
                loading ||
                products.length === 0 ||
                products.length <= PAGE
              }
              aria-label="Próximos produtos"
            >
              <Icon name="chevronRight" size={22} />
            </button>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
