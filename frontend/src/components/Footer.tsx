import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">LD</span>
                            </div>
                            <span className="font-bold">Letramento Digital</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Plataforma para educação midiática na educação básica brasileira.
                        </p>
                    </div>

                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold mb-4">Referências</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>Letramento Digital</li>
                                <li>Resolução CNE/CEB nº2 (2025)</li>
                                <li>Lei nº 15.100/2025</li>
                                <li>BNCC Computação (2022)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">© 2026 Letramento Digital. Todos os direitos reservados.</p>
                    <div className="flex gap-4 text-sm text-gray-400 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacidade
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Termos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
