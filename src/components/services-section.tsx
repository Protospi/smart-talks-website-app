'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'

const services = [
  { id: 'hotelaria', name: 'Hotelaria', active: true },
  { id: 'entretenimento', name: 'Entretenimento', active: false },
  { id: 'franquia', name: 'Franquia', active: false },
  { id: 'viagens', name: 'Viagens', active: false },
  { id: 'educacao', name: 'Educação', active: false },
  { id: 'seguros', name: 'Seguros', active: false },
  { id: 'saude', name: 'Saúde', active: false },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState('hotelaria')

  return (
    <div className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Soluções para{" "}
            <span className="text-[#6366F1] italic">todos os negócios</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === service.id
                  ? 'bg-[#6366F1] text-white'
                  : 'bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl aspect-square relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              564 X 592
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6366F1] text-white font-bold">
              01
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Jornada do hóspede ponta a ponta.
            </h3>
            <p className="text-gray-600">
              Nossos assistentes digitais já estão entre as grandes marcas do setor! 
              Desde a compra da hospedagem de volta para casa, você pode contar 
              com uma experiência personalizada.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span>Texto 1</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span>Texto 2</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="h-5 w-5 text-[#6366F1]" />
                <span>Texto 3</span>
              </div>
            </div>
            <button className="px-8 py-4 bg-[#6366F1] text-white rounded-lg hover:bg-[#6366F1]/90 transition-all duration-300">
              Saiba mais.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 