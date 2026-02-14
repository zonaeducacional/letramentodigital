'use client'

import { motion } from 'framer-motion'

export default function EntenderPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 text-white pb-32 pt-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              Fundamentos da Educação Digital
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-indigo-200">
              Muito além das <br />
              <span className="text-blue-400">Fake News</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
              Educação Midiática é sobre ler o mundo, escrever sua própria narrativa e participar da sociedade de forma responsável.
            </p>
          </motion.div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]" />
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
        {/* O que é Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                </span>
                Definição Clara
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Não se trata apenas de checar fatos. A Educação Midiática é o conjunto de habilidades que permite <strong>acessar, analisar, criar e participar</strong> de maneira crítica do ambiente informacional e midiático em todos os formatos — do impresso ao digital.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-blue-50 rounded-lg text-blue-700 font-medium text-sm">Pensamento Crítico</div>
                <div className="px-4 py-2 bg-indigo-50 rounded-lg text-indigo-700 font-medium text-sm">Socioemocional</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-white rounded-2xl p-8 border border-slate-100 relative">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Destaque</div>
              <p className="italic text-slate-600 font-serif text-lg text-center">
                "Ser letrado digitalmente é ser capaz de usar a tecnologia não apenas para consumir informação, mas para resolver problemas."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Aprofunde-se</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">Veja na Prática</h2>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white bg-slate-900 ring-1 ring-slate-900/5">
              <video
                className="w-full aspect-video object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="https://dev05.nekoweb.org/Educa%C3%83%C2%A7%C3%83%C2%A3o_Midi%C3%83%C2%A1tica.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
            <p className="text-center text-slate-500 mt-4 text-sm">
              Um panorama visual sobre como a educação midiática transforma a sala de aula.
            </p>
          </div>
        </motion.div>

        {/* BNCC Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">A Ponte com a BNCC</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A educação midiática não é uma disciplina isolada, mas uma camada transversal que conecta competências essenciais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Pensamento Computacional</h3>
              <p className="text-slate-600">
                Compreender os algoritmos e a lógica por trás das redes sociais e plataformas digitais.
              </p>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl shadow-lg transform md:-translate-y-4 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Competências Gerais</h3>
              <p className="text-blue-100">
                A competência 5 da BNCC trata especificamente da cultura digital e do uso crítico das tecnologias.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Língua Portuguesa</h3>
              <p className="text-slate-600">
                O campo jornalístico-midiático: análise de fontes, gêneros textuais e autoria.
              </p>
            </div>
          </div>
        </div>

        {/* Os 3 Eixos */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Os 3 Eixos da Educação Midiática
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
                  title: "Ler",
                  desc: "Interpretar informações, identificar viés e checar fatos com rigor.",
                  color: "bg-pink-500"
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
                  title: "Escrever",
                  desc: "Produzir conteúdo multimídia com ética e responsabilidade autoral.",
                  color: "bg-blue-500"
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                  title: "Participar",
                  desc: "Engajar-se em causas cívicas e dialogar nas redes com respeito.",
                  color: "bg-purple-500"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Now / Law Context */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center bg-yellow-50 rounded-3xl p-8 md:p-12 border border-yellow-100">
          <div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">Por que agora?</h2>
            <p className="text-yellow-800/80 mb-6 leading-relaxed">
              Com a promulgação da <strong>Lei 15.100/2025</strong> e a crescente presença de dispositivos móveis nas escolas, torna-se urgente preparar os alunos para o uso consciente dessas ferramentas. O celular deve ser uma ferramenta pedagógica, não apenas de distração.
            </p>
            <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-xl shadow-lg shadow-yellow-600/20 transition-all flex items-center gap-2">
              Conhecer a Legislação
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] bg-yellow-200/50 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-9xl opacity-20 select-none">⚖️</div>
          </div>
        </div>

      </div>
    </div>
  )
}
