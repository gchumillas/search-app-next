import { Product } from '@/app/types'
import Link from 'next/link'
type SearchDetailsProps = Omit<Product, 'id'>

const SearchDetails = ({ slug, product, status, summary, description }: SearchDetailsProps) => {
  return (
    <>
      <h3 className="text-base font-semibold mb-1">
        <Link
          className="text-blue-600 hover:underline cursor-pointer"
          href={slug}
          rel="noreferrer"
          title={`View Full Description of ${product}`}
          aria-label={`Read more about ${product}`}
        >
          {product}
        </Link>
      </h3>
      <p className="text-xs text-gray-500 mb-1">
        <span className="font-bold">Status:</span> {status}
      </p>
      <div className="text-gray-700 text-sm leading-4">
        <p className="pb-3">{summary}</p>
        <p>{description}</p>
        <p className="mt-2">
          <Link
            className="text-blue-600 text-sm hover:underline cursor-pointer"
            href={slug}
            rel="noreferrer"
            title={`View Full Description of ${product}`}
            aria-label={`View Full Description of ${product}`}
          >
            Full Description
          </Link>
        </p>
      </div>
    </>
  )
}

export default SearchDetails
