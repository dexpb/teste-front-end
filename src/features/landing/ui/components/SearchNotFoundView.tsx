type Props = {
  searchQuery: string
  onClearSearch: () => void
}

export function SearchNotFoundView({ searchQuery, onClearSearch }: Props) {
  return (
    <div className="eco-search-not-found" id="produtos" role="status" aria-live="polite">
      <div className="eco-search-not-found__inner">
        <p className="eco-search-not-found__eyebrow">Busca</p>
        <h1 className="eco-search-not-found__title">Página não encontrada</h1>
        <p className="eco-search-not-found__text">
          Não encontramos produtos para <strong>«{searchQuery}»</strong>. Tente
          outro termo ou volte para a loja.
        </p>
        <button
          type="button"
          className="eco-search-not-found__btn"
          onClick={onClearSearch}
        >
          Limpar busca e ver todos os produtos
        </button>
      </div>
    </div>
  )
}
