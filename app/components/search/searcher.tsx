'use client'
import Link from 'next/link'
import { Search as LucideSearch, X as LucideX } from 'lucide-react'
import Image from '@/app/components/image'
import { useRouter } from 'next/navigation'
import { useState, KeyboardEvent } from 'react'
import { useSearchParams } from 'next/navigation'

const Searcher = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState<string>(searchParams.get('query')?.trim() || '')

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/?query=${encodeURIComponent(query)}`)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const clearQuery = () => {
    setQuery('')
  }

  return (
    <div className="w-full flex items-center gap-4">
      <div className="relative w-full max-w-md flex items-center gap-4">
        <Link
          href="/"
          aria-label="Go to Home"
          rel="preload"
        >
          <Image
            src="/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            width={100}
            height={34}
            priority={true}
          />
        </Link>

        <div className="relative w-full">
          <LucideSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={15}
            aria-hidden="true"
          />
          <input
            type="text"
            id="search"
            placeholder=""
            className="w-full pl-10 pr-10 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md text-sm"
            aria-label="Search"
            role="searchbox"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {query && (
            <LucideX
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              size={20}
              onClick={clearQuery}
              aria-label="Clear search"
              role="button"
            />
          )}
        </div>
        <button
          onClick={handleSearch}
          className="px-4 py-1 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Submit search"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Searcher
