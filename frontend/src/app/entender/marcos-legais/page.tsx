'use client'

import { marcosLegais } from '@/data/entender'
import { TimelineItem } from '@/components/sections/EntenderComponents'

export default function MarcosLegaisPage() {
  return (
    <div className="space-y-12">
      {/* Título */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Marcos Legais e Legislação</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          A educação midiática não é apenas uma sugestão pedagógica - é uma exigência legal. Conheça
          os marcos legais que tornam isso obrigatório a partir de 2026.
        </p>
      </section>

      {/* Resolução CNE - Destaque */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 md:p-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">⚖️ Resolução CNE/CEB nº2 (Março 2025)</h2>
          <p className="text-lg mb-6">
            "Estabelece diretrizes curriculares para educação digital e midiática na educação
            básica, em conformidade com a Lei Geral de Proteção de Dados Pessoais"
          </p>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">✅ Principais Determinações:</h3>
            <ul className="space-y-2">
              <li>• Obrigatória a partir de 2026 em todas as escolas (pública e privada)</li>
              <li>• Integração transversal com componentes curriculares</li>
              <li>• Formação continuada de professores é obrigatória</li>
              <li>• Reorganização curricular em 3 etapas pelo MEC</li>
              <li>• Segurança de dados e LGPD devem ser respeitadas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Timeline de Implementação</h2>
        <div className="space-y-0">
          {marcosLegais.map((marco, index) => (
            <TimelineItem
              key={marco.data}
              date={marco.data}
              title={marco.titulo}
              description={marco.descricao}
              highlight={marco.destaque}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Lei 15.100 */}
      <section className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📱 Lei nº 15.100/2025</h2>
        <p className="text-gray-700 mb-6">
          Define que celulares <strong>podem ser usados pedagogicamente</strong> na escola, desde
          que com orientação adequada.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold text-gray-900 mb-3">✅ Permitido</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Usar como ferramenta educacional</li>
              <li>• Pesquisas orientadas</li>
              <li>• Produção de conteúdo</li>
              <li>• Análise crítica de mídias</li>
              <li>• Com consentimento dos pais</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
            <h3 className="font-semibold text-gray-900 mb-3">❌ Não Permitido</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Sem supervisão do professor</li>
              <li>• Redes sociais sem orientação</li>
              <li>• Sem estrutura clara de uso</li>
              <li>• Fora dos horários permitidos</li>
              <li>• Sem protocolos de segurança</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BNCC Computação */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🖥️ BNCC Computação (2022)</h2>
        <p className="text-gray-700 mb-6">
          Currículo de Computação alinhado com educação midiática:
        </p>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">6º-9º Ano</h3>
              <p className="text-sm text-gray-600">17 habilidades distribuídas</p>
              <p className="text-xs text-gray-500 mt-2">
                Pensamento Computacional + Mundo Digital + Cultura Digital
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Ensino Médio</h3>
              <p className="text-sm text-gray-600">13 habilidades aprofundadas</p>
              <p className="text-xs text-gray-500 mt-2">
                IA, Dados, Segurança e Impacto Social
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">3 Eixos</h3>
              <p className="text-sm text-gray-600">Estruturação do currículo</p>
              <p className="text-xs text-gray-500 mt-2">
                Integrados com educação midiática
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que preciso fazer */}
      <section className="bg-yellow-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 O Que Preciso Fazer?</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">1️⃣</div>
            <div>
              <h3 className="font-semibold text-gray-900">Conhecer a legislação</h3>
              <p className="text-sm text-gray-600">Leia resumos e documentos ao final desta página</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">2️⃣</div>
            <div>
              <h3 className="font-semibold text-gray-900">Fazer formação continuada</h3>
              <p className="text-sm text-gray-600">
                Use as trilhas de aprendizagem deste portal
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">3️⃣</div>
            <div>
              <h3 className="font-semibold text-gray-900">Planejar suas aulas</h3>
              <p className="text-sm text-gray-600">Use o gerador de planejamento alinhado à BNCC</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">4️⃣</div>
            <div>
              <h3 className="font-semibold text-gray-900">Implementar com seus alunos</h3>
              <p className="text-sm text-gray-600">
                Use recursos curados e adapte para sua turma
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">5️⃣</div>
            <div>
              <h3 className="font-semibold text-gray-900">Compartilhar experiências</h3>
              <p className="text-sm text-gray-600">Participe da comunidade EducaMídia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos para Download */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📄 Documentos Importantes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="#"
            className="card p-6 hover:shadow-lg transition-shadow cursor-pointer border border-primary-200"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Resolução CNE/CEB nº2</h3>
            <p className="text-sm text-gray-600 mb-4">
              Documento oficial da Resolução que estabelece diretrizes
            </p>
            <span className="text-primary-600 text-sm font-semibold">📥 Download PDF</span>
          </a>

          <a
            href="#"
            className="card p-6 hover:shadow-lg transition-shadow cursor-pointer border border-primary-200"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Lei nº 15.100/2025</h3>
            <p className="text-sm text-gray-600 mb-4">
              Regulamentação sobre uso de celulares na educação
            </p>
            <span className="text-primary-600 text-sm font-semibold">📥 Download PDF</span>
          </a>

          <a
            href="#"
            className="card p-6 hover:shadow-lg transition-shadow cursor-pointer border border-primary-200"
          >
            <h3 className="font-semibold text-gray-900 mb-2">BNCC Computação</h3>
            <p className="text-sm text-gray-600 mb-4">
              Base Nacional Comum Curricular para Computação (2022)
            </p>
            <span className="text-primary-600 text-sm font-semibold">📥 Download PDF</span>
          </a>

          <a
            href="#"
            className="card p-6 hover:shadow-lg transition-shadow cursor-pointer border border-primary-200"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Guia MEC 2025</h3>
            <p className="text-sm text-gray-600 mb-4">
              "Educação digital e midiática: como elaborar e implementar"
            </p>
            <span className="text-primary-600 text-sm font-semibold">📥 Download PDF</span>
          </a>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Entendeu a Legislação?</h2>
        <p className="text-gray-700 mb-6">
          Agora veja como aplicar: frameworks conceituais, glossário e exemplos práticos.
        </p>
        <div className="space-y-3">
          <a href="/entender/conceitos" className="btn-primary px-8 py-3 block sm:inline-block">
            Ver Framework Conceitual →
          </a>
        </div>
      </section>
    </div>
  )
}
