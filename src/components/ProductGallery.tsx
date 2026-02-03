import { trips } from '../data/trips'
import ProductCard from './ProductCard'

export default function ProductGallery() {
  return (
    <section className="gallery">
      {trips.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
