import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Floé Gaubert',
  description: 'Site vitrine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-background min-h-screen min-w-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
