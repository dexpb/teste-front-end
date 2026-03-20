const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatBRL(value: number): string {
  return brl.format(value)
}

export function listPriceFromSale(salePrice: number): number {
  return Math.round(salePrice * 1.072 * 100) / 100
}
