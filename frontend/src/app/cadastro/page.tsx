'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authService } from '@/services/api'
import { useAuthStore } from '@/store/auth'

export default function CadastroPage() {
    const router = useRouter()
    const { setUser, setToken } = useAuthStore()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'TEACHER'
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem')
            return
        }

        setLoading(true)

        try {
            const response = await authService.register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role
            })

            const { user, token } = response.data

            setUser(user)
            setToken(token)
            router.push('/planejar')
        } catch (err: any) {
            console.error(err)
            setError(err.response?.data?.error || 'Erro ao realizar cadastro')
            // Se for array de erros do Zod
            if (Array.isArray(err.response?.data?.error)) {
                setError(err.response.data.error.map((e: any) => e.message).join(', '))
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">EM</span>
                        </div>
                        <span className="font-bold text-2xl text-gray-900">EducaMídia</span>
                    </Link>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Crie sua conta gratuita
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Gere planos de aula alinhados à BNCC em minutos
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nome completo
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    minLength={6}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirmar Senha
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    minLength={6}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="role-teacher"
                                name="role"
                                type="radio"
                                checked={formData.role === 'TEACHER'}
                                onChange={() => setFormData({ ...formData, role: 'TEACHER' })}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                            />
                            <label htmlFor="role-teacher" className="ml-2 block text-sm text-gray-900">
                                Sou Professor
                            </label>

                            <input
                                id="role-coordinator"
                                name="role"
                                type="radio"
                                checked={formData.role === 'COORDINATOR'}
                                onChange={() => setFormData({ ...formData, role: 'COORDINATOR' })}
                                className="ml-6 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                            />
                            <label htmlFor="role-coordinator" className="ml-2 block text-sm text-gray-900">
                                Sou Coordenador
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? 'Criar Conta' : 'Cadastrar'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Já tem uma conta?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3">
                            <Link
                                href="/login"
                                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Fazer Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
