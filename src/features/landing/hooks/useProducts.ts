import { useEffect, useState } from 'react'

import { fetchProducts } from '../api/productsApi'
import type { Product } from '../model/product.types'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetchProducts()
      .then((data) => {
        if (cancelled) return
        if (data.success && Array.isArray(data.products)) {
          setProducts(data.products)
        } else {
          setError('Resposta inválida da API.')
        }
      })
      .catch((e: unknown) => {
        if (cancelled) return
        setError(e instanceof Error ? e.message : 'Erro ao carregar produtos.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { products, loading, error }
}
