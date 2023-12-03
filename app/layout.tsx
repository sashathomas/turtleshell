import type { Metadata } from 'next'
import { Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'turtleshell',
  description: 'Sasha\'s personal website.',
  openGraph: {
    title: 'turtleshell.me',
    description: 'Sasha\'s personal website',
    url: 'https://turtleshell.me',
    siteName: 'turtleshell.me',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/59403796?v=4',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a4fb6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
