import { useNavigate } from 'react-router-dom'
import type { Trip } from '../data/trips'
import { useI18n } from '../lib/i18n'

export default function ProductCard({ product }: { product: Trip }) {
  const navigate = useNavigate()
  const { language, t } = useI18n()
  const isEn = language === 'en'
  const name = isEn ? product.nameEn : product.name
  const description = isEn ? product.descriptionEn : product.description
  const location = isEn ? product.locationEn : product.location

  const handleNavigate = () => {
    navigate(`/trip/${product.id}`)
  }

  return (
    <article
      className="product-card"
      aria-label={`${t('cardTrip')} ${name}`}
    >
      <div className="product-image" style={{ backgroundImage: `url(${product.imageUrls[0]})` }}>
        <span className="price-badge">{product.priceEth} ETH</span>
      </div>
      <div className="product-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="meta">
          <span>{location}</span>
          <span>•</span>
          <span>
            {product.durationDays} {t('days')}
          </span>
        </div>
        <div className="product-footer">
          <button
            type="button"
            className="btn ghost"
            onClick={(event) => {
              event.stopPropagation()
              handleNavigate()
            }}
            aria-label={`${t('details')} ${name}`}
          >
            {t('details')}
          </button>
        </div>
      </div>
    </article>
  )
}
