import dynamic from 'next/dynamic'

const Searcher = dynamic(() => import('@/app/components/search/searcher'), {
  loading: () => <p>Loading SearchBar...</p>,
})

const Header = () => {
  return (
    <header
      className="flex justify-between items-center px-4 py-2 w-full border-b border-gray-300"
      role="banner"
    >
      <div className="flex-grow">
        <Searcher />
      </div>
    </header>
  )
}

export default Header
