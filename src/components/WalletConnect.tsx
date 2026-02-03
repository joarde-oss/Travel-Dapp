import { useAccount, useBalance, useChainId, useConnect, useDisconnect } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { formatEther } from 'viem'
import { shortAddress } from '../lib/format'
import { useI18n } from '../lib/i18n'

type WalletConnectProps = {
  variant?: 'card' | 'compact'
}

export default function WalletConnect({ variant = 'card' }: WalletConnectProps) {
  const { language, t } = useI18n()
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const { connect, connectors, isPending, error } = useConnect()
  const { disconnect } = useDisconnect()
  const isWrongNetwork = isConnected && chainId !== sepolia.id
  const { data: balanceData, isLoading: isBalanceLoading } = useBalance({
    address,
    chainId: sepolia.id,
    query: {
      enabled: Boolean(address) && !isWrongNetwork,
    },
  })

  const metaMaskConnector =
    connectors.find((connector) => connector.id === 'metaMask') ?? connectors[0]

  const connectButtonLabel = isPending
    ? t('walletConnecting')
    : metaMaskConnector
      ? t('walletConnect')
      : t('walletInstall')

  if (variant === 'compact') {
    const formattedBalance =
      balanceData && !isBalanceLoading
        ? new Intl.NumberFormat(language === 'it' ? 'it-IT' : 'en-US', {
            maximumFractionDigits: 4,
          }).format(Number(formatEther(balanceData.value)))
        : null

    return (
      <div className="wallet-compact">
        {isConnected && address ? (
          <>
            <span className="wallet-address">{shortAddress(address)}</span>
            {formattedBalance ? (
              <span className="wallet-balance">{formattedBalance} ETH</span>
            ) : null}
          </>
        ) : null}
        {isConnected ? (
          <button type="button" className="btn ghost" onClick={() => disconnect()}>
            {t('walletDisconnect')}
          </button>
        ) : (
          <button
            type="button"
            className="btn primary"
            onClick={() => metaMaskConnector && connect({ connector: metaMaskConnector })}
            disabled={!metaMaskConnector || isPending}
          >
            {connectButtonLabel}
          </button>
        )}
        {error ? <span className="error compact">{error.message}</span> : null}
      </div>
    )
  }

  return (
    <div className="wallet-card">
      <div className="wallet-row">
        <div>
          <div className="label">{t('walletLabel')}</div>
          {isConnected && address ? (
            <div className="value">{shortAddress(address)}</div>
          ) : (
            <div className="value muted">{t('walletNotConnected')}</div>
          )}
        </div>
        {isConnected ? (
          <button type="button" className="btn secondary" onClick={() => disconnect()}>
            {t('walletDisconnect')}
          </button>
        ) : (
          <button
            type="button"
            className="btn primary"
            onClick={() => metaMaskConnector && connect({ connector: metaMaskConnector })}
            disabled={!metaMaskConnector || isPending}
          >
            {connectButtonLabel}
          </button>
        )}
      </div>
      {error ? <div className="error">{error.message}</div> : null}
    </div>
  )
}
