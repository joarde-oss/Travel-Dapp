import { formatEther } from 'viem'
import { useAccount, useBalance, useChainId, useSwitchChain } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { useI18n } from '../lib/i18n'

export default function Balance() {
  const { language, t } = useI18n()
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const { switchChain, isPending: isSwitching, error: switchError } = useSwitchChain()
  const isWrongNetwork = isConnected && chainId !== sepolia.id
  const { data, isLoading, isError } = useBalance({
    address,
    chainId: sepolia.id,
    query: {
      enabled: Boolean(address) && !isWrongNetwork,
    },
  })

  if (!isConnected) {
    return <div className="balance muted">{t('balanceConnect')}</div>
  }

  if (isWrongNetwork) {
    return (
      <div className="balance">
        <div className="muted">{t('networkUnsupported')}</div>
        <button
          type="button"
          className="btn ghost"
          onClick={() => switchChain({ chainId: sepolia.id })}
          disabled={isSwitching}
        >
          {isSwitching ? t('switchingNetwork') : t('switchNetwork')}
        </button>
        {switchError ? <div className="error">{switchError.message}</div> : null}
      </div>
    )
  }

  if (isLoading) {
    return <div className="balance">{t('balanceLoading')}</div>
  }

  if (isError || !data) {
    return <div className="balance">{t('balanceUnavailable')}</div>
  }

  const formatted = new Intl.NumberFormat(language === 'it' ? 'it-IT' : 'en-US', {
    maximumFractionDigits: 4,
  }).format(Number(formatEther(data.value)))

  return (
    <div className="balance">
      {t('balanceLabel')}: <strong>{formatted}</strong> ETH
    </div>
  )
}
