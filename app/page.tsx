'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useInView } from 'react-intersection-observer'
import { Product } from '@/app/types'
import { getSearchResults } from '@/app/actions/getSearchResults'
import Header from '@/app/components/layout/header'
import SearchNotFound from '@/app/components/search/not-found'
import SearchItem from '@/app/components/search/item'
import SearchDetails from '@/app/components/search/details'

const SearchPage = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')?.trim() || ''
  const [results, setResults] = useState<Product[]>([])
  const [selectedItem, setSelectedItem] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const { ref, inView } = useInView()

  useEffect(() => {
    setSelectedItem(null)
    setResults([])
  }, [query])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await getSearchResults(query)
        setResults((results) => [...results, ...data])
      } catch (error) {
        console.error('Error fetching data:', error)
        setResults([])
      } finally {
        setLoading(false)
      }
    }
    if (inView) {
      fetchData()
    }
  }, [query, inView])

  return (
    <>
      <Header />

      <div className="container mx-auto max-w-5xl p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          {!loading && results.length === 0 ? (
            <SearchNotFound query={query} />
          ) : (
            <ul
              className="space-y-6"
              role="list"
              v-if="results.length > 0"
            >
              {results.map((item, index) => (
                <SearchItem
                  key={index}
                  slug={item.slug}
                  product={item.product}
                  status={item.status}
                  summary={item.summary}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </ul>
          )}
          <div ref={ref}>{loading && results.length > 0 ? 'Loading results...' : ''}</div>
        </div>

        {selectedItem && (
          <div
            className={`fixed md:relative inset-0 p-4 md:p-0 flex md:flex-none justify-center md:justify-normal items-center md:items-start md:w-1/3 md:block" ${selectedItem ? 'block' : 'hidden'}`}
          >
            <div
              className="absolute bg-black md:bg-white bg-opacity-50 md:bg-opacity-100 w-full h-full md:hidden"
              onClick={() => setSelectedItem(null)}
            ></div>
            <div className="relative bg-white border-gray-300 border p-3 max-w-md w-full md:max-w-none md:flow-root md:sticky md:top-3">
              <SearchDetails
                slug={selectedItem.slug}
                product={selectedItem.product}
                status={selectedItem.status}
                summary={selectedItem.summary}
                description={selectedItem.description}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SearchPage
