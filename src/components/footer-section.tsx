import Image from "next/image"

export function FooterSection() {
  return (
    <section className="w-full bg-[#1B1E32] py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium uppercase text-[#9747FF]">
                CONTATO
              </h3>
              <h2 className="mt-4 text-4xl font-bold text-white">
                Fique a vontade para solicitar mais{" "}
                <span className="text-[#6366F1]">detalhes</span> aqui
              </h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna.
            </p>
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-[#6366F1] p-3">
                <svg 
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-white">+55 21 9999-9999</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-xl bg-[#2A2D45] p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nome"
                  className="rounded-lg bg-[#1B1E32] px-4 py-3 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-lg bg-[#1B1E32] px-4 py-3 text-white placeholder-gray-400"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="rounded-lg bg-[#1B1E32] px-4 py-3 text-white placeholder-gray-400"
                />
                <select className="rounded-lg bg-[#1B1E32] px-4 py-3 text-gray-400">
                  <option>Selecione um assunto</option>
                  <option>Opção 1</option>
                  <option>Opção 2</option>
                </select>
              </div>
              <textarea
                placeholder="Escreva sua mensagem aqui*"
                rows={6}
                className="w-full rounded-lg bg-[#1B1E32] px-4 py-3 text-white placeholder-gray-400"
              />
              <button className="rounded-lg bg-[#6366F1] px-8 py-3 text-white hover:bg-[#6366F1]/90 transition-colors">
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="h-50 w-100">
                <Image 
                src="/logo.svg" 
                alt="SmartTalks Logo" 
                width={180} 
                height={40}
                priority
                />
            </div>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 SmartTalks.ai Todos os direitos reservados.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 