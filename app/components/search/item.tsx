import { Product } from '@/app/types'
import Link from 'next/link'

type SearchItemProps = Omit<Product, 'id' | 'description'> & {
  onClick: () => void
}

const SearchItem = ({ slug, product, status, summary, onClick }: SearchItemProps) => {
  return (
    <li
      className="pb-2"
      role="listitem"
    >
      <h2 className="text-base font-semibold mb-1">
        <Link
          className="text-blue-600 hover:underline cursor-pointer"
          href={slug}
          rel="noreferrer"
          title={`View Full Description of ${product}`}
          aria-label={`View full description of ${product}`}
        >
          {product}
        </Link>
      </h2>
      <div className="leading-4">
        <p className="text-xs text-gray-500 mb-1">
          <span className="font-bold">Status:</span> {status}
        </p>
        <p className="text-gray-700 text-sm">{summary}</p>
        <p className="text-blue-600 text-sm">
          <Link
            className="hover:underline cursor-pointer"
            href="/"
            rel="noopener noreferrer"
            title="View Summary"
            aria-label="View Summary"
            onClick={(e) => {
              e.preventDefault()
              onClick()
            }}
          >
            Summary
          </Link>
          <span className="mx-1">|</span>
          <Link
            className="hover:underline cursor-pointer"
            href={slug}
            rel="noreferrer"
            title={`View Full Description of ${product}`}
            aria-label={`View full description of ${product}`}
          >
            Full Description
          </Link>
        </p>
      </div>
    </li>
  )
}

export default SearchItem
