import { Inter } from 'next/font/google'
import '../styles/index.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeProvider from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EnredArte - Bisutería, Maquillaje y Pulseras Hechas a Mano',
  description: 'Descubre nuestra colección única de bisutería artesanal, maquillaje y pulseras hechas a mano con amor y dedicación.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <div className="layout">
            <Navbar />
            <main className="mainContent">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}