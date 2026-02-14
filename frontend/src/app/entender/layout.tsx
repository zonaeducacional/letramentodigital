'use client'

import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const secoes = [
  { id: 'home', nome: 'Visão Geral', href: '/entender' },
  { id: 'fundamentos', nome: 'Fundamentos', href: '/entender/fundamentos' },
  { id: 'marcos', nome: 'Marcos Legais', href: '/entender/marcos-legais' },
  { id: 'conceitos', nome: 'Framework Conceitual', href: '/entender/conceitos' },
  { id: 'glossario', nome: 'Glossário', href: '/entender/glossario' },
]

export default function EntenderLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navegação da Seção */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto py-0">
            {secoes.map((secao) => (
              <Link
                key={secao.id}
                href={secao.href}
                className="px-4 py-3 font-medium whitespace-nowrap border-b-2 border-transparent text-gray-600 hover:text-primary-600 hover:border-primary-300 transition-colors"
              >
                {secao.nome}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer da Seção */}
      <div className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Próximas Etapas</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/planejar" className="hover:text-primary-600">
                    → Começar a Planejar
                  </Link>
                </li>
                <li>
                  <Link href="/recursos" className="hover:text-primary-600">
                    → Explorar Recursos
                  </Link>
                </li>
                <li>
                  <Link href="/formacao" className="hover:text-primary-600">
                    → Fazer Formação
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Referências</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Instituto Palavra Aberta</li>
                <li>Resolução CNE/CEB nº2 (2025)</li>
                <li>Lei nº 15.100/2025</li>
                <li>BNCC Computação (2022)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Dúvidas?</h4>
              <p className="text-sm text-gray-600 mb-3">
                Não entendeu algo? Confira nosso glossário ou participe da comunidade.
              </p>
              <Link
                href="/comunidade"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Ir para Comunidade →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
