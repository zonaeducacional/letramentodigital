import React from 'react'

interface ConceptCardProps {
  icon: string
  titulo: string
  descricao: string
  cor: string
}

export const ConceptCard: React.FC<ConceptCardProps> = ({
  icon,
  titulo,
  descricao,
  cor,
}) => {
  return (
    <div className={`card p-6 border-l-4 ${cor}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{titulo}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{descricao}</p>
    </div>
  )
}

interface TimelineItemProps {
  date: string
  title: string
  description: string
  highlight?: boolean
  index?: number
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  highlight,
  index,
}) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full ${
            highlight ? 'bg-primary-600 scale-125' : 'bg-gray-300'
          }`}
        />
        {index !== undefined && (
          <div className={`w-1 flex-1 ${highlight ? 'bg-primary-600' : 'bg-gray-200'}`} />
        )}
      </div>
      <div className="pb-12">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
            highlight
              ? 'bg-primary-100 text-primary-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {date}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  )
}

interface GlossaryTermProps {
  termo: string
  definicao: string
  exemplo: string
  sinonimos?: string[]
}

export const GlossaryTerm: React.FC<GlossaryTermProps> = ({
  termo,
  definicao,
  exemplo,
  sinonimos,
}) => {
  return (
    <div className="card p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-primary-600 mb-2">{termo}</h3>
      <p className="text-gray-700 mb-3">{definicao}</p>
      <div className="bg-gray-50 p-3 rounded border-l-4 border-primary-300 mb-3">
        <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Exemplo</p>
        <p className="text-sm text-gray-700 italic">{exemplo}</p>
      </div>
      {sinonimos && sinonimos.length > 0 && (
        <div className="text-xs">
          <p className="font-semibold text-gray-600 mb-1">Sinônimos:</p>
          <div className="flex flex-wrap gap-2">
            {sinonimos.map((sin) => (
              <span
                key={sin}
                className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded"
              >
                {sin}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

interface NavegacaoSecaoProps {
  secoes: Array<{ id: string; nome: string; href: string }>
  atual: string
}

export const NavegacaoSecao: React.FC<NavegacaoSecaoProps> = ({ secoes, atual }) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 overflow-x-auto">
          {secoes.map((secao) => (
            <a
              key={secao.id}
              href={secao.href}
              className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${
                atual === secao.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-primary-600'
              }`}
            >
              {secao.nome}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
