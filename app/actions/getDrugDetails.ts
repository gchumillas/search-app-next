import { Product } from '@/app/types'

export const getDrugDetails = async (slug: string): Promise<Product | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/drug?slug=${slug}`, {
      cache: 'no-store',
    })
    if (!res.ok) return null
    const data = await res.json()
    return Array.isArray(data) ? data[0] || null : data
  } catch {
    return null
  }
}
