import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import './globals.css'

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const geistMonoFont = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Native Teams Blog',
  description: 'A Next.js Blog app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </head>
      <body className={`${interFont.variable} ${geistMonoFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
