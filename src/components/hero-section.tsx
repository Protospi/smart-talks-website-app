'use client'

import { PlayCircle, Check } from 'lucide-react'
import Image from "next/image"

export function HeroSection() {
  const scrollToNumbers = () => {
    const element = document.getElementById('big-numbers')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 md:py-24">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                Conversas inteligentes que geram resultados e{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">vendem</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#6366F1] opacity-30 z-0"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-[600px]">
                A mais completa plataforma IA First que concentra o melhor do marketing conversacional em múltiplos canais.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 text-white bg-[#6366F1] rounded-lg hover:bg-[#6366F1]/90 transition-all duration-300">
                Experimente agora mesmo!
              </button>
              <button 
                onClick={scrollToNumbers}
                className="inline-flex items-center px-8 py-4 text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver demo
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span className="text-gray-300">Automação e humanização de mãos dadas.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span className="text-gray-300">Estrutura de dados customizada.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span className="text-gray-300">Agentes conversacionais com skills avançadas</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="relative h-[600px] w-[600px]">
                <div className="absolute inset-0 rounded-full bg-[#6366F1]/20"></div>
                <Image
                  src="/image-1.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  priority
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <button className="h-16 w-16 rounded-full bg-[#6366F1] flex items-center justify-center hover:bg-[#6366F1]/90 transition-all duration-300">
                    <PlayCircle className="h-8 w-8 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 