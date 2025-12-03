function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-teal-400 via-emerald-500 to-green-600 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 text-center tracking-tight">
            Doc Lab Practice
          </h1>

          <p className="text-xl text-gray-700 text-center font-medium">
            Playground frontend para simular flujos de análisis de documentos.
          </p>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              Este proyecto es un entorno personal de práctica para UI de SaaS de documentos.
              No está afiliado a ninguna empresa real.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
