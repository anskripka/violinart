'use client'

import { ChainProvider } from '@coinbase/onchainkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { base } from 'wagmi/chains'
import { WagmiProvider } from 'wagmi'
import { createConfig, http } from 'wagmi'
import { ReactNode } from 'react'

const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http()
  }
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ChainProvider defaultChainId={base.id}>
          {children}
        </ChainProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
