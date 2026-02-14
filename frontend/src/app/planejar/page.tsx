'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'

// Estrutura do formulário simplificada para geração de prompt
interface PromptFormData {
    anoEscolar: string
    componente: string
    tema: string
    habilidadeFoco: string
    recursoDidatico: string
}

export default function PlanejarPage() {
    const router = useRouter()
    const { user, token } = useAuthStore()
    const [step, setStep] = useState(1)

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token, router])

    const [formData, setFormData] = useState<PromptFormData>({
        anoEscolar: '6º Ano',
        componente: 'Língua Portuguesa',
        tema: 'Fake News e Desinformação',
        habilidadeFoco: 'Análise de Fontes',
        recursoDidatico: 'Notícia Online'
    })

    const [generatedPrompt, setGeneratedPrompt] = useState('')

    // Listas de Opções (Mockadas para agilidade, mas expansíveis)
    const anos = ['6º Ano', '7º Ano', '8º Ano', '9º Ano', 'Ensino Médio']
    const componentes = ['Língua Portuguesa', 'História', 'Ciências', 'Geografia', 'Arte', 'Ensino Religioso', 'Matemática']
    const temas = [
        'Fake News e Desinformação',
        'Privacidade e Segurança Digital',
        'Consumo Consciente e Publicidade',
        'Saúde Mental e Redes Sociais',
        'Cidadania Digital e Cyberbullying',
        'Produção de Conteúdo Multimídia',
        'Algoritmos e Inteligência Artificial'
    ]
    const habilidades = [
        'Análise de Fontes e Credibilidade',
        'Identificação de Discurso de Ódio',
        'Verificação de Fatos (Fact-checking)',
        'Leitura Crítica de Imagens',
        'Argumentação e Debate Online',
        'Curadoria de Informação',
        'Criação de Narrativas Digitais'
    ]
    const recursos = [
        'Notícia Online',
        'Vídeo do YouTube',
        'Postagem de Rede Social',
        'Podcast',
        'Jogo Digital',
        'Meme ou Charge Digital',
        'Filme ou Documentário'
    ]

    const handleGenerate = () => {
        const prompt = `Aja como um especialista em Educação Midiática e BNCC.
Crie um plano de aula completo de 50 minutos para uma turma de ${formData.anoEscolar} na disciplina de ${formData.componente}.

O tema da aula é: "${formData.tema}".
O objetivo principal é desenvolver a habilidade de: "${formData.habilidadeFoco}".
O recurso didático base será: "${formData.recursoDidatico}".

Estruture a resposta no seguinte formato:
1. Título Criativo da Aula
2. Objetivos de Aprendizagem (Alinhados à BNCC)
3. Materiais Necessários
4. Roteiro Passo a Passo:
   - Aquecimento/Problematização (10 min)
   - Desenvolvimento/Atividade Prática com o Recurso (25 min)
   - Sistematização/Discussão Final (15 min)
5. Sugestão de Avaliação (Formativa)
6. Dica de Adaptação para alunos com dificuldades.

Mantenha uma linguagem clara, engajadora e focada no desenvolvimento do pensamento crítico.`

        setGeneratedPrompt(prompt)
        setStep(2)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPrompt)
        alert('Prompt copiado! Cole no ChatGPT, Gemini ou sua IA preferida.')
    }

    if (!user) return null

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8 mt-6">

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Gerador de Aulas com IA</h1>
                    <p className="text-gray-600 mt-2">
                        Preencha os campos abaixo para criar um prompt pedagógico perfeito para sua IA favorita.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Progress Steps */}
                    <div className="flex border-b border-gray-100">
                        <button
                            className={`flex-1 py-4 text-sm font-medium text-center ${step === 1 ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50' : 'text-gray-500'}`}
                            onClick={() => setStep(1)}
                        >
                            1. Configurar Aula
                        </button>
                        <button
                            className={`flex-1 py-4 text-sm font-medium text-center ${step === 2 ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50' : 'text-gray-500'}`}
                            disabled={!generatedPrompt}
                            onClick={() => setStep(2)}
                        >
                            2. Copiar Prompt
                        </button>
                    </div>

                    <div className="p-6 sm:p-8">
                        {step === 1 ? (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Ano Escolar */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Ano Escolar</label>
                                        <select
                                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                            value={formData.anoEscolar}
                                            onChange={(e) => setFormData({ ...formData, anoEscolar: e.target.value })}
                                        >
                                            {anos.map(a => <option key={a} value={a}>{a}</option>)}
                                        </select>
                                    </div>

                                    {/* Componente */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Componente Curricular</label>
                                        <select
                                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                            value={formData.componente}
                                            onChange={(e) => setFormData({ ...formData, componente: e.target.value })}
                                        >
                                            {componentes.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>

                                    {/* Tema */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Tema da Educação Midiática</label>
                                        <select
                                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                            value={formData.tema}
                                            onChange={(e) => setFormData({ ...formData, tema: e.target.value })}
                                        >
                                            {temas.map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>

                                    {/* Habilidade */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Habilidade Foco</label>
                                        <select
                                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                            value={formData.habilidadeFoco}
                                            onChange={(e) => setFormData({ ...formData, habilidadeFoco: e.target.value })}
                                        >
                                            {habilidades.map(h => <option key={h} value={h}>{h}</option>)}
                                        </select>
                                    </div>

                                    {/* Recurso */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Recurso Didático Principal</label>
                                        <select
                                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                            value={formData.recursoDidatico}
                                            onChange={(e) => setFormData({ ...formData, recursoDidatico: e.target.value })}
                                        >
                                            {recursos.map(r => <option key={r} value={r}>{r}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={handleGenerate}
                                        className="w-full bg-primary-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors shadow-md flex items-center justify-center gap-2"
                                    >
                                        <span>✨ Gerar Prompt Mágico</span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6 animate-fade-in">
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative group">
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Seu Prompt Gerado:</h3>
                                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 bg-white p-4 rounded border border-gray-200 shadow-inner h-64 overflow-y-auto">
                                        {generatedPrompt}
                                    </pre>
                                    <button
                                        onClick={copyToClipboard}
                                        className="absolute top-12 right-6 bg-white border border-gray-200 p-2 rounded hover:bg-gray-100 shadow-sm transition-all"
                                        title="Copiar texto"
                                    >
                                        📋
                                    </button>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={copyToClipboard}
                                        className="flex-1 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-md text-center"
                                    >
                                        Copiar Prompt
                                    </button>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex-1 bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-center"
                                    >
                                        Criar Novo
                                    </button>
                                </div>

                                <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <h4 className="font-semibold text-blue-800 mb-2">🚀 Dica Pro:</h4>
                                    <p className="text-sm text-blue-700">
                                        Cole este prompt no <strong>ChatGPT</strong>, <strong>Gemini</strong> ou <strong>Claude</strong>.
                                        Se quiser refinar, peça para a IA: <em>"Adapte para uma aula de 100 minutos"</em> ou <em>"Inclua uma atividade makerspace"</em>.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
