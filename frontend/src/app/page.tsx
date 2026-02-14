import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback gradient if video fails/loads */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800" />
          </video>
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-block animate-bounce-slow mb-4">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              ✨ Novo: Inteligência Artificial na Educação
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-primary-200 tracking-tight leading-tight drop-shadow-sm">
            Educando para a<br />
            <span className="text-white">Cidadania Digital</span>
            <span className="text-primary-400">.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            A primeira plataforma brasileira que une a BNCC Computação com ferramentas de IA para criar planos de aula inovadores em segundos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              href="/cadastro"
              className="group relative px-8 py-4 bg-primary-600 text-white font-bold rounded-xl text-lg shadow-xl hover:bg-primary-500 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Começar Agora
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
            </Link>

            <Link
              href="/entender"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ver Demonstração
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Acesso Rápido</h2>

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
                className={`card p-6 bg-gradient-to-br ${item.color} hover:scale-105 transition-transform cursor-pointer block rounded-xl border border-gray-100 shadow-sm`}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Marcos Legais</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                date: 'Mar 2025',
                title: 'Resolução CNE/CEB nº2',
                description: 'Estabelece a obrigatoriedade da educação digital e midiática a partir de 2026',
                highlight: true,
              },
              {
                date: 'Abr 2025',
                title: 'Lei 15.100/2025',
                description: 'Define regras para uso de dispositivos celulares nas escolas e integração de tecnologias',
              },
              {
                date: '2026',
                title: 'Metas MEC',
                description: 'Implementação em todas as redes de educação básica brasileira',
              },
            ].map((item) => (
              <div
                key={item.date}
                className={`flex flex-col md:flex-row gap-6 p-6 rounded-xl border ${item.highlight
                  ? 'border-primary-500 bg-primary-50 shadow-md'
                  : 'border-gray-200 bg-white hover:shadow-md transition-shadow'
                  }`}
              >
                <div className="min-w-fit">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${item.highlight
                      ? 'bg-primary-200 text-primary-800'
                      : 'bg-gray-200 text-gray-800'
                      }`}
                  >
                    {item.date}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para transformar sua prática?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Explore nossos recursos, participe de nossa comunidade e implemente educação midiática em sua escola hoje mesmo.
          </p>
          <Link href="/cadastro" className="inline-block bg-white text-primary-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-50 hover:shadow-lg hover:scale-105 transition-all duration-300">
            Começar Agora
          </Link>
        </div>
      </section>
    </>
  )
}
