import { getDrugDetails } from '@/app/actions/getDrugDetails'
import Header from '@/app/components/layout/header'
import DrugDetails from '@/app/components/drug/details'

// TODO: Usa la fuerza. Usa el server-side
export default async function DrugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // El producto se carga en el lado del servidor (server-side).
  // Si miras el código de la página (View Page Source), verás que el contenido
  // ya está disponible antes de ser visualizado.
  //
  // Por tanto, no necesitamos ningún loading.
  //
  // En realidad está es la fortaleza de NextJS. Poder generar contenido
  // en el lado del servidor para que esté disponible de forma inmediata
  // en el lado del cliente.
  const product = await getDrugDetails(slug)

  if (!product) {
    return <div>product not found</div>
  }

  return (
    <>
      <Header />

      <div className="container mx-auto max-w-5xl p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <DrugDetails
            product={product.product}
            status={product.status}
            description={product.description}
          />
        </div>
      </div>
    </>
  )
}
