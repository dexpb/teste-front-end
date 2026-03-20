import type { ProductsResponse } from '../model/product.types'

const REMOTE =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export const PRODUCTS_JSON_URL = import.meta.env.DEV
  ? '/econverse-api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
  : REMOTE

export async function fetchProducts(): Promise<ProductsResponse> {
  const res = await fetch(PRODUCTS_JSON_URL)
  if (!res.ok) {
    throw new Error(`Falha ao carregar produtos (${res.status})`)
  }
  return res.json() as Promise<ProductsResponse>
}
