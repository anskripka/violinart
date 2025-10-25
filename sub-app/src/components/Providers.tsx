'use client'

import { OnchainKitProvider } from '@coinbase/onchainkit'  // Правильний провайдер
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
        <OnchainKitProvider defaultChain={base}>  // Правильний провайдер з defaultChain
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
