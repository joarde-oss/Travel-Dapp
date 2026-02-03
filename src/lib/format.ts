export const shortAddress = (address?: string, chars = 4) => {
  if (!address) return ''
  const prefix = address.slice(0, 2 + chars)
  const suffix = address.slice(-chars)
  return `${prefix}...${suffix}`
}
