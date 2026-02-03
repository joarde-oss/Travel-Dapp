import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { trips } from '../data/trips'
import { useI18n } from '../lib/i18n'
import { parseEther } from 'viem'
import { useAccount, useChainId, useSendTransaction } from 'wagmi'
import { sepolia } from 'wagmi/chains'

export default function TripDetails() {
  const { language, t } = useI18n()
  const { isConnected } = useAccount()
  const chainId = useChainId()
  const { sendTransaction, isPending, error, data: txHash } = useSendTransaction()
  const { id } = useParams<{ id: string }>()
  const trip = trips.find((item) => item.id === id)

  if (!trip) {
    return (
      <div className="page with-fixed-footer">
        <header className="hero">
          <p className="eyebrow">Gianni Travel • Web3</p>
          <h1>{t('tripNotFound')}</h1>
        </header>
        <section className="section card">
          <p className="muted">{t('tripNotFoundBody')}</p>
        </section>
        <Link className="link" to="/">
          ← {t('backHome')}
        </Link>
        <Footer />
      </div>
    )
  }

  const isEn = language === 'en'
  const name = isEn ? trip.nameEn : trip.name
  const location = isEn ? trip.locationEn : trip.location
  const longDescription = isEn ? trip.longDescriptionEn : trip.longDescription
  const highlights = isEn ? trip.highlightsEn : trip.highlights
  const sustainability = isEn ? trip.sustainabilityEn : trip.sustainability
  const includes = isEn ? trip.includesEn : trip.includes
  const excludes = isEn ? trip.excludesEn : trip.excludes

  const receiverAddress = '0x9757825e4147b1BE13738C18b9074218d74C9fFC'
  const isWrongNetwork = isConnected && chainId !== sepolia.id

  const handleBuy = () => {
    if (!isConnected || isWrongNetwork) return
    sendTransaction(
      {
        to: receiverAddress,
        value: parseEther(trip.priceEth),
      },
      undefined,
    )
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const totalImages = trip.imageUrls.length

  useEffect(() => {
    setActiveImageIndex(0)
  }, [trip.id])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [trip.id])

  const handlePrevImage = () => {
    setActiveImageIndex((current) => (current - 1 + totalImages) % totalImages)
  }

  const handleNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % totalImages)
  }

  useEffect(() => {
    if (!trip.imageUrls.length) return
    const nextIndex = (activeImageIndex + 1) % trip.imageUrls.length
    const nextImage = new Image()
    nextImage.src = trip.imageUrls[nextIndex]
  }, [activeImageIndex, trip.imageUrls])

  return (
    <div className="page trip-page with-fixed-footer">
      <header className="hero">
        <p className="eyebrow">Gianni Travel • Web3</p>
        <h1>{name}</h1>
        <p className="hero-subtitle">{location}</p>
      </header>

      <section className="trip-layout">
        <div className="trip-hero" aria-label={`${t('imagesOf')} ${name}`}>
          <div
            className="trip-hero-track"
            style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
          >
            {trip.imageUrls.map((imageUrl, index) => (
              <div className="trip-hero-slide" key={`${trip.id}-hero-${index}`}>
                <img
                  src={imageUrl}
                  alt={`${name} - ${t('image')} ${index + 1}`}
                  loading={index === activeImageIndex ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === activeImageIndex ? 'high' : 'auto'}
                />
              </div>
            ))}
          </div>
          <div className="trip-hero-badge">{trip.priceEth} ETH</div>
          <div className="trip-hero-controls">
            <button
              type="button"
              className="trip-hero-control"
              onClick={handlePrevImage}
              aria-label="Immagine precedente"
              disabled={totalImages <= 1}
            >
              ←
            </button>
            <div className="trip-hero-counter">
              {activeImageIndex + 1}/{totalImages}
            </div>
            <button
              type="button"
              className="trip-hero-control"
              onClick={handleNextImage}
              aria-label="Immagine successiva"
              disabled={totalImages <= 1}
            >
              →
            </button>
          </div>
        </div>

        <div className="trip-details">
          <div className="trip-summary card">
            <h2>{t('overview')}</h2>
            <p>{longDescription}</p>
            <div className="trip-meta">
              <div>
                <span className="label">{t('duration')}</span>
                <span className="value">
                  {trip.durationDays} {t('days')}
                </span>
              </div>
              <div>
                <span className="label">{t('location')}</span>
                <span className="value">{location}</span>
              </div>
            </div>
          </div>

          <div className="trip-lists">
            <div className="card">
              <h2>{t('highlights')}</h2>
              <ul>
                {highlights.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card accent">
              <h2>{t('sustainability')}</h2>
              <ul>
                {sustainability.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="trip-aside card trip-combined">
            <div className="combined-block combined-payments">
              <h2>{t('quickDetails')}</h2>
              <div className="trip-price">
                <span className="label">{t('price')}</span>
                <span className="value">{trip.priceEth} ETH</span>
              </div>
              <button
                type="button"
                className="btn primary"
                aria-label={`${t('buy')} ${name}`}
                onClick={handleBuy}
                disabled={!isConnected || isWrongNetwork || isPending}
              >
                {isPending ? t('buying') : t('buy')}
              </button>
              {txHash ? (
                <div className="tx-box">
                  <div className="tx-title">{t('txReady')}</div>
                  <a
                    className="link"
                    href={`https://sepolia.etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('txCta')} →
                  </a>
                </div>
              ) : null}
              {!isConnected ? <p className="muted">{t('connectToBuy')}</p> : null}
              {isWrongNetwork ? <p className="muted">{t('wrongNetworkShort')}</p> : null}
              {error ? <div className="error">{error.message}</div> : null}
              <p className="muted">{t('paymentSecure')}</p>
              <Link className="link" to="/">
                ← {t('backHome')}
              </Link>
            </div>

            <div className="combined-block combined-inclusions">
              <div className="combined-columns">
                <div>
                  <h2>{t('includedTitle')}</h2>
                  <ul>
                    {includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2>{t('notIncludedTitle')}</h2>
                  <ul>
                    {excludes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
