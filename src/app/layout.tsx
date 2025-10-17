'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import './globals.css'

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const geistMonoFont = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

// export const metadata: Metadata = {
//   title: 'Native Teams Blog',
//   description: 'A Next.js Blog app'
// }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </head>
      <body className={`${interFont.variable} ${geistMonoFont.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-right' />
        </QueryClientProvider>
      </body>
    </html>
  )
}
