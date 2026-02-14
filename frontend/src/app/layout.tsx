import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'EducaMídia - Portal de Educação Midiática',
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
    title: 'EducaMídia - Portal de Educação Midiática',
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
          {children}
        </div>
      </body>
    </html>
  )
}
