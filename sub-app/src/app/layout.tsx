import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'  // Import client wrapper

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tony\'s Violin Identity',
  description: 'Showcase ENS and socials on Base',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>  // Client providers here
          {children}
        </Providers>
      </body>
    </html>
  )
}
