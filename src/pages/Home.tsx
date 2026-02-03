import Footer from '../components/Footer'
import ProductGallery from '../components/ProductGallery'
import WalletConnect from '../components/WalletConnect'
import { useI18n } from '../lib/i18n'

export default function Home() {
  const { language, toggleLanguage, t } = useI18n()

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-top">
          <p className="eyebrow">Gianni Travel • Web3</p>
          <div className="hero-actions">
            <WalletConnect variant="compact" />
            <button
              type="button"
              className="lang-toggle"
              onClick={toggleLanguage}
              aria-label={t('langToggle')}
            >
              <span className={language === 'it' ? 'active' : ''}>{t('langIt')}</span>
              <span className={language === 'en' ? 'active' : ''}>{t('langEn')}</span>
            </button>
          </div>
        </div>
        <h1>{t('heroTitle')}</h1>
        <p className="hero-subtitle">
          {t('heroSubtitle')}
        </p>
      </header>

      <section className="section">
        <h2>{t('galleryTitle')}</h2>
        <ProductGallery />
      </section>

      <Footer />
    </div>
  )
}
