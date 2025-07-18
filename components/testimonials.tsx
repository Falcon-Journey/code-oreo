"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Code Oreo transformed our vision into reality. Their Web3 expertise helped us launch our DeFi platform successfully.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateNow",
      content:
        "Outstanding AI automation solutions. They reduced our operational costs by 40% while improving efficiency.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DigitalFlow",
      content:
        "The mobile app they developed exceeded our expectations. Clean code, beautiful design, and perfect functionality.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#3636D2] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 animate-fade-in-delayed">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-[#3636D2]/20 hover:border-[#3636D2]/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm group animate-fade-in-up hover:shadow-2xl hover:shadow-[#3636D2]/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3636D2]/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic text-lg leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                <div className="relative z-10">
                  <div className="font-bold text-white text-lg group-hover:text-[#3636D2] transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-[#3636D2] text-sm font-medium">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
