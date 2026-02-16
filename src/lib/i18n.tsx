import type { ReactNode } from 'react'
import { createContext, useContext, useMemo, useState } from 'react'

type Language = 'it' | 'en'

type TranslationKey =
  | 'heroTitle'
  | 'heroSubtitle'
  | 'galleryTitle'
  | 'walletDisconnected'
  | 'walletLabel'
  | 'walletNotConnected'
  | 'walletDisconnect'
  | 'walletConnect'
  | 'walletConnecting'
  | 'walletInstall'
  | 'balanceConnect'
  | 'balanceLoading'
  | 'balanceUnavailable'
  | 'balanceLabel'
  | 'networkUnsupported'
  | 'switchNetwork'
  | 'switchingNetwork'
  | 'tripNotFound'
  | 'tripNotFoundBody'
  | 'backHome'
  | 'overview'
  | 'highlights'
  | 'sustainability'
  | 'quickDetails'
  | 'price'
  | 'buy'
  | 'paymentSecure'
  | 'duration'
  | 'days'
  | 'location'
  | 'details'
  | 'cardTrip'
  | 'successTitle'
  | 'successBody'
  | 'productIdLabel'
  | 'txHashLabel'
  | 'notAvailable'
  | 'imagesOf'
  | 'image'
  | 'includedTitle'
  | 'notIncludedTitle'
  | 'buying'
  | 'connectToBuy'
  | 'wrongNetworkShort'
  | 'txReady'
  | 'txCta'
  | 'txConfirming'
  | 'txConfirmingBody'
  | 'purchaseHistoryTitle'
  | 'purchaseHistoryEmpty'
  | 'purchaseHistoryCta'
  | 'footerTitle'
  | 'footerEmail'
  | 'footerPhone'
  | 'footerDevLabel'
  | 'footerDevValue'
  | 'langIt'
  | 'langEn'
  | 'langToggle'

