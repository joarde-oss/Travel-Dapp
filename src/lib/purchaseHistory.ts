export type PurchaseHistoryItem = {
  txHash: string
  tripId: string
  tripName: string
  priceEth: string
  timestamp: number
}

const STORAGE_PREFIX = 'gt:purchases:'

const getKey = (address: string) => `${STORAGE_PREFIX}${address.toLowerCase()}`

const safeParse = (raw: string | null): PurchaseHistoryItem[] => {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as PurchaseHistoryItem[]) : []
  } catch {
    return []
  }
}

export const getPurchaseHistory = (address: string): PurchaseHistoryItem[] => {
  if (typeof window === 'undefined') return []
  return safeParse(window.localStorage.getItem(getKey(address)))
}

export const addPurchaseHistory = (address: string, item: PurchaseHistoryItem) => {
  if (typeof window === 'undefined') return
  const existing = getPurchaseHistory(address)
  const alreadyExists = existing.some((entry) => entry.txHash === item.txHash)
  if (alreadyExists) return
  const next = [item, ...existing].slice(0, 50)
  window.localStorage.setItem(getKey(address), JSON.stringify(next))
  window.dispatchEvent(new Event('gt:purchase'))
}
