import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Letramento Digital - Portal de Educação Midiática',
  description:
    'Plataforma integrada para apoiar professores na implementação da educação midiática na educação básica brasileira',
  keywords: [
    'educação midiática',
    'letramento digital',
    'BNCC',
    'formação docente',
    'educação crítica',
  ],
  authors: [
    {
      name: 'Instituto Palavra Aberta',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://educamidia.com',
    title: 'Letramento Digital - Portal de Educação Midiática',
    description:
      'Plataforma integrada para apoiar professores na implementação da educação midiática',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
