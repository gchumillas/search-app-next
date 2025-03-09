interface SearchNotFoundProps {
  query: string
}

const drugNames = [
  'Acetafrin',
  'Adderon',
  'Amitryzol',
  'Amlodiron',
  'Amoxiril',
  'Ativion',
  'Atorvaxa',
  'Azithrovil',
  'Benzotril',
  'Bikentis',
  'Botryx',
  'Brilanta',
  'Bunatrix',
  'Buprenexa',
  'Cephadexin',
  'Ciprozol',
  'Citalorin',
  'Clindarix',
  'Clonarex',
  'Cyclozepin',
  'Cymbatrix',
  'Doxacylin',
  'Dupixor',
  'Entrosil',
  'Entyvar',
  'Farziga',
  'Fentazil',
  'Gabatrex',
  'Gemfexa',
  'Humion',
  'Hydrothiax',
  'Ibufren',
  'Imbruxin',
  'Januvion',
  'Jardirix',
  'Keyrudon',
  'Lexaril',
  'Lisinorex',
  'Lofendine',
  'Loratrin',
  'Loratrin-D',
  'Lyrinox',
  'Melatonix',
  'Melovix',
  'Metaforin',
  'Methadrix',
  'Methotrexa',
  'Metoprex',
  'Mountrix',
  'Naltrexa',
  'Naprovil',
  'Narcen',
  'Nurtrex',
  'Omeprex',
  'Opdivion',
  'Otevil',
  'Ozempra',
  'Pantrexol',
  'Prednix',
  'Probufin',
  'Quliprex',
  'Quvivion',
  'Rybeltra',
  'Sublovix',
  'Sunlix',
  'Tepezon',
  'Tramirex',
  'Trazelon',
  'Vigran',
  'Vraynex',
  'Wegovin',
  'Wellrix',
  'Xanovex',
  'Yervan',
  'Zeptrix',
  'Zubrix',
]

const getRandomDrugs = (count: number) => {
  const shuffled = [...drugNames].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count).join(', ')
}

const SearchNotFound = ({ query }: SearchNotFoundProps) => {
  return (
    <>
      <p
        role="alert"
        className="text-xs mt-2"
      >
        {query && (
          <span className="block mb-2">
            No results found for <span className="font-bold">&apos;{query}&apos;</span>.
          </span>
        )}
        Try looking for: <span className="font-bold">{getRandomDrugs(10)}...</span>
      </p>
    </>
  )
}

export default SearchNotFound
