import { useI18n } from '../lib/i18n'

type FooterProps = {
  fixed?: boolean
}

export default function Footer({ fixed = false }: FooterProps) {
  const { t } = useI18n()

  return (
    <footer className={`site-footer${fixed ? ' fixed' : ''}`}>
      <div className="footer-brand">
        <p className="footer-kicker">Gianni Travel Web3</p>
        <p className="footer-title">{t('footerTitle')}</p>
      </div>
      <div className="footer-info">
        <div>
          <p className="footer-label">{t('footerEmail')}</p>
          <p className="footer-meta">info@giannitravelweb3.com</p>
        </div>
        <div>
          <p className="footer-label">{t('footerPhone')}</p>
          <p className="footer-meta">+39 02 0000 0000</p>
        </div>
        <div>
          <p className="footer-label">{t('footerDevLabel')}</p>
          <p className="footer-meta footer-dev">{t('footerDevValue')}</p>
        </div>
      </div>
    </footer>
  )
}
