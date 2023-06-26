import Header from './components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '어플라이언스 코리아 | Applyance Korea',
  description: 'Applyance Korea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
          <Header/>
        {children}
        </body>
    </html>
  )
}
