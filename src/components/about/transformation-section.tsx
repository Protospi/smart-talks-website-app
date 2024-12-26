import Image from "next/image"

export function TransformationSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/cla.png"
              alt="CEO SmartTalks"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
          
          <div>
            <h2 className="text-sm font-semibold text-purple-500 mb-4">TRANSFORMAÇÃO</h2>
            <h3 className="text-4xl font-bold mb-6">
              Boas-vindas à era das conversas <span className="text-blue-600">inteligentes!</span>
            </h3>
            
            <div className="space-y-6 text-gray-600">
              <p>
                Após 8 anos de atuação com foco nos setores de turismo, entretenimento e 
                hospitalidade, buscamos um ponto de inflexão que reflete as transformações 
                atuais do mercado e alavanca nosso crescimento.
              </p>
              
              <p>
                Vivemos em um momento de rápida evolução, impulsionado pela Inteligência 
                Artificial Generativa, que está revolucionando como nos comunicamos e 
                interagimos. Segundo o dado do Mapa Brasileiro de Chatbots, o mercado está 
                em um ponto de saturação, afinal são mais de 670 mil chatbots criados e 
                muitos deles ainda não entregam a experiência desejada. Diante desse 
                cenário, decidimos que era hora de evoluir e reposicionar nossa marca.
              </p>
              
              <p>
                Temos o prazer de anunciar que o Guide121 se tornou o SmartTalks.ai! Nossa 
                nova identidade representa não apenas um novo nome, mas também um 
                compromisso renovado com a excelência em comunicações e resoluções 
                inteligentes. Estamos focados em continuar trazendo inovação e transformar a 
                interação das marcas com seus clientes criando diálogos claros e resolutivos.
              </p>
              
              <div className="pt-6">
                <p className="font-semibold">Clarissa Santiago</p>
                <p className="text-gray-400">CEO SmartTalks.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 