const translations: Record<Language, Record<TranslationKey, string>> = {
  it: {
    heroTitle: 'Viaggi sostenibili, pagamenti in ETH',
    heroSubtitle:
      'Esperienze curate con partner locali, trasporti a basso impatto e ospitalita responsabile.',
    galleryTitle: 'Galleria viaggi',
    walletDisconnected: 'Non connesso',
    walletLabel: 'Wallet',
    walletNotConnected: 'Non connesso',
    walletDisconnect: 'Disconnect',
    walletConnect: 'Connetti wallet',
    walletConnecting: 'Connessione...',
    walletInstall: 'Installa MetaMask',
    balanceConnect: 'Connetti il wallet per vedere il saldo',
    balanceLoading: 'Caricamento saldo...',
    balanceUnavailable: 'Saldo non disponibile',
    balanceLabel: 'Saldo',
    networkUnsupported: 'Rete non supportata. Passa a Sepolia per vedere il saldo in ETH.',
    switchNetwork: 'Passa a Sepolia',
    switchingNetwork: 'Cambio rete...',
    tripNotFound: 'Viaggio non trovato',
    tripNotFoundBody:
      'Il viaggio richiesto non e disponibile. Controlla il link o torna alla home.',
    backHome: 'Torna alla home',
    overview: 'Panoramica',
    highlights: 'Highlights',
    sustainability: 'Impatto sostenibile',
    quickDetails: 'Dettagli rapidi',
    price: 'Prezzo',
    buy: 'Compra',
    paymentSecure: 'Pagamento sicuro in ETH.',
    duration: 'Durata',
    days: 'giorni',
    location: 'Localita',
    details: 'Dettagli',
    cardTrip: 'Card viaggio',
    successTitle: 'Acquisto completato',
    successBody: 'Riceverai aggiornamenti via email con la conferma del viaggio.',
    productIdLabel: 'Product ID',
    txHashLabel: 'Tx Hash',
    notAvailable: 'N/D',
    imagesOf: 'Immagini di',
    image: 'immagine',
    includedTitle: 'Cosa include',
    notIncludedTitle: 'Cosa non include',
    buying: 'Pagamento...',
    connectToBuy: 'Connetti il wallet per acquistare.',
    wrongNetworkShort: 'Rete non supportata. Passa a Sepolia.',
    txReady: 'Transazione confermata.',
    txCta: 'Apri la transazione su Etherscan',
    txConfirming: 'Conferma in corso...',
    txConfirmingBody: 'Attendi qualche secondo per la conferma della rete.',
    purchaseHistoryTitle: 'I miei acquisti',
    purchaseHistoryEmpty: 'Nessun acquisto ancora con questo wallet.',
    purchaseHistoryCta: 'Apri su Etherscan',
    footerTitle: 'Viaggi sostenibili con pagamenti in ETH',
    footerEmail: 'Email',
    footerPhone: 'Telefono',
    footerDevLabel: 'Sviluppo',
    footerDevValue: 'Sviluppato da Ardelean Jonathan',
    langIt: 'IT',
    langEn: 'EN',
    langToggle: 'Cambia lingua',
  },
  en: {
    heroTitle: 'Sustainable travel, ETH payments',
    heroSubtitle:
      'Curated experiences with local partners, low-impact transport, and responsible hospitality.',
    galleryTitle: 'Trip gallery',
    walletDisconnected: 'Not connected',
    walletLabel: 'Wallet',
    walletNotConnected: 'Not connected',
    walletDisconnect: 'Disconnect',
    walletConnect: 'Connect wallet',
    walletConnecting: 'Connecting...',
    walletInstall: 'Install MetaMask',
    balanceConnect: 'Connect your wallet to see the balance',
    balanceLoading: 'Loading balance...',
    balanceUnavailable: 'Balance unavailable',
    balanceLabel: 'Balance',
    networkUnsupported: 'Unsupported network. Switch to Sepolia to view the ETH balance.',
    switchNetwork: 'Switch to Sepolia',
    switchingNetwork: 'Switching network...',
    tripNotFound: 'Trip not found',
    tripNotFoundBody: 'The requested trip is not available. Check the link or go back home.',
    backHome: 'Back to home',
    overview: 'Overview',
    highlights: 'Highlights',
    sustainability: 'Sustainable impact',
    quickDetails: 'Quick details',
    price: 'Price',
    buy: 'Buy',
    paymentSecure: 'Secure payment in ETH.',
    duration: 'Duration',
    days: 'days',
    location: 'Location',
    details: 'Details',
    cardTrip: 'Trip card',
    successTitle: 'Purchase complete',
    successBody: 'You will receive email updates with the trip confirmation.',
    productIdLabel: 'Product ID',
    txHashLabel: 'Tx Hash',
    notAvailable: 'N/A',
    imagesOf: 'Images of',
    image: 'image',
    includedTitle: 'What’s included',
    notIncludedTitle: 'What’s not included',
    buying: 'Processing...',
    connectToBuy: 'Connect your wallet to purchase.',
    wrongNetworkShort: 'Unsupported network. Switch to Sepolia.',
    txReady: 'Transaction confirmed.',
    txCta: 'Open the transaction on Etherscan',
    txConfirming: 'Confirming transaction...',
    txConfirmingBody: 'Please wait a few seconds for network confirmation.',
    purchaseHistoryTitle: 'My purchases',
    purchaseHistoryEmpty: 'No purchases yet with this wallet.',
    purchaseHistoryCta: 'Open on Etherscan',
    footerTitle: 'Sustainable travel with ETH payments',
    footerEmail: 'Email',
    footerPhone: 'Phone',
    footerDevLabel: 'Development',
    footerDevValue: 'Developed by Ardelean Jonathan',
    langIt: 'IT',
    langEn: 'EN',
    langToggle: 'Switch language',
  },
}

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it')

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'it' ? 'en' : 'it')),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export function useI18n() {
  const { language, setLanguage, toggleLanguage } = useLanguage()
  const t = (key: TranslationKey) => translations[language][key]

  return { language, setLanguage, toggleLanguage, t }
}
