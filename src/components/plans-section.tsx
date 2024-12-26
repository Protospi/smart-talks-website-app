const plans = [
  {
    title: "Professional",
    price: "9",
    period: "/mo",
    wordLimit: "Up to 10,000 words / mo",
    note: "*Get Braine tailored",
    features: [
      "Up to 10,000 words",
      "Access to basic tools",
      "Access to AI copywriting tools",
      "Email support only",
      "Advance 700+ tools",
    ],
  },
]

export function PlansSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#6366F1]/10 px-3 py-1 text-sm text-[#6366F1]">
              Planos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl">
              Confira os <span className="text-[#6366F1]">planos</span> disponíveis
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-lg gap-8 pt-12 md:grid-cols-4">
          {Array(4).fill(plans[0]).map((plan, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-[#6366F1] p-6 text-white"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-sm text-white/80">{plan.wordLimit}</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$</span>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="ml-1 text-xl">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-white/80">{plan.note}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="mt-8 w-full rounded-lg bg-white py-3 text-[#6366F1] font-medium hover:bg-white/90 transition-colors"
              >
                Start 1 month free trail
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 