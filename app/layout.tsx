import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AOSInit } from './components/AOS'
const inter = Inter({ subsets: ['latin'] })
import Nav from './components/Nav';
import { Suspense } from 'react'
import Loading from './loading'

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
        <Suspense fallback={<Loading/>}>
          <main className={inter.className}>{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
