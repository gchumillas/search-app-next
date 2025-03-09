'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Product } from '@/app/types'
import { getDrugDetails } from '@/app/actions/getDrugDetails'
import Header from '@/app/components/layout/header'
import DrugDetails from '@/app/components/drug/details'

const DrugPage = () => {
  const { slug } = useParams() as { slug: string }
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return
      setLoading(true)
      try {
        const data = await getDrugDetails(slug)
        setProduct(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [slug])

  return (
    <>
      <Header />

      <div className="container mx-auto max-w-5xl p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          {loading ? (
            <p>Loading results...</p>
          ) : product ? (
            <DrugDetails
              product={product.product}
              status={product.status}
              description={product.description}
            />
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default DrugPage
