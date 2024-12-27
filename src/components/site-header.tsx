"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import 'flag-icons/css/flag-icons.min.css'

type Language = {
  code: string;
  flag: string;
  name: string;
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: 'br',
    flag: 'fi-br',
    name: 'Português'
  })

  const languages: Language[] = [
    { code: 'br', flag: 'fi-br', name: 'Português' },
    { code: 'us', flag: 'fi-us', name: 'English' },
    { code: 'es', flag: 'fi-es', name: 'Español' }
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }

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
            <div className="relative" ref={dropdownRef}>
              <button 
                className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span className={`fi ${selectedLanguage.flag}`} style={{ fontSize: '1.3em' }}></span>
                <svg 
                  className="w-4 h-4 ml-2"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-[#6366F1] ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {languages.map((language) => (
                      <button 
                        key={language.code}
                        className="w-full px-3 py-2 text-left text-sm text-white hover:bg-[#5254cc] flex items-center first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => handleLanguageSelect(language)}
                      >
                        <span className={`fi ${language.flag}`} style={{ fontSize: '1.3em' }}></span>
                        <span className="ml-3">{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="template-btn btn-style-two bg-black">
              <span className="btn-wrap">
                <span className="text-one text-white">Entrar</span>
                <span className="text-two text-white">Entrar</span>
              </span>
            </a>
            <a href="#" className="template-btn btn-style-two bg-black">
              <span className="btn-wrap">
                <span className="text-one text-white">Agendar demonstração</span>
                <span className="text-two text-white">Agendar demonstração</span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

