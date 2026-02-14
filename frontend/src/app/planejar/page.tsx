'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { habilidadesService, planosService } from '@/services/api'
import { useAuthStore } from '@/store/auth'

// Tipos locais para o formulário
interface FormData {
    titulo: string
    anoEscolar: number
    componentes: string[]
    duracao: number
    habilidadesIds: string[]
    objetivos: string[]
    problematizacao: string
    desenvolvimento: string
    producaoAvaliacao: string
}

const STEPS = [
    { id: 1, title: 'Contexto' },
    { id: 2, title: 'Habilidades' },
    { id: 3, title: 'Desenvolvimento' },
    { id: 4, title: 'Revisão' }
]

export default function PlanejarPage() {
    const router = useRouter()
    const { user, token } = useAuthStore()

    const [currentStep, setCurrentStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)

    // Dados do formulário
    const [formData, setFormData] = useState<FormData>({
        titulo: '',
        anoEscolar: 6,
        componentes: [],
        duracao: 50,
        habilidadesIds: [],
        objetivos: [''],
        problematizacao: '',
        desenvolvimento: '',
        producaoAvaliacao: ''
    })

    // Dados carregados
    const [habilidadesDisponiveis, setHabilidadesDisponiveis] = useState<any[]>([])

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token, router])

    // Carregar habilidades quando mudar o ano escolar
    useEffect(() => {
        const loadHabilidades = async () => {
            setLoading(true)
            try {
                const response = await habilidadesService.list({ ano: formData.anoEscolar })
                setHabilidadesDisponiveis(response.data)
            } catch (error) {
                console.error('Erro ao carregar habilidades', error)
            } finally {
                setLoading(false)
            }
        }

        if (currentStep === 2) {
            loadHabilidades()
        }
    }, [formData.anoEscolar, currentStep])

    const handleNext = () => {
        if (currentStep < STEPS.length) {
            setCurrentStep(curr => curr + 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(curr => curr - 1)
        }
    }

    const handleSubmit = async () => {
        setSaving(true)
        try {
            await planosService.create({
                ...formData,
                // Limpar strings vazias de objetivos
                objetivos: formData.objetivos.filter(o => o.trim() !== '')
            })
            alert('Plano criado com sucesso!')
            router.push('/dashboard') // Ou lista de planos
        } catch (error) {
            console.error('Erro ao salvar plano', error)
            alert('Erro ao salvar plano. Tente novamente.')
        } finally {
            setSaving(false)
        }
    }

    const toggleHabilidade = (id: string) => {
        const current = formData.habilidadesIds
        if (current.includes(id)) {
            setFormData({ ...formData, habilidadesIds: current.filter(hib => hib !== id) })
        } else {
            setFormData({ ...formData, habilidadesIds: [...current, id] })
        }
    }

    const updateObjetivo = (index: number, value: string) => {
        const newObjetivos = [...formData.objetivos]
        newObjetivos[index] = value
        setFormData({ ...formData, objetivos: newObjetivos })
    }

    const addObjetivo = () => {
        setFormData({ ...formData, objetivos: [...formData.objetivos, ''] })
    }

    if (!user) return null

    return (
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8 mt-4">

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    {STEPS.map((step) => (
                        <div
                            key={step.id}
                            className={`flex flex-col items-center ${step.id <= currentStep ? 'text-primary-600' : 'text-gray-400'}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-1 ${step.id === currentStep ? 'bg-primary-600 text-white' :
                                step.id < currentStep ? 'bg-primary-100 text-primary-600' : 'bg-gray-200 text-gray-500'
                                }`}>
                                {step.id}
                            </div>
                            <span className="text-xs">{step.title}</span>
                        </div>
                    ))}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                    />
                </div>
            </div>

            {/* Dynamic Content */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">

                {/* STEP 1: CONTEXTO */}
                {currentStep === 1 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Contexto da Aula</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Título do Plano</label>
                            <input
                                type="text"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Ex: Identificando Fake News"
                                value={formData.titulo}
                                onChange={e => setFormData({ ...formData, titulo: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ano Escolar</label>
                                <select
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    value={formData.anoEscolar}
                                    onChange={e => setFormData({ ...formData, anoEscolar: Number(e.target.value) })}
                                >
                                    <option value={6}>6º Ano</option>
                                    <option value={7}>7º Ano</option>
                                    <option value={8}>8º Ano</option>
                                    <option value={9}>9º Ano</option>
                                    <option value={10}>Ensino Médio</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Duração (minutos)</label>
                                <input
                                    type="number"
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    value={formData.duracao}
                                    onChange={e => setFormData({ ...formData, duracao: Number(e.target.value) })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Componente Curricular</label>
                            <input
                                type="text"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Ex: Língua Portuguesa, História..."
                                value={formData.componentes[0] || ''}
                                onChange={e => setFormData({ ...formData, componentes: [e.target.value] })}
                            />
                            <p className="text-xs text-gray-500 mt-1">Separe por vírgulas se for interdisciplinar (implementação futura)</p>
                        </div>
                    </div>
                )}

                {/* STEP 2: HABILIDADES */}
                {currentStep === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Selecione as Habilidades</h2>
                        <p className="text-gray-600">Mostrando habilidades para o {formData.anoEscolar}º Ano</p>

                        {loading ? (
                            <div className="text-center py-8">Carregando habilidades da BNCC...</div>
                        ) : (
                            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                {habilidadesDisponiveis.length === 0 ? (
                                    <p className="text-gray-500 italic">Nenhuma habilidade encontrada para este ano.</p>
                                ) : (
                                    habilidadesDisponiveis.map((habilidade) => (
                                        <div
                                            key={habilidade.id}
                                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${formData.habilidadesIds.includes(habilidade.id)
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:bg-gray-50'
                                                }`}
                                            onClick={() => toggleHabilidade(habilidade.id)}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-mono mb-2">
                                                        {habilidade.codigo}
                                                    </span>
                                                    <p className="text-sm font-medium text-gray-900">{habilidade.descricao}</p>
                                                </div>
                                                {formData.habilidadesIds.includes(habilidade.id) && (
                                                    <span className="text-primary-600 text-xl">✓</span>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* STEP 3: DESENVOLVIMENTO */}
                {currentStep === 3 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Roteiro da Aula</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Objetivos Específicos</label>
                            <div className="space-y-2">
                                {formData.objetivos.map((obj, idx) => (
                                    <input
                                        key={idx}
                                        type="text"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 mb-2"
                                        placeholder={`Objetivo ${idx + 1}`}
                                        value={obj}
                                        onChange={e => updateObjetivo(idx, e.target.value)}
                                    />
                                ))}
                                <button
                                    onClick={addObjetivo}
                                    className="text-sm text-primary-600 font-medium hover:text-primary-800"
                                >
                                    + Adicionar objetivo
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Problematização (Como engajar?)</label>
                            <textarea
                                rows={3}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                value={formData.problematizacao}
                                onChange={e => setFormData({ ...formData, problematizacao: e.target.value })}
                                placeholder="Descreva a pergunta disparadora ou atividade inicial..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Desenvolvimento / Atividade</label>
                            <textarea
                                rows={5}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                value={formData.desenvolvimento}
                                onChange={e => setFormData({ ...formData, desenvolvimento: e.target.value })}
                                placeholder="Passo a passo da atividade principal..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Avaliação / Produto Final</label>
                            <textarea
                                rows={3}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                value={formData.producaoAvaliacao}
                                onChange={e => setFormData({ ...formData, producaoAvaliacao: e.target.value })}
                                placeholder="Como os alunos irão demonstrar o aprendizado?"
                            />
                        </div>
                    </div>
                )}

                {/* STEP 4: REVISÃO */}
                {currentStep === 4 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Revisão do Plano</h2>

                        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Título</h3>
                                <p className="text-lg font-semibold text-gray-900">{formData.titulo}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Ano</h3>
                                    <p className="text-gray-900">{formData.anoEscolar}º Ano</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Componente</h3>
                                    <p className="text-gray-900">{formData.componentes[0]}</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Habilidades Selecionadas</h3>
                                <ul className="list-disc pl-5 mt-1 text-gray-900">
                                    {habilidadesDisponiveis
                                        .filter(h => formData.habilidadesIds.includes(h.id))
                                        .map(h => (
                                            <li key={h.id} className="text-sm">
                                                <span className="font-mono">{h.codigo}</span>: {h.descricao}
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Resumo da Atividade</h3>
                                <p className="text-sm text-gray-900 mt-1">{formData.desenvolvimento.substring(0, 150)}...</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between pt-6 border-t border-gray-100">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`px-6 py-2 rounded-lg text-sm font-medium ${currentStep === 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        Voltar
                    </button>

                    {currentStep < 4 ? (
                        <button
                            onClick={handleNext}
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            Próximo
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={saving}
                            className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            {saving ? 'Salvando...' : 'Finalizar Plano'}
                        </button>
                    )}
                </div>

            </div>
        </main>
    )
}
