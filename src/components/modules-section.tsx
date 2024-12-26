'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'

export function ModulesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] rounded-full text-sm font-medium mb-4">
            Como Tudo Funciona?
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Conheça nossos{" "}
            <span className="text-[#6366F1] italic">Módulos e Funcionalidades</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              genAI e Agentes conversacionais
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span>Texto descrição curta 1</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span>Texto descrição curta 2</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span>Texto descrição curta 3</span>
              </div>
            </div>
            <button className="px-8 py-4 bg-[#6366F1] text-white rounded-lg hover:bg-[#6366F1]/90 transition-all duration-300">
              Saiba mais.
            </button>
          </div>

          <div className="bg-gray-100 rounded-2xl aspect-[698/561] relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              698 X 561
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 