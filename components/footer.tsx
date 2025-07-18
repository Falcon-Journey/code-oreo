"use client"

import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-[#3636D2]/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#3636D2] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 animate-fade-in-up">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
              Code Oreo
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              Building the future of technology with innovative solutions in Web3, AI, and beyond. Transform your ideas
              into reality with our expert team.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-[#3636D2]/20 rounded-xl hover:bg-[#3636D2]/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#3636D2]/30 hover:border-[#3636D2]/60 group"
                >
                  <social.icon className="w-6 h-6 text-[#3636D2] group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-white font-semibold mb-6 text-xl">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "App Development",
                "Digital Marketing",
                "Blockchain & Web3",
                "AI & Automation",
                "Cloud Solutions",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#3636D2] transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-white font-semibold mb-6 text-xl">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="p-2 bg-[#3636D2]/20 rounded-lg mr-4 group-hover:bg-[#3636D2]/40 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#3636D2]" />
                </div>
                hello@codeoreo.com
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="p-2 bg-[#3636D2]/20 rounded-lg mr-4 group-hover:bg-[#3636D2]/40 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#3636D2]" />
                </div>
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="p-2 bg-[#3636D2]/20 rounded-lg mr-4 group-hover:bg-[#3636D2]/40 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[#3636D2]" />
                </div>
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t border-[#3636D2]/20 mt-16 pt-8 text-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-gray-400 text-lg">
            © 2024 Code Oreo. All rights reserved. Built with <span className="text-red-400 animate-pulse">❤️</span> and
            cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  )
}
