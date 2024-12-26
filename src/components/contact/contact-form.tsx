import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function ContactForm() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side - Text and Social Links */}
          <div className="text-white">
            <h4 className="text-sm uppercase text-purple-400 mb-4">CONTATO</h4>
            <h2 className="text-5xl font-light mb-6 text-[#6366F1]">formulário</h2>
            <p className="text-gray-400 text-lg mb-12">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <Link 
                href="#" 
                className="w-12 h-12 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link 
                href="#" 
                className="w-12 h-12 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </Link>
              <Link 
                href="#" 
                className="w-12 h-12 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </Link>
              <Link 
                href="#" 
                className="w-12 h-12 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-[#1E293B] p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 bg-[#0F172A] rounded-lg text-white placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-[#0F172A] rounded-lg text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full px-4 py-3 bg-[#0F172A] rounded-lg text-white placeholder:text-gray-400"
                />
                <select 
                  className="w-full px-4 py-3 bg-[#0F172A] rounded-lg text-gray-400"
                >
                  <option value="">Selecione o assunto</option>
                  <option value="support">Suporte</option>
                  <option value="sales">Vendas</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <textarea
                placeholder="Digite sua mensagem aqui*"
                rows={6}
                className="w-full px-4 py-3 bg-[#0F172A] rounded-lg text-white placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="px-8 py-3 bg-[#6366F1] text-white rounded-lg hover:bg-[#6366F1]/90 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 