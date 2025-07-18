"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-[#3636D2]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent">
              Code Oreo
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Home", "Services", "Tech Stack", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-[#3636D2] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#3636D2] to-purple-600 hover:from-[#2525B8] hover:to-purple-700 text-white border-0">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Services", "Tech Stack", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 hover:text-[#3636D2] block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-[#3636D2] to-purple-600 hover:from-[#2525B8] hover:to-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
