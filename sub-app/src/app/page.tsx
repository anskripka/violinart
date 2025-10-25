'use client'

import {
  Identity,
  Avatar,
  Badge,
  Address,
  Name,
} from '@coinbase/onchainkit/identity'

export default function Home() {
  const yourAddress = '0x494c7fdB753c15b69fea2293e1b76567cA94462d';  // Твій гаманець
  const schemaId = '0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9';  // COINBASE_VERIFIED_SCHEMA_ID

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Tony&apos;s Violin Identity</h1>
        <Identity address={yourAddress} schemaId={schemaId}>
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32 rounded-full" />  {/* Аватар з ENS */}
            <div className="flex items-center space-x-2">
              <Name className="text-2xl font-bold" fallback="tonyviolin.base.eth" />  {/* ENS-ім'я */}
              <Badge tooltip="Coinbase Verified Account" className="bg-blue-500 px-2 py-1 rounded" />  {/* Бейдж з schemaId */}
            </div>
            <Address className="text-gray-400" />  {/* Адреса гаманця */}
            <div className="space-y-2 mt-4 text-sm text-gray-300">
              <p>From <a href="https://violinart.site" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">violinart.site</a></p>  {/* Лінк на сайт */}
              <a href="https://warpcast.com/tonyv" target="_blank" rel="noopener noreferrer" className="block text-blue-400">Farcaster: @tonyv</a>
              <a href="https://x.com/SkrypkaAnton" target="_blank" rel="noopener noreferrer" className="block text-blue-400">X: @SkrypkaAnton</a>
              <a href="https://github.com/anskripka" target="_blank" rel="noopener noreferrer" className="block text-blue-400">GitHub: anskripka</a>
            </div>
          </div>
        </Identity>
        <p className="mt-8 text-gray-300">Built on Base with OnchainKit</p>
      </div>
    </main>
  )
}
