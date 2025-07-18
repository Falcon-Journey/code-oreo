export default function TechStackSection() {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", logo: "/placeholder.svg?height=50&width=50&text=React" },
        { name: "Next.js", logo: "/placeholder.svg?height=50&width=50&text=Next" },
        { name: "Vue.js", logo: "/placeholder.svg?height=50&width=50&text=Vue" },
        { name: "TypeScript", logo: "/placeholder.svg?height=50&width=50&text=TS" },
        { name: "Tailwind", logo: "/placeholder.svg?height=50&width=50&text=TW" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", logo: "/placeholder.svg?height=50&width=50&text=Node" },
        { name: "Python", logo: "/placeholder.svg?height=50&width=50&text=Python" },
        { name: "Express", logo: "/placeholder.svg?height=50&width=50&text=Express" },
        { name: "Django", logo: "/placeholder.svg?height=50&width=50&text=Django" },
        { name: "FastAPI", logo: "/placeholder.svg?height=50&width=50&text=FastAPI" },
      ],
    },
    {
      category: "Mobile",
      technologies: [
        { name: "React Native", logo: "/placeholder.svg?height=50&width=50&text=RN" },
        { name: "Flutter", logo: "/placeholder.svg?height=50&width=50&text=Flutter" },
        { name: "Swift", logo: "/placeholder.svg?height=50&width=50&text=Swift" },
        { name: "Kotlin", logo: "/placeholder.svg?height=50&width=50&text=Kotlin" },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "PostgreSQL", logo: "/placeholder.svg?height=50&width=50&text=PG" },
        { name: "MongoDB", logo: "/placeholder.svg?height=50&width=50&text=Mongo" },
        { name: "Redis", logo: "/placeholder.svg?height=50&width=50&text=Redis" },
        { name: "Supabase", logo: "/placeholder.svg?height=50&width=50&text=Supabase" },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", logo: "/placeholder.svg?height=50&width=50&text=AWS" },
        { name: "Vercel", logo: "/placeholder.svg?height=50&width=50&text=Vercel" },
        { name: "Docker", logo: "/placeholder.svg?height=50&width=50&text=Docker" },
        { name: "GitHub", logo: "/placeholder.svg?height=50&width=50&text=GitHub" },
      ],
    },
    {
      category: "AI & Blockchain",
      technologies: [
        { name: "OpenAI", logo: "/placeholder.svg?height=50&width=50&text=OpenAI" },
        { name: "TensorFlow", logo: "/placeholder.svg?height=50&width=50&text=TF" },
        { name: "Ethereum", logo: "/placeholder.svg?height=50&width=50&text=ETH" },
        { name: "Solidity", logo: "/placeholder.svg?height=50&width=50&text=Sol" },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use cutting-edge technologies and proven frameworks to build robust, scalable solutions that stand the
            test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                  >
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
