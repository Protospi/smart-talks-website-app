import Link from "next/link"
import Image from "next/image"
import { Globe } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="SmartTalks Logo" 
              width={180} 
              height={40}
              priority
            />
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-8 text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Início</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sobre</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Produtos</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Soluções</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cases</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Planos</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contato</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Globe className="h-4 w-4" />
              <span className="ml-2">PT-BR</span>
            </button>
            <button className="px-6 py-2.5 text-[#6366F1] border border-[#6366F1] rounded-lg hover:bg-[#6366F1] hover:text-white transition-all duration-300">
              Entrar
            </button>
            <button className="px-6 py-2.5 text-white bg-black rounded-lg hover:bg-black/90 transition-all duration-300">
              Agendar demonstração
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

