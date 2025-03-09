import { ReactNode, Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/app/globals.scss'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Search App',
  description: 'A Search app built with Next.js',
}

export const viewport = 'width=device-width, initial-scale=1'

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </body>
  </html>
)

export default RootLayout
