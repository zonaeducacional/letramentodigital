'use client'

import { motion } from 'framer-motion'

export default function RecursosPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Header */}
            <div className="bg-slate-900 text-white relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 text-blue-300 font-semibold mb-4 text-sm tracking-wider uppercase">
                            <span className="bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full">Recurso Fundamental</span>
                            <span>Tempo de leitura: 10 min</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Educação Midiática: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Navegando Criticamente no Mundo da Informação
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Um guia completo para compreender, aplicar e transformar a educação através da análise crítica das mídias no século XXI.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
                            <article className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-800 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-strong:text-slate-800 prose-li:text-slate-600">
                                <p className="lead text-xl text-slate-700 font-medium">
                                    A educação midiática tornou-se uma competência essencial no século XXI. Vivemos em uma era de abundância informacional sem precedentes, onde somos constantemente bombardeados por conteúdos de diversas fontes, formatos e intencionalidades.
                                </p>
                                <p>
                                    Compreender como as mídias funcionam, como produzem significados e como podemos nos relacionar criticamente com elas é fundamental para exercer nossa cidadania de forma plena e consciente.
                                </p>

                                <h2>O que é Educação Midiática?</h2>
                                <p>
                                    Educação midiática, também chamada de alfabetização midiática ou letramento midiático, refere-se ao conjunto de conhecimentos, habilidades e atitudes necessárias para acessar, analisar, avaliar, criar e participar de forma crítica e consciente no ambiente midiático contemporâneo.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg not-prose">
                                    <h4 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Definição da UNESCO
                                    </h4>
                                    <p className="text-blue-800 text-sm">
                                        Um conjunto de competências que permitem aos cidadãos engajar-se de forma efetiva com mídias e outros provedores de informação, desenvolvendo pensamento crítico e habilidades de aprendizagem ao longo da vida.
                                    </p>
                                </div>

                                <h2>Por que é Importante?</h2>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li><strong>Tempo de exposição:</strong> Passamos mais de seis horas diárias conectados a algum tipo de mídia.</li>
                                    <li><strong>Desinformação:</strong> Fake news e conteúdos manipulados exigem verificação constante.</li>
                                    <li><strong>Produção de conteúdo:</strong> Todos somos potenciais produtores, o que exige ética e responsabilidade.</li>
                                    <li><strong>Construção da realidade:</strong> As mídias moldam percepções de mundo, identidades e narrativas históricas.</li>
                                </ul>

                                <h2>Conceitos Fundamentais</h2>
                                <p>Para desenvolver competências midiáticas, precisamos compreender conceitos essenciais que nos ajudam a desconstruir mensagens:</p>
                                <div className="grid sm:grid-cols-2 gap-4 not-prose my-8">
                                    {[
                                        { title: "Construção da Realidade", desc: "Mídias não refletem a realidade neutra, mas a constroem através de escolhas editoriais." },
                                        { title: "Linguagens e Códigos", desc: "Cada meio (TV, internet, cinema) possui gramática própria para criar significados." },
                                        { title: "Audiências Ativas", desc: "Interpretamos mensagens baseados em nossas experiências e contextos culturais." },
                                        { title: "Economia Política", desc: "Interesses comerciais e políticos influenciam o conteúdo produzido." },
                                        { title: "Representação", desc: "Análise de como grupos sociais são retratados e estereotipados." }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                            <h4 className="font-bold text-slate-800 mb-1 text-sm">{item.title}</h4>
                                            <p className="text-slate-600 text-xs">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <h2>Competências Desenvolvidas</h2>
                                <p>
                                    A educação midiática desenvolve competências integradas: <strong>Acesso e uso</strong> funcional das tecnologias; <strong>Compreensão e análise</strong> crítica de mensagens; <strong>Avaliação</strong> de credibilidade e viés; <strong>Criação e produção</strong> de conteúdos próprios; <strong>Reflexão ética</strong> sobre responsabilidades; e <strong>Participação cidadã</strong> ativa.
                                </p>

                                <h2>Educação Midiática na Escola</h2>
                                <p>
                                    Não deve ser uma disciplina isolada, mas transversal:
                                </p>
                                <ul>
                                    <li><strong>Língua Portuguesa:</strong> Análise de gêneros textuais, fake news e argumentação.</li>
                                    <li><strong>História/Geografia:</strong> Como eventos são representados e narrativas construídas.</li>
                                    <li><strong>Ciências:</strong> Avaliação de evidências e combate à pseudociência.</li>
                                    <li><strong>Artes:</strong> Produção audiovisual e análise estética.</li>
                                    <li><strong>Matemática:</strong> Interpretação de dados e estatísticas em notícias.</li>
                                </ul>

                                <h2>Conclusão</h2>
                                <p>
                                    Educação midiática não é luxo, mas necessidade urgente para preservar nossa autonomia e democracia. Desenvolver essas competências é investir em cidadania plena e em uma sociedade mais justa e informada.
                                </p>
                            </article>

                            {/* Actions Footer */}
                            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                                    Compartilhar Recurso
                                </button>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm">
                                        Baixar PDF
                                    </button>
                                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium text-sm">
                                        Salvar na Biblioteca
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 sticky top-24"
                        >
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                Materiais Relacionados
                            </h3>
                            <ul className="space-y-4">
                                <li className="group cursor-pointer">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex-shrink-0 flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors">
                                            🎬
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">Análise de Vídeo: Propaganda x Informação</h4>
                                            <span className="text-xs text-slate-400">Plano de Aula • 45 min</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="group cursor-pointer">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex-shrink-0 flex items-center justify-center text-green-600 group-hover:bg-green-200 transition-colors">
                                            📊
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">Checklist de Verificação de Fontes</h4>
                                            <span className="text-xs text-slate-400">Material de Apoio • PDF</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="group cursor-pointer">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 group-hover:bg-purple-200 transition-colors">
                                            🎲
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">Jogo: Caçadores de Bot</h4>
                                            <span className="text-xs text-slate-400">Interativo • Online</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <button className="w-full py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                                    Ver Biblioteca Completa
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
