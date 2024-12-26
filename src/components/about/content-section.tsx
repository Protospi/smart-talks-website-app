import Image from "next/image"

export function AboutContentSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="bg-gray-100 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="About SmartTalks"
              width={633}
              height={568}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-blue-600 mb-4">ABOUT US</h2>
            <h3 className="text-4xl font-bold mb-6">
              Guide121 agora é <span className="underline decoration-blue-600">SmartTalks!</span>
            </h3>
            <p className="text-gray-600 mb-6">Entenda a mudança.</p>
            <p className="text-gray-600 mb-6">
              Estamos construindo um futuro onde a tecnologia não apenas facilita, mas
              transforma as relações entre marcas e seus clientes. A SmartTalks.ai está pronta
              para liderar essa transformação, e queremos que você, nosso investidor, esteja ao
              nosso lado nessa jornada.
            </p>
            <p className="text-gray-600">
              Juntos, vamos encerrar a era dos chatbots e inaugurar uma nova era de conversas
              inteligentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 