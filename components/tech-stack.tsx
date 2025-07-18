"use client"

export default function TechStack() {
  const technologies = {
    Frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    Blockchain: ["Solidity", "Web3.js", "Ethereum", "Polygon", "IPFS"],
    "AI/ML": ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    Cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Vercel"],
  }

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <div
              key={category}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-[#3636D2]/20 hover:border-[#3636D2]/40 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-[#3636D2]/20 to-purple-600/20 rounded-full text-gray-300 text-sm border border-[#3636D2]/30 hover:border-[#3636D2]/60 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
