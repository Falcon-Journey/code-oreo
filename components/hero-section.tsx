"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Globe } from "lucide-react"

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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(54, 54, 210, 0.15), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div className="w-2 h-2 bg-[#3636D2] rounded-full opacity-60" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 bg-[#3636D2]/20 rounded-full animate-bounce" style={{ animationDelay: "0s" }}>
              <Code className="w-6 h-6 text-[#3636D2]" />
            </div>
            <div className="p-3 bg-[#3636D2]/20 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}>
              <Zap className="w-6 h-6 text-[#3636D2]" />
            </div>
            <div className="p-3 bg-[#3636D2]/20 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}>
              <Globe className="w-6 h-6 text-[#3636D2]" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Building the
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#3636D2] via-purple-400 to-[#3636D2] bg-clip-text text-transparent animate-pulse">
              Future of Tech
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From Web3 innovations to AI automation, we craft digital experiences that push boundaries and drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#3636D2] to-purple-600 hover:from-[#2525B8] hover:to-purple-700 text-white px-8 py-4 text-lg group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#3636D2] text-[#3636D2] hover:bg-[#3636D2] hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#3636D2] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#3636D2] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
