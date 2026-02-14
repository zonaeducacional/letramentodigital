import Link from 'next/link'

export default function Home() {
  return (
    <>
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
                <Link href="/cadastro" className="btn-primary px-6 py-3 text-center">
                  Comece Agora
                </Link>
                <Link href="/entender" className="btn-secondary px-6 py-3 text-center">
                  Saiba Mais
                </Link>
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
                link: '/entender'
              },
              {
                icon: '📋',
                title: 'Planejar',
                description: 'Gerador de situações didáticas e planos prontos',
                color: 'from-green-500/10 to-green-600/10',
                link: '/planejar'
              },
              {
                icon: '🎬',
                title: 'Recursos',
                description: 'Midiateca, ferramentas e materiais de apoio',
                color: 'from-purple-500/10 to-purple-600/10',
                link: '/recursos'
              },
              {
                icon: '🎓',
                title: 'Formação',
                description: 'Trilhas de aprendizagem e certificações',
                color: 'from-orange-500/10 to-orange-600/10',
                link: '/formacao'
              },
            ].map((item) => (
              <Link
                href={item.link}
                key={item.title}
                className={`card p-6 bg-gradient-to-br ${item.color} hover:scale-105 transition-transform cursor-pointer block`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
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
          <Link href="/cadastro" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors">
            Começar Agora
          </Link>
        </div>
      </section>
    </>
  )
}
