import type { Metadata } from 'next'
import { Inter as FontSans, Annie_Use_Your_Telescope } from 'next/font/google'
import './globals.css'
import { cn } from '@/shared/lib/utils'
import { Footer } from './ui/footer'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontAnnie = Annie_Use_Your_Telescope({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-annie',
})

export const metadata: Metadata = {
  title: 'Template by belowevolve',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable, fontAnnie.variable)}>
        <div className='mx-auto max-w-screen-2xl scroll-smooth px-4 xl:px-40'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
