import Link from "next/link"

const SOLUTIONS = [
  { id: "hotelaria", label: "Hotelaria", active: true },
  { id: "entretenimento", label: "Entretenimento", active: false },
  { id: "franquia", label: "Franquia", active: false },
  { id: "viagens", label: "Viagens", active: false },
  { id: "educacao", label: "Educação", active: false },
  { id: "seguros", label: "Seguros", active: false },
  { id: "saude", label: "Saúde", active: false },
]

export function SolutionsContent() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-wider mb-4">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="text-4xl font-bold">
            Soluções para{" "}
            <span className="relative">
              todos os negócios
              <span className="absolute bottom-1 left-0 w-full h-1 bg-primary/20"></span>
            </span>
          </h2>
        </div>

        {/* Solutions Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {SOLUTIONS.map((solution) => (
            <button
              key={solution.id}
              className={`px-6 py-2 rounded-full text-sm transition-colors
                ${solution.active 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {solution.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
            <span className="text-gray-400">564 X 592</span>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
              01
            </div>
            
            <p className="text-gray-700 text-lg">
              Nossos assistentes digitais já estão entre as grandes marcas do setor! 
              Desde a compra da hospedagem de volta para casa, você pode contar 
              com uma experiência personalizada.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Texto 1
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Texto 2
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Texto 3
              </li>
            </ul>

            <Link 
              href="#"
              className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Saiba mais.
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 