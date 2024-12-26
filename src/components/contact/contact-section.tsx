import { Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          
          {/* Phone Contact */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#1E293B] rounded-full flex items-center justify-center mb-6">
              <Phone className="w-10 h-10 text-[#6366F1]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Telefone</h3>
            <p className="text-gray-400 text-lg">
              +55 21 9999-9999
            </p>
          </div>

          {/* Email Contact */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#1E293B] rounded-full flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-[#6366F1]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">E-mail</h3>
            <p className="text-gray-400 text-lg">
              business@smarttalks.ai
            </p>
          </div>

        </div>
      </div>
    </section>
  )
} 