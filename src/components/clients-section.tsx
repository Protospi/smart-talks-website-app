'use client'

import Image from 'next/image'

// Generate array of numbers from 1 to 18
const clientImages = Array.from({ length: 18 }, (_, i) => String(i + 1).padStart(2, '0'))

export function ClientsSection() {
  return (
    <div className="py-16 bg-gradient-to-r from-[#0A0B1A] to-[#1E2142]">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Clientes
          </span>
          <h2 className="text-3xl font-bold text-white">
            Quem gera conversas mais inteligentes.
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clientImages.map((number) => (
              <div
                key={number}
                className="flex-none mx-8 w-[200px] flex items-center justify-center"
              >
                <Image
                  src={`/clients/${number}.png`}
                  alt={`Client logo ${number}`}
                  width={160}
                  height={60}
                  className="brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate set of logos for seamless scrolling */}
            {clientImages.map((number) => (
              <div
                key={`${number}-duplicate`}
                className="flex-none mx-8 w-[200px] flex items-center justify-center"
              >
                <Image
                  src={`/clients/${number}.png`}
                  alt={`Client logo ${number}`}
                  width={160}
                  height={60}
                  className="brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 