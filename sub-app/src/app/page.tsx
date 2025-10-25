'use client'

import {
  Identity,
  Avatar,
  Badge,
  Address,
  Name,
} from '@coinbase/onchainkit/identity'

export default function Home() {
  const yourAddress = '0x494c7fdB753c15b69fea2293e1b76567cA94462d';
  const schemaId = '0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Ідентичність Тоні Віолін</h1>  {/* Українська назва */}
        <Identity address={yourAddress} schemaId={schemaId}>
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32 rounded-full" />
            <div className="flex items-center space-x-2">
              <Name className="text-2xl font-bold" />  {/* ENS: tonyviolin.base.eth */}
              <Badge tooltip="Верифікований Coinbase" className="bg-blue-500 px-2 py-1 rounded" />  {/* UA tooltip */}
            </div>
            <Address className="text-gray-400" />
            <div className="space-y-2 mt-4 text-sm text-gray-300">
              <p>З сайту <a href="https://violinart.site" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">violinart.site</a></p>
              <a href="https://warpcast.com/tonyv" target="_blank" rel="noopener noreferrer" className="block text-blue-400">Farcaster: @tonyv</a>
              <a href="https://x.com/SkrypkaAnton" target="_blank" rel="noopener noreferrer" className="block text-blue-400">X: @SkrypkaAnton</a>
              <a href="https://github.com/anskripka" target="_blank" rel="noopener noreferrer" className="block text-blue-400">GitHub: anskripka</a>
            </div>
          </div>
        </Identity>
        <p className="mt-8 text-gray-300">Створено на Base з OnchainKit</p>  {/* UA */}
      </div>
    </main>
  )
}
