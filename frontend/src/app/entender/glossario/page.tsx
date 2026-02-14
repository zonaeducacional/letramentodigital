'use client'

import { glossario } from '@/data/entender'
import { GlossaryTerm } from '@/components/sections/EntenderComponents'
import { useState } from 'react'

export default function GlossarioPage() {
  const [busca, setBusca] = useState('')

  const termosFiltrados = glossario.filter(
    (termo) =>
      termo.termo.toLowerCase().includes(busca.toLowerCase()) ||
      termo.definicao.toLowerCase().includes(busca.toLowerCase()),
  )

  return (
    <div className="space-y-12">
      {/* Título */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Glossário de Educação Midiática</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Termos-chave e conceitos essenciais de educação midiática com definições claras e
          exemplos práticos.
        </p>
      </section>

      {/* Busca */}
      <section>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar termo (ex: deep fake, desinformação, LGPD)..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        {busca && (
          <p className="text-sm text-gray-600 mt-2">
            {termosFiltrados.length} termo{termosFiltrados.length !== 1 ? 's' : ''} encontrado
            {termosFiltrados.length !== 1 ? 's' : ''}
          </p>
        )}
      </section>

      {/* Termos em Grid */}
      <section>
        {termosFiltrados.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {termosFiltrados.map((termo) => (
              <GlossaryTerm
                key={termo.termo}
                termo={termo.termo}
                definicao={termo.definicao}
                exemplo={termo.exemplo}
                sinonimos={termo.sinonimos}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhum termo encontrado com "{busca}"
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Tente outro termo ou limpe a busca
            </p>
            <button
              onClick={() => setBusca('')}
              className="mt-4 text-primary-600 hover:text-primary-700 font-semibold text-sm"
            >
              ← Voltar ao glossário completo
            </button>
          </div>
        )}
      </section>

      {/* Categorias */}
      {!busca && (
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Categorias de Termos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🔍 Análise e Verificação</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Desinformação</li>
                <li>• Verificação de Fatos</li>
                <li>• Deep Fake</li>
                <li>• Bolha Algorítmica</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">⚖️ Direitos e Privacidade</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• LGPD</li>
                <li>• Coleta de Dados</li>
                <li>• Direitos Digitais</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🤝 Comunidade e Segurança</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Discurso de Ódio</li>
                <li>• Curadoria de Conteúdo</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Como usar o glossário */}
      <section className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Como Usar Este Glossário</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">👨‍🏫</div>
            <div>
              <strong>Para Professores:</strong> Compartilhe os termos com seus alunos antes de
              trabalhar o tema, ou use como referência para suas aulas.
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">👨‍🎓</div>
            <div>
              <strong>Para Alunos:</strong> Consulte quando encontrar uma palavra que não conhece
              durante as aulas ou pesquisas.
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">📋</div>
            <div>
              <strong>Para Planejamento:</strong> Use os termos para estruturar suas situações
              didáticas e certificar-se de que está usando linguagem apropriada.
            </div>
          </div>
        </div>
      </section>

      {/* Sugerir novo termo */}
      <section className="bg-white border-2 border-primary-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Faltou algum termo?</h3>
        <p className="text-gray-700 mb-6">
          Este glossário está em construção e cresce com sugestões da comunidade.
        </p>
        <button className="btn-primary px-6 py-3">Sugerir Novo Termo</button>
      </section>
    </div>
  )
}
