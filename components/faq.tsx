"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What services does Code Oreo provide?",
      answer:
        "We offer comprehensive digital solutions including web development, mobile app development, digital marketing, blockchain & Web3 development, AI & automation, and cloud solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer 24/7 support and maintenance packages to ensure your applications run smoothly. Our support includes bug fixes, updates, security patches, and performance optimization.",
    },
    {
      question: "Can you work with existing systems and integrate new solutions?",
      answer:
        "We specialize in system integration and can seamlessly connect new solutions with your existing infrastructure while ensuring data integrity and security.",
    },
    {
      question: "What makes Code Oreo different from other development companies?",
      answer:
        "Our unique combination of cutting-edge technology expertise, creative design approach, and commitment to innovation sets us apart. We focus on delivering solutions that not only meet current needs but are future-ready.",
    },
    {
      question: "Do you offer custom blockchain and Web3 solutions?",
      answer:
        "Yes, we have extensive experience in blockchain development, including smart contracts, DeFi platforms, NFT marketplaces, and decentralized applications (dApps) across various blockchain networks.",
    },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border border-[#3636D2]/20 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 animate-fade-in-delayed">
            Get answers to common questions about our services and process
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/70 to-black/70 rounded-2xl border border-[#3636D2]/20 hover:border-[#3636D2]/60 transition-all duration-500 backdrop-blur-sm group animate-fade-in-up hover:shadow-xl hover:shadow-[#3636D2]/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-8 py-8 text-left flex justify-between items-center focus:outline-none group-hover:bg-[#3636D2]/5 transition-colors duration-300 rounded-2xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4 group-hover:text-[#3636D2] transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 p-2 bg-[#3636D2]/20 rounded-full group-hover:bg-[#3636D2]/40 transition-colors duration-300">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#3636D2] transform rotate-180 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#3636D2] transition-transform duration-300" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8 animate-fade-in">
                  <p className="text-gray-400 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
