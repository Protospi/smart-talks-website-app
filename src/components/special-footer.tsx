"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, ArrowUp } from "lucide-react"

export function SpecialFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A0F1C] py-5">
      <div className="container flex items-center justify-between min-h-[80px]">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="SmartTalks Logo" 
            width={120} 
            height={60} 
          />
          <span className="text-gray-400">
            © 2024 <Link href="/" className="text-blue-500 hover:text-blue-400">SmartTalks.ai</Link> Todos os direitos reservados.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 