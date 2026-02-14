export default function RecursosPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-10">
                <div className="text-6xl mb-6">🎬</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Midiateca de Recursos</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Estamos curando uma seleção especial de vídeos, planos de aula prontos, ferramentais digitais e artigos acadêmicos para enriquecer suas aulas.
                </p>
                <div className="p-4 bg-yellow-50 text-yellow-800 rounded-md mb-6">
                    🚧 Em construção: Nossa equipe pedagógica está finalizando a indexação dos materiais da BNCC.
                </div>
                <button className="bg-gray-200 text-gray-500 px-6 py-2 rounded-lg cursor-not-allowed">
                    Aguarde o lançamento
                </button>
            </div>
        </div>
    )
}
