"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Globe } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[2, 100, 200]} scale={1.5}>
        <MeshDistortMaterial
          color="#3636D2"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  )
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const particlesCount = 1000

  const positions = new Float32Array(particlesCount * 3)
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={particlesCount} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#3636D2" size={0.02} transparent opacity={0.6} />
    </points>
  )
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3636D2" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />

          <AnimatedSphere />
          <Particles />

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 z-10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(54, 54, 210, 0.3), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden z-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div
              className="w-4 h-4 bg-gradient-to-r from-[#3636D2] to-purple-400 opacity-60 transform rotate-45"
              style={{
                clipPath: Math.random() > 0.5 ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex justify-center space-x-4 mb-8">
            <div
              className="p-4 bg-[#3636D2]/20 rounded-2xl animate-bounce-slow backdrop-blur-sm border border-[#3636D2]/30"
              style={{ animationDelay: "0s" }}
            >
              <Code className="w-8 h-8 text-[#3636D2]" />
            </div>
            <div
              className="p-4 bg-[#3636D2]/20 rounded-2xl animate-bounce-slow backdrop-blur-sm border border-[#3636D2]/30"
              style={{ animationDelay: "0.2s" }}
            >
              <Zap className="w-8 h-8 text-[#3636D2]" />
            </div>
            <div
              className="p-4 bg-[#3636D2]/20 rounded-2xl animate-bounce-slow backdrop-blur-sm border border-[#3636D2]/30"
              style={{ animationDelay: "0.4s" }}
            >
              <Globe className="w-8 h-8 text-[#3636D2]" />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-text-shimmer">
              Building the
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#3636D2] via-purple-400 to-[#3636D2] bg-clip-text text-transparent animate-gradient-x">
              Future of Tech
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
            From Web3 innovations to AI automation, we craft digital experiences that push boundaries and drive results.
            <br />
            <span className="text-[#3636D2] font-semibold">Transform your vision into reality.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#3636D2] to-purple-600 hover:from-[#2525B8] hover:to-purple-700 text-white px-10 py-6 text-xl group transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#3636D2]/50"
            >
              Start Your Project
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#3636D2] text-[#3636D2] hover:bg-[#3636D2] hover:text-white px-10 py-6 text-xl bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center animate-count-up">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-gray-400 mt-2">Projects Delivered</div>
            </div>
            <div className="text-center animate-count-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-gray-400 mt-2">Happy Clients</div>
            </div>
            <div className="text-center animate-count-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-sm text-gray-400 mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-30">
        <div className="w-8 h-12 border-2 border-[#3636D2] rounded-full flex justify-center backdrop-blur-sm bg-black/20">
          <div className="w-2 h-4 bg-gradient-to-b from-[#3636D2] to-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
