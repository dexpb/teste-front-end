import { useCallback, useMemo, useState } from "react";

import type { Product } from "../model/product.types";
import { useProducts } from "../hooks/useProducts";
import { filterProductsBySearch } from "../lib/filterProductsBySearch";
import { BrandsStrip } from "./components/BrandsStrip";
import { CategoryStrip } from "./components/CategoryStrip";
import { HeroSection } from "./components/HeroSection";
import { Newsletter } from "./components/Newsletter";
import { ProductModal } from "./components/ProductModal";
import { ProductShelf } from "./components/ProductShelf";
import { ProductShelfWithPartners } from "./components/ProductShelfWithPartners";
import { SearchNotFoundView } from "./components/SearchNotFoundView";
import { SearchResultsView } from "./components/SearchResultsView";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

import "./LandingPage.scss";

export default function LandingPage() {
  const { products, loading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  const trimmedSearch = searchQuery.trim();
  const searchActive = trimmedSearch.length > 0;

  const displayProducts = useMemo(
    () => filterProductsBySearch(products, searchQuery),
    [products, searchQuery],
  );

  const openProduct = useCallback((p: Product) => setSelected(p), []);
  const closeModal = useCallback(() => setSelected(null), []);
  const clearSearch = useCallback(() => setSearchQuery(""), []);

  return (
    <div className="landing">
      <SiteHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {searchActive ? (
        <main className="landing__main landing__main--search">
          {loading ? (
            <p className="eco-search-state">Carregando produtos…</p>
          ) : null}
          {!loading && error ? (
            <p className="eco-search-state eco-search-state--error" role="alert">
              {error}
            </p>
          ) : null}
          {!loading && !error && displayProducts.length === 0 ? (
            <SearchNotFoundView
              searchQuery={trimmedSearch}
              onClearSearch={clearSearch}
            />
          ) : null}
          {!loading && !error && displayProducts.length > 0 ? (
            <SearchResultsView
              searchQuery={trimmedSearch}
              products={displayProducts}
              onProductOpen={openProduct}
            />
          ) : null}
        </main>
      ) : (
        <main className="landing__main">
          <HeroSection />
          <div className="landing__stack">
            <CategoryStrip />
            <ProductShelfWithPartners
              sectionId="produtos"
              products={displayProducts}
              onProductOpen={openProduct}
              loading={loading}
              error={error}
            />
          </div>
          <div className="landing__stack">
            <ProductShelfWithPartners
              products={displayProducts}
              onProductOpen={openProduct}
              loading={loading}
              error={error}
              silent
              showSeeAll
            />
            <BrandsStrip />
            <ProductShelf
              products={displayProducts}
              onProductOpen={openProduct}
              loading={loading}
              error={error}
              silent
              showSeeAll
            />
            <Newsletter />
          </div>
        </main>
      )}

      <SiteFooter />
      {selected ? (
        <ProductModal product={selected} onClose={closeModal} />
      ) : null}
    </div>
  );
}
