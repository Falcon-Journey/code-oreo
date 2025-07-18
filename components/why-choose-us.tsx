"use client"

import { Shield, Zap, Users, Award, Clock, Lightbulb } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Float, Dodecahedron, Octahedron, Icosahedron } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function GeometricShape({ position, type }: { position: [number, number, number]; type: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6
    }
  })

  const shapes = {
    dodecahedron: (
      <Dodecahedron ref={meshRef} args={[1]} position={position}>
        <meshStandardMaterial color="#3636D2" transparent opacity={0.6} wireframe />
      </Dodecahedron>
    ),
    octahedron: (
      <Octahedron ref={meshRef} args={[1]} position={position}>
        <meshStandardMaterial color="#8B5CF6" transparent opacity={0.6} wireframe />
      </Octahedron>
    ),
    icosahedron: (
      <Icosahedron ref={meshRef} args={[1]} position={position}>
        <meshStandardMaterial color="#3636D2" transparent opacity={0.6} />
      </Icosahedron>
    ),
  }

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      {shapes[type as keyof typeof shapes] || shapes.dodecahedron}
    </Float>
  )
}

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions",
      shape: "dodecahedron",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development cycles without compromising on quality",
      shape: "octahedron",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee",
      shape: "icosahedron",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with years of industry experience",
      shape: "dodecahedron",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to keep your business running",
      shape: "octahedron",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients",
      shape: "icosahedron",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* 3D Geometric Shapes Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.6} color="#3636D2" />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8B5CF6" />

          {reasons.map((reason, index) => (
            <GeometricShape
              key={index}
              position={[((index % 3) - 1) * 6, Math.floor(index / 3) * 4 - 2, -8]}
              type={reason.shape}
            />
          ))}
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Code Oreo
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-delayed">
            We combine technical expertise with creative vision to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-900/70 to-black/70 rounded-2xl border border-[#3636D2]/20 hover:border-[#3636D2]/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm animate-fade-in-up hover:shadow-2xl hover:shadow-[#3636D2]/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#3636D2] to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3636D2] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
