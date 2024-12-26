import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "3",
    words: "2,000",
    features: [
      "Up to 10,000 words",
      "Access to basic tools",
      "Access to AI copywriting tools",
      "Email support only",
      "Advance 700+ tools",
    ],
    hasTrial: false,
  },
  {
    name: "Professional",
    price: "9",
    words: "10,000",
    features: [
      "Up to 10,000 words",
      "Access to basic tools",
      "Access to AI copywriting tools",
      "Email support only",
      "Advance 700+ tools",
    ],
    hasTrial: true,
  },
  {
    name: "Enterprise",
    price: "7",
    words: "10,000",
    features: [
      "Up to 10,000 words",
      "Access to basic tools",
      "Access to AI copywriting tools",
      "Email support only",
      "Advance 700+ tools",
    ],
    hasTrial: false,
  },
  {
    name: "Professional",
    price: "9",
    words: "10,000",
    features: [
      "Up to 10,000 words",
      "Access to basic tools",
      "Access to AI copywriting tools",
      "Email support only",
      "Advance 700+ tools",
    ],
    hasTrial: true,
  },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-16">Descrição</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#6366F1] text-white p-8 rounded-lg flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-80">
                  Up to {plan.words} words / mo
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-6xl font-bold">{plan.price}</span>
                  <span className="text-xl">/mo</span>
                </div>
                <p className="text-sm opacity-80">*Get Braine tailored</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      {index === 1 || index === 3 ? (
                        <Check className="w-5 h-5 flex-shrink-0" />
                      ) : null}
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.hasTrial && (
                <Link
                  href="#"
                  className="mt-8 bg-white text-[#6366F1] text-center py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Start 1 month free trail
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 