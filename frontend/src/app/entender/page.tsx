export default function EntenderPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 md:p-12 mt-10">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Entender a Mídia</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A base teórica e prática para formar cidadãos críticos na era da informação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-100 rounded-lg bg-blue-50">
            <h3 className="text-xl font-bold text-gray-900 mb-3">O que é?</h3>
            <p className="text-gray-700">
              Educação midiática é o conjunto de habilidades para acessar, analisar, criar e participar de maneira crítica do ambiente informacional.
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-green-50">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Por que importa?</h3>
            <p className="text-gray-700">
              Garante que jovens possam exercer sua cidadania plena, combatendo desinformação e produzindo conteúdo responsável.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <span className="inline-block bg-primary-100 text-primary-700 px-6 py-2 rounded-full font-medium">
            Conteúdo completo em breve
          </span>
        </div>
      </div>
    </div>
  )
}
