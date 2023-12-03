import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AOSInit } from './components/aos'
const inter = Inter({ subsets: ['latin'] })
import Nav from './components/Nav';
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "YutongZ",
  description:"Yutong Zhu's Personal Website"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        <Nav />
          <main className={inter.className}>{children}</main>
      </body>
    </html>
  )
}
