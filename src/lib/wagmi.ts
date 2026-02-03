import { http } from 'viem'
import { sepolia } from 'wagmi/chains'
import { createConfig } from 'wagmi'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected({
      target: 'metaMask',
      unstable_shimAsyncInject: true,
    }),
  ],
  storage: null,
  transports: {
    [sepolia.id]: http(),
  },
})
