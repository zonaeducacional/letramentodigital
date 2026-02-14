export default function FormacaoPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-10">
                <div className="text-6xl mb-6">🎓</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Formação Contínua</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Trilhas de aprendizagem certificadas para professores, coordenadores e gestores.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold text-gray-800">Trilha Básica</h3>
                        <p className="text-sm text-gray-600">Introdução ao Letramento Digital</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold text-gray-800">Trilha Avançada</h3>
                        <p className="text-sm text-gray-600">Combate à Desinformação na Escola</p>
                    </div>
                </div>
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Inscrições em breve
                </span>
            </div>
        </div>
    )
}
