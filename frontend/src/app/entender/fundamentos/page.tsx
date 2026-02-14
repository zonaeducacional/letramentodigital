'use client'

import { ConceptCard } from '@/components/sections/EntenderComponents'

export default function FundamentosPage() {
  return (
    <div className="space-y-12">
      {/* Título e Introdução */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Fundamentos da Educação Midiática</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Educação midiática é o desenvolvimento de habilidades, conhecimentos e atitudes para
          entender criticamente como as mídias funcionam na sociedade. Não é apenas usar
          tecnologia, mas pensá-la criticamente.
        </p>
      </section>

      {/* O que é Educação Midiática */}
      <section className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">O Que É Educação Midiática?</h2>
        <div className="prose prose-sm max-w-none">
          <p>
            <strong>Educação midiática</strong> (ou media literacy) é a capacidade de acessar,
            analisar, avaliar e comunicar-se através de vários tipos de mídias. Vai além de
            simplesmente consumir conteúdo - é questionar, investigar e criar.
          </p>
          <p className="mt-4">
            Envolve três competências principais:
          </p>
        </div>
      </section>

      {/* 3 Pilares */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">3 Pilares Fundamentais</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ConceptCard
            icon="🔍"
            titulo="Ler com Criticidade"
            descricao="Analisar mensagens midiáticas, identificar vieses, questionar fontes e reconhecer manipulação."
            cor="border-blue-400"
          />
          <ConceptCard
            icon="✍️"
            titulo="Produzir Responsavelmente"
            descricao="Criar conteúdos próprios com ética, considerando impacto e respeitando direitos autorais."
            cor="border-green-400"
          />
          <ConceptCard
            icon="🤝"
            titulo="Participar Conscientemente"
            descricao="Engajar-se em redes sociais de forma respeitosa, conhecendo direitos e deveres digitais."
            cor="border-purple-400"
          />
        </div>
      </section>

      {/* Diferenças Importantes */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Diferenças Importantes (O que NÃO é)
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold text-gray-900 mb-2">❌ Não é só Alfabetização Digital</h3>
            <p className="text-gray-700">
              Alfabetização digital ensina a usar ferramentas (Ctrl+C, criar email, etc).
              Educação midiática vai além: ensina a <strong>pensar criticamente</strong> sobre
              essas ferramentas.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold text-gray-900 mb-2">❌ Não é Rejeição à Tecnologia</h3>
            <p className="text-gray-700">
              Não é dizer "não use celular, é ruim". É ensinar a usar de forma consciente,
              questionador e criativo.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold text-gray-900 mb-2">❌ Não é só Consumir Conteúdo</h3>
            <p className="text-gray-700">
              Não é assistir a um vídeo na aula. É analisar <strong>por que</strong> aquele vídeo
              foi feito assim, <strong>quem</strong> lucra com ele, <strong>qual viés</strong> tem.
            </p>
          </div>
        </div>
      </section>

      {/* Por que é importante */}
      <section className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Por Que É Tão Importante Agora?</h2>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <strong>Tecnologia ao alcance:</strong> 92% dos adolescentes brasileiros usam
              internet, mas nem todos sabem diferenciar fato de opinião.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">🔗</span>
            <div>
              <strong>Desinformação em massa:</strong> Deep fakes, notícias falsas e boatos
              espalham-se rapidamente.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <strong>Algoritmos manipulam:</strong> Redes sociais filtram o que você vê,
              criando "bolhas" informacionais.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">💰</span>
            <div>
              <strong>Dados como moeda:</strong> Suas informações pessoais são coletadas e
              vendidas - é importante conhecer seus direitos.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">🗳️</span>
            <div>
              <strong>Cidadania digital:</strong> Para participar criticamente da sociedade,
              precisamos entender o ambiente digital.
            </div>
          </li>
        </ul>
      </section>

      {/* Framework Conceitual Resumido */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Primeiros Passos Pedagógicos</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="font-semibold text-gray-900 mb-4">
            Comece fazendo perguntas com seus alunos:
          </h3>
          <div className="space-y-3">
            <p>
              <strong>🤔 Qual é a mensagem?</strong> O que esse conteúdo está tentando comunicar?
            </p>
            <p>
              <strong>👤 Quem fez?</strong> Quem criou isso? Com que objetivo? Quanto custou?
            </p>
            <p>
              <strong>🎬 Como foi feito?</strong> Que técnicas (cores, sons, edição) foram
              usadas?
            </p>
            <p>
              <strong>📊 É verdade?</strong> Como posso verificar se as informações são precisas?
            </p>
            <p>
              <strong>💭 O que faltou?</strong> Quem ou o que não aparece nessa mensagem?
            </p>
            <p>
              <strong>🎯 Por que me mostraram isso?</strong> Por que o algoritmo colocou isso no
              meu feed?
            </p>
          </div>
        </div>
      </section>

      {/* Próximo Passo */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pronto para o Próximo Passo?</h2>
        <p className="text-gray-700 mb-6">
          Explore os 4 Conceitos Críticos e 3 Eixos que estruturam toda educação midiática.
        </p>
        <a href="/entender/conceitos" className="btn-primary px-8 py-3">
          Conhecer o Framework Conceitual →
        </a>
      </section>
    </div>
  )
}
