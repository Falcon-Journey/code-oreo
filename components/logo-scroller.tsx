"use client"

export default function LogoScroller() {
  const companies = [
    "TechCorp",
    "InnovateLab",
    "FutureSync",
    "DataFlow",
    "CloudNine",
    "NextGen",
    "QuantumLeap",
    "CyberEdge",
    "BlockChain+",
    "AIVision",
    "WebForge",
    "DigitalCraft",
    "SmartSolutions",
    "TechPioneer",
    "CodeMasters",
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden relative">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#3636D2] to-transparent animate-pulse"
            style={{
              top: `${20 + i * 20}%`,
              left: "-100%",
              right: "-100%",
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 text-lg animate-fade-in-delayed">
            We've partnered with amazing companies to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 px-8 py-6 bg-gradient-to-r from-[#3636D2]/10 to-purple-600/10 rounded-xl border border-[#3636D2]/20 hover:border-[#3636D2]/60 transition-all duration-500 backdrop-blur-sm group hover:scale-110 hover:shadow-lg hover:shadow-[#3636D2]/20"
              >
                <div className="text-xl font-semibold text-gray-300 whitespace-nowrap group-hover:text-white transition-colors duration-300">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
