"use client"

import { Code, Smartphone, Globe, Blocks, Bot, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Canvas } from "@react-three/fiber"
import { Float, Box, Sphere, Torus } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function ServiceIcon3D({ type, position }: { type: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  const shapes = {
    box: (
      <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position}>
        <meshStandardMaterial color="#3636D2" transparent opacity={0.8} />
      </Box>
    ),
    sphere: (
      <Sphere ref={meshRef} args={[0.5]} position={position}>
        <meshStandardMaterial color="#8B5CF6" wireframe />
      </Sphere>
    ),
    torus: (
      <Torus ref={meshRef} args={[0.5, 0.2, 16, 100]} position={position}>
        <meshStandardMaterial color="#3636D2" transparent opacity={0.7} />
      </Torus>
    ),
  }

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {shapes[type as keyof typeof shapes] || shapes.box}
    </Float>
  )
}

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: ["React/Next.js", "Full-Stack Solutions", "E-commerce Platforms"],
      shape: "box",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native Development"],
      shape: "sphere",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns"],
      shape: "torus",
    },
    {
      icon: Blocks,
      title: "Blockchain & Web3",
      description: "Decentralized applications and smart contract development",
      features: ["DeFi Solutions", "NFT Platforms", "Smart Contracts"],
      shape: "box",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent automation solutions powered by artificial intelligence",
      features: ["Machine Learning", "Process Automation", "Chatbots"],
      shape: "sphere",
    },
    {
      icon: Globe,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS/Azure", "DevOps", "Microservices"],
      shape: "torus",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#3636D2" />

          {services.map((service, index) => (
            <ServiceIcon3D
              key={index}
              type={service.shape}
              position={[((index % 3) - 1) * 4, Math.floor(index / 3) * 3 - 1.5, -5]}
            />
          ))}
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            What We{" "}
            <span className="bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Provide
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-delayed">
            Comprehensive digital solutions tailored to transform your business and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 border-[#3636D2]/20 hover:border-[#3636D2]/60 transition-all duration-500 group hover:scale-105 backdrop-blur-sm animate-fade-in-up hover:shadow-2xl hover:shadow-[#3636D2]/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3636D2]/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="mb-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#3636D2] to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3636D2] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                </div>
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-[#3636D2] to-purple-400 rounded-full mr-4 animate-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
