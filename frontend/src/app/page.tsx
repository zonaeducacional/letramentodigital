import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">EM</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">EducaMídia</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/entender"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Entender
            </Link>
            <Link
              href="/planejar"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Planejar
            </Link>
            <Link
              href="/recursos"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="/formacao"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Formação
            </Link>
            <Link
              href="/comunidade"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Comunidade
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="btn-secondary text-sm">
              Login
            </Link>
            <Link href="/cadastro" className="btn-primary text-sm">
              Cadastro
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                Novo Marco Legal - Lei 15.100/2025
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transforme a educação com
                <span className="text-primary-600"> educação midiática</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Plataforma integrada para formação, planejamento e implementação da educação midiática
                na educação básica. Alinhada à Resolução CNE 2/2025.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="btn-primary px-6 py-3">
                  Comece Agora
                </button>
                <button className="btn-secondary px-6 py-3">
                  Saiba Mais
                </button>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-primary-600">5.000+</p>
                  <p className="text-sm text-gray-600">Professores conectados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">1.200+</p>
                  <p className="text-sm text-gray-600">Planos de aula</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">300+</p>
                  <p className="text-sm text-gray-600">Recursos curados</p>
                </div>
              </div>
            </div>

            {/* Right Video Placeholder */}
            <div className="bg-gray-200 aspect-video rounded-xl flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
              <div className="bg-primary-600 rounded-full p-4">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Acesso Rápido</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '📚',
                title: 'Entender',
                description: 'Fundamentos, marco legal e framework conceitual',
                color: 'from-blue-500/10 to-blue-600/10',
              },
              {
                icon: '📋',
                title: 'Planejar',
                description: 'Gerador de situações didáticas e planos prontos',
                color: 'from-green-500/10 to-green-600/10',
              },
              {
                icon: '🎬',
                title: 'Recursos',
                description: 'Midiateca, ferramentas e materiais de apoio',
                color: 'from-purple-500/10 to-purple-600/10',
              },
              {
                icon: '🎓',
                title: 'Formação',
                description: 'Trilhas de aprendizagem e certificações',
                color: 'from-orange-500/10 to-orange-600/10',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`card p-6 bg-gradient-to-br ${item.color} hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Legal Milestones */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Marcos Legais</h2>

          <div className="space-y-8">
            {[
              {
                date: 'Mar 2025',
                title: 'Resolução CNE/CEB nº2',
                description:
                  'Estabelece a obrigatoriedade da educação digital e midiática a partir de 2026',
                highlight: true,
              },
              {
                date: 'Abr 2025',
                title: 'Lei 15.100/2025',
                description:
                  'Define regras para uso de dispositivos celulares nas escolas e integração de tecnologias',
              },
              {
                date: '2026',
                title: 'Metas MEC',
                description:
                  'Implementação em todas as redes de educação básica brasileira',
              },
            ].map((item) => (
              <div
                key={item.date}
                className={`flex gap-6 p-6 rounded-lg border-2 ${item.highlight
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-white'
                  }`}
              >
                <div className="min-w-fit">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${item.highlight
                        ? 'bg-primary-200 text-primary-800'
                        : 'bg-gray-200 text-gray-800'
                      }`}
                  >
                    {item.date}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua prática?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Explore nossos recursos, participe de nossa comunidade e implemente educação midiática
            em sua escola.
          </p>
          <button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors">
            Começar Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EM</span>
                </div>
                <span className="font-bold">EducaMídia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Plataforma para educação midiática na educação básica brasileira.
              </p>
            </div>

            {['Plataforma', 'Recursos', 'Sobre'].map((section) => (
              <div key={section}>
                <h4 className="font-semibold mb-4">{section}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Link
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Link
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Link
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 EducaMídia. Todos os direitos reservados.</p>
            <div className="flex gap-4 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
