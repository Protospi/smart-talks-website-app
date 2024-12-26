import { Target, Lightbulb, Users } from 'lucide-react'

export function CoreValuesSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-500 mb-4">VALOR FUNDAMENTAL</h2>
          <h3 className="text-4xl font-bold mb-4">
            Revelando nossos <span className="text-blue-500">valores fundamentais</span>
          </h3>
          <p className="text-2xl text-gray-400">para um impacto duradouro.</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-zinc-900 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Missão</h4>
            <p className="text-gray-400">
              Conectar marcas e pessoas em um ambiente de comunicação inteligente e funcional.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-blue-600 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Visão</h4>
            <p className="text-gray-100">
              Tornar-se o principal fornecedor mundial de soluções de conversação inteligentes.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-zinc-900 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Valores</h4>
            <p className="text-gray-400">
              Tornar-se o principal fornecedor mundial de soluções de conversação inteligentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 