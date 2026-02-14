'use client'

import { conceitos, eixos } from '@/data/entender'
import { useState } from 'react'

export default function ConceitosPage() {
  const [conceituoSelecionado, setConceituoSelecionado] = useState('linguagem')
  const [eixoSelecionado, setEixoSelecionado] = useState('ler')

  const conceito = conceitos.find((c) => c.id === conceituoSelecionado)
  const eixo = eixos.find((e) => e.id === eixoSelecionado)

  return (
    <div className="space-y-12">
      {/* Título */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Framework Conceitual</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Estrutura pedagógica baseada em 4 Conceitos Críticos (David Buckingham) e 3 Eixos
          EducaMídia (Instituto Palavra Aberta).
        </p>
      </section>

      {/* 4 Conceitos Críticos */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          🧠 Os 4 Conceitos Críticos de Buckingham
        </h2>

        {/* Navegação de Conceitos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {conceitos.map((c) => (
            <button
              key={c.id}
              onClick={() => setConceituoSelecionado(c.id)}
              className={`p-4 rounded-lg font-semibold transition-colors ${
                conceituoSelecionado === c.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {c.nome}
            </button>
          ))}
        </div>

        {/* Detalhe do Conceito Selecionado */}
        {conceito && (
          <div className="bg-white border-2 border-primary-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{conceito.nome}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{conceito.descricao}</p>

            {/* Perguntas Orientadoras */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">❓ Perguntas Orientadoras</h4>
              <ul className="space-y-2">
                {conceito.perguntas.map((pergunta, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-primary-600 font-semibold">•</span>
                    <span>{pergunta}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exemplos */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">💡 Exemplos Práticos</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {conceito.exemplos.map((exemplo, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 border-l-4 border-primary-400"
                  >
                    {exemplo}
                  </div>
                ))}
              </div>
            </div>

            {/* Anos Recomendados */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Recomendado para:</strong> Anos {conceito.anoRecomendado.join(', ')}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 3 Eixos EducaMídia */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🎯 Os 3 Eixos EducaMídia</h2>
        <p className="text-gray-700 mb-8">
          Cada eixo representa uma competência essencial que os estudantes devem desenvolver:
        </p>

        {/* Navegação de Eixos */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {eixos.map((e) => (
            <button
              key={e.id}
              onClick={() => setEixoSelecionado(e.id)}
              className={`p-4 rounded-lg text-left transition-all ${
                eixoSelecionado === e.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-2xl mb-2">{e.nome.split(' ')[0]}</div>
              <div className="font-semibold">{e.nome.split(' ').slice(1).join(' ')}</div>
              <div className="text-xs mt-1 opacity-75">{e.descPequena}</div>
            </button>
          ))}
        </div>

        {/* Detalhe do Eixo Selecionado */}
        {eixo && (
          <div className="bg-white border-2 border-primary-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{eixo.nome}</h3>
            <p className="text-primary-600 font-semibold text-sm mb-4">{eixo.descPequena}</p>
            <p className="text-gray-700 mb-8 leading-relaxed">{eixo.descricao}</p>

            {/* Competências */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">✅ Competências a Desenvolver</h4>
              <ul className="space-y-2">
                {eixo.competencias.map((comp, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-primary-600">✓</span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metodologias */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">🎓 Metodologias Sugeridas</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {eixo.metodologias.map((met, idx) => (
                  <div
                    key={idx}
                    className="bg-primary-50 p-3 rounded text-sm text-gray-700 border-l-2 border-primary-400"
                  >
                    {met}
                  </div>
                ))}
              </div>
            </div>

            {/* Ferramentas */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">🛠️ Ferramentas Recomendadas</h4>
              <div className="flex flex-wrap gap-2">
                {eixo.ferramentas.map((ferr, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                  >
                    {ferr}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Integração dos Conceitos e Eixos */}
      <section className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Como Integrar?</h2>
        <p className="text-gray-700 mb-6">
          Os 4 Conceitos Críticos e 3 Eixos funcionam juntos. Veja um exemplo:
        </p>
        <div className="bg-white p-6 rounded-lg border-l-4 border-primary-400">
          <h3 className="font-semibold text-gray-900 mb-4">
            Exemplo: Analisar uma Publicidade no Instagram
          </h3>
          <div className="space-y-4">
            <div>
              <strong>Eixo: LER</strong> (Análise crítica)
              <p className="text-gray-700 text-sm">
                Aplicar Conceitos de Linguagem (efeitos visuais), Representação (quem aparece?),
                Produção (quem lucra?) e Público (impacto em nós).
              </p>
            </div>
            <div>
              <strong>Eixo: ESCREVER</strong> (Produção)
              <p className="text-gray-700 text-sm">
                Criar uma publicidade diferente usando as mesmas técnicas, mas com mensagem
                contrária/crítica.
              </p>
            </div>
            <div>
              <strong>Eixo: PARTICIPAR</strong> (Cidadania)
              <p className="text-gray-700 text-sm">
                Compartilhar nas redes sociais respeitosamente, debater com colegas sobre
                diferenças de interpretação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Rápido */}
      <section className="bg-yellow-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">✏️ Teste seu Conhecimento</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold text-gray-900 mb-2">Pergunta 1</h3>
            <p className="text-gray-700 mb-4">
              Qual é a diferença entre "Linguagem" e "Representação"?
            </p>
            <div className="space-y-2">
              <label className="flex gap-2 cursor-pointer">
                <input type="radio" name="q1" /> Linguagem é como a mensagem é feita,
                Representação é quem aparece nela
              </label>
              <label className="flex gap-2 cursor-pointer">
                <input type="radio" name="q1" /> São a mesma coisa
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold text-gray-900 mb-2">Pergunta 2</h3>
            <p className="text-gray-700 mb-4">
              Um aluno cria um vídeo crítico sobre fast fashion. Em qual Eixo ele está?
            </p>
            <div className="space-y-2">
              <label className="flex gap-2 cursor-pointer">
                <input type="radio" name="q2" /> LER - ele analisou o problema
              </label>
              <label className="flex gap-2 cursor-pointer">
                <input type="radio" name="q2" /> ESCREVER - ele criou conteúdo próprio
              </label>
              <label className="flex gap-2 cursor-pointer">
                <input type="radio" name="q2" /> PARTICIPAR - ele compartilhou
              </label>
            </div>
          </div>

          <button className="btn-primary px-6 py-3">Enviar Respostas</button>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pronto para Aplicar?</h2>
        <p className="text-gray-700 mb-6">
          Use este framework para planejar suas aulas e gerar situações didáticas.
        </p>
        <a href="/planejar" className="btn-primary px-8 py-3">
          Ir para Gerador de Planejamento →
        </a>
      </section>
    </div>
  )
}
