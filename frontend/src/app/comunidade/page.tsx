export default function ComunidadePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-10">
                <div className="text-6xl mb-6">👥</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Comunidade de Prática</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Um espaço seguro para trocar experiências, planos de aula e discutir os desafios da implementação da educação midiática.
                </p>

                <div className="flex justify-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                </div>
                <p className="mt-4 text-sm text-gray-500">Junte-se a outros educadores em breve.</p>
            </div>
        </div>
    )
}
