'use server'
import { faker } from '@faker-js/faker'
import { Product } from '@/app/types'
import { NextRequest, NextResponse } from 'next/server'
import { cache } from 'react'

const drugStatuses = ['In Development', 'Approved', 'Phase 1', 'Phase 2', 'Phase 3']
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

export const GET = cache(async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('query') || ''
  let filteredDrugs = drugNames.filter((name) => name.toLowerCase().includes('' + query.toLowerCase()))
  if (filteredDrugs.length === 0) {
    return NextResponse.json([])
  }
  filteredDrugs = filteredDrugs.length ? filteredDrugs : drugNames

  const uniqueNames = []

  while (uniqueNames.length < 30) {
    uniqueNames.push(
      `${filteredDrugs[Math.floor(Math.random() * filteredDrugs.length)]}${faker.word.adjective({ strategy: 'shortest' })}`,
    )
  }

  const data: Product[] = Array.from(uniqueNames).map((name, i) => ({
    id: i + 1,
    slug: '/drug/' + name.toLowerCase().replace(/\s+/g, '-'),
    product: name,
    status: faker.helpers.arrayElement(drugStatuses),
    summary: faker.lorem.sentences({ min: 2, max: 4 }),
    description: faker.lorem.sentences({ min: 5, max: 10 }),
  }))

  return NextResponse.json(data)
})
