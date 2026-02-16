import { useEffect, useMemo, useState } from 'react'
import { useAccount } from 'wagmi'
import { useI18n } from '../lib/i18n'
import { getPurchaseHistory, type PurchaseHistoryItem } from '../lib/purchaseHistory'

type ViewState = {
  items: PurchaseHistoryItem[]
}

export default function PurchaseHistory() {
  const { t, language } = useI18n()
  const { address, isConnected } = useAccount()
  const [state, setState] = useState<ViewState>({ items: [] })

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat(language === 'it' ? 'it-IT' : 'en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    [language],
  )

  useEffect(() => {
    if (!address || !isConnected) {
      setState({ items: [] })
      return
    }

    const refresh = () => {
      setState({ items: getPurchaseHistory(address) })
    }

    refresh()
    window.addEventListener('gt:purchase', refresh)
    return () => window.removeEventListener('gt:purchase', refresh)
  }, [address, isConnected])

  if (!isConnected || !address) return null

  return (
    <section className="section">
      <h2>{t('purchaseHistoryTitle')}</h2>
      <div className="card">
        {state.items.length ? (
          <div className="history-list">
            {state.items.map((item) => (
              <div className="history-item" key={item.txHash}>
                <div>
                  <div className="history-title">{item.tripName}</div>
                  <div className="muted">
                    {item.priceEth} ETH · {formatter.format(new Date(item.timestamp))}
                  </div>
                </div>
                <a
                  className="link"
                  href={`https://sepolia.etherscan.io/tx/${item.txHash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('purchaseHistoryCta')} →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="muted">{t('purchaseHistoryEmpty')}</p>
        )}
      </div>
    </section>
  )
}
