"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import 'flag-icons/css/flag-icons.min.css'

export function SiteHeader() {
  const pathname = usePathname()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "text-purple-600 font-bold" : "text-gray-600 hover:text-gray-900"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="SmartTalks Logo" 
              width={220} 
              height={80}
              priority
            />
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-8 text-base font-bold">
            <Link href="/" className={`transition-colors ${isActive('/')}`}>Início</Link>
            <Link href="/sobre" className={`transition-colors ${isActive('/sobre')}`}>Sobre</Link>
            <Link href="/produtos" className={`transition-colors ${isActive('/produtos')}`}>Produtos</Link>
            <Link href="/solucoes" className={`transition-colors ${isActive('/solucoes')}`}>Soluções</Link>
            <Link href="/cases" className={`transition-colors ${isActive('/cases')}`}>Cases</Link>
            <Link href="/planos" className={`transition-colors ${isActive('/planos')}`}>Planos</Link>
            <Link href="/contato" className={`transition-colors ${isActive('/contato')}`}>Contato</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span className="fi fi-br mr-2 rounded-sm" style={{ fontSize: '1.3em' }}></span>
                <span className="ml-2">Português</span>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-[#6366F1] ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <button className="w-full px-3 py-2 text-left text-sm text-white hover:bg-[#5254cc] flex items-center">
                      <span className="fi fi-br" style={{ fontSize: '1.3em' }}></span>
                      <span className="ml-1">Português</span>
                    </button>
                    <button className="w-full px-3 py-2 text-left text-sm text-white hover:bg-[#5254cc] flex items-center">
                      <span className="fi fi-us" style={{ fontSize: '1.3em' }}></span>
                      <span className="ml-1">English</span>
                    </button>
                    <button className="w-full px-3 py-2 text-left text-sm text-white hover:bg-[#5254cc] flex items-center">
                      <span className="fi fi-es" style={{ fontSize: '1.3em' }}></span>
                      <span className="ml-1">Español</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
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

