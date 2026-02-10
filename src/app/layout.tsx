import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jak zgarnąć 900 zł od Santander? Prosta instrukcja.',
  description: 'Sprawdź, jak w kilku prostych krokach odebrać premię za założenie konta. Poradnik krok po kroku.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
