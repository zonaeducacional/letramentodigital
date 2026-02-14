import Link from 'next/link'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">LD</span>
                    </div>
                    <span className="font-bold text-lg hidden sm:inline">Letramento Digital</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/entender"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                        Entender
                    </Link>
                    <Link
                        href="/planejar"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                        Planejar
                    </Link>
                    <Link
                        href="/recursos"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                        Recursos
                    </Link>
                    <Link
                        href="/formacao"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                        Formação
                    </Link>
                    <Link
                        href="/comunidade"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                        Comunidade
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/login" className="px-4 py-2 text-sm font-medium text-primary-600 bg-white border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                        Login
                    </Link>
                    <Link href="/cadastro" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-sm">
                        Cadastro
                    </Link>
                </div>
            </nav>
        </header>
    )
}
