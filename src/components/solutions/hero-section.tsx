import Link from "next/link"

export function SolutionsHeroSection() {
  return (
    <section className="relative">
      <div className="w-full h-[400px] bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="container h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-6">Soluções</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600">Soluções</span>
          </div>
        </div>
      </div>
    </section>
  )
} 