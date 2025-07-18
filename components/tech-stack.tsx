"use client"

import { Canvas } from "@react-three/fiber"
import { Text3D, Float, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function TechSphere({ position, text, color }: { position: [number, number, number]; text: string; color: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={color} transparent opacity={0.3} wireframe />
        </mesh>
        <Text3D font="/fonts/Geist_Bold.json" size={0.2} height={0.05} position={[-0.5, -0.1, 0]}>
          {text}
          <meshStandardMaterial color={color} />
        </Text3D>
      </group>
    </Float>
  )
}

export default function TechStack() {
  const technologies = {
    Frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    Blockchain: ["Solidity", "Web3.js", "Ethereum", "Polygon", "IPFS"],
    "AI/ML": ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    Cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Vercel"],
  }

  const techArray = Object.entries(technologies).flatMap(([category, techs]) =>
    techs.map((tech) => ({ category, tech })),
  )

  return (
    <section id="tech-stack" className="py-20 bg-black relative overflow-hidden">
      {/* 3D Tech Spheres Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#3636D2" />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8B5CF6" />

          {techArray.slice(0, 12).map((item, index) => (
            <TechSphere
              key={index}
              position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10]}
              text={item.tech}
              color={index % 2 === 0 ? "#3636D2" : "#8B5CF6"}
            />
          ))}

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Our{" "}
            <span className="bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-delayed">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <div
              key={category}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 border border-[#3636D2]/20 hover:border-[#3636D2]/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm group animate-fade-in-up hover:shadow-2xl hover:shadow-[#3636D2]/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center group-hover:text-[#3636D2] transition-colors duration-300">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-gradient-to-r from-[#3636D2]/20 to-purple-600/20 rounded-full text-gray-300 text-sm border border-[#3636D2]/30 hover:border-[#3636D2]/80 hover:bg-[#3636D2]/30 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm"
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
