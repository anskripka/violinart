'use client'

import { OnchainKitProvider } from '@coinbase/onchainkit'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      defaultChainId={8453}  // Base Mainnet ID (замість base об'єкта)
      mode="light"  // Опціонально: light/dark/auto
    >
      {children}
    </OnchainKitProvider>
  )
}
