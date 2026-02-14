'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authService } from '@/services/api'
import { useAuthStore } from '@/store/auth'

export default function LoginPage() {
    const router = useRouter()
    const { setUser, setToken } = useAuthStore()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const response = await authService.login(formData.email, formData.password)
            const { user, token } = response.data

            setUser(user)
            setToken(token)
            router.push('/planejar')
        } catch (err: any) {
            console.error(err)
            setError(err.response?.data?.error || 'Erro ao realizar login')
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
                    Entre na sua conta
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Ou{' '}
                    <Link href="/cadastro" className="font-medium text-primary-600 hover:text-primary-500">
                        faça seu cadastro gratuito
                    </Link>
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
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? 'Carregando...' : 'Entrar'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
