import type { Product } from '../../model/product.types'
import { ProductShelf } from './ProductShelf'

type Props = {
  searchQuery: string
  products: Product[]
  onProductOpen: (p: Product) => void
}

export function SearchResultsView({
  searchQuery,
  products,
  onProductOpen,
}: Props) {
  const count = products.length
  const countLabel =
    count === 1 ? '1 produto encontrado' : `${count} produtos encontrados`

  return (
    <div className="eco-search-results-page">
      <header className="eco-search-results-page__head">
        <p className="eco-search-results-page__eyebrow">Resultados da busca</p>
        <h1 className="eco-section-heading eco-search-results-page__title">
          «{searchQuery}»
        </h1>
        <p className="eco-search-results-page__subtitle">{countLabel}</p>
      </header>

      <ProductShelf
        sectionId="produtos"
        products={products}
        onProductOpen={onProductOpen}
        silent
        shelfTitle="Produtos encontrados"
        hideCategoryTabs
      />
    </div>
  )
}
