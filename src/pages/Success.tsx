import { Link, useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { useI18n } from '../lib/i18n'

export default function Success() {
  const { t } = useI18n()
  const [searchParams] = useSearchParams()
  const productId = searchParams.get('productId')
  const txHash = searchParams.get('txHash')

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Gianni Travel • Web3</p>
        <h1>{t('successTitle')} ✅</h1>
      </header>

      <section className="section card">
        <div className="row">
          <span className="label">{t('productIdLabel')}</span>
          <span className="value">{productId ?? t('notAvailable')}</span>
        </div>
        <div className="row">
          <span className="label">{t('txHashLabel')}</span>
          <span className="value wrap">{txHash ?? t('notAvailable')}</span>
        </div>
      </section>

      <Link className="link" to="/">
        ← {t('backHome')}
      </Link>

      <Footer />
    </div>
  )
}
