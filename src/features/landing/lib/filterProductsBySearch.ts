import type { Product } from '../model/product.types'

export function filterProductsBySearch(
  products: Product[],
  query: string,
): Product[] {
  const q = query.trim().toLowerCase()
  if (!q) return products

  return products.filter((p) => {
    const name = p.productName.toLowerCase()
    const desc = (p.descriptionShort ?? '').toLowerCase()
    return name.includes(q) || desc.includes(q)
  })
}
