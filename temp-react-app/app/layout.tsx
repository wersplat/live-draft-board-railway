import type { Metadata } from 'next'
import { Providers } from './providers'
import Layout from '@/components/Layout'
import '../src/styles/index.css'
import '../src/styles/theme.css'

export const metadata: Metadata = {
  title: 'Legends Basketball Association',
  description: 'The premier competitive basketball league',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  )
}
