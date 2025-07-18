"use client"

import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-[#3636D2]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#3636D2] to-purple-400 bg-clip-text text-transparent mb-4">
              Code Oreo
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building the future of technology with innovative solutions in Web3, AI, and beyond. Transform your ideas
              into reality with our expert team.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#3636D2]/20 rounded-lg hover:bg-[#3636D2]/30 transition-colors">
                <Github className="w-5 h-5 text-[#3636D2]" />
              </a>
              <a href="#" className="p-2 bg-[#3636D2]/20 rounded-lg hover:bg-[#3636D2]/30 transition-colors">
                <Twitter className="w-5 h-5 text-[#3636D2]" />
              </a>
              <a href="#" className="p-2 bg-[#3636D2]/20 rounded-lg hover:bg-[#3636D2]/30 transition-colors">
                <Linkedin className="w-5 h-5 text-[#3636D2]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "App Development",
                "Digital Marketing",
                "Blockchain & Web3",
                "AI & Automation",
                "Cloud Solutions",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-[#3636D2] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-[#3636D2]" />
                hello@codeoreo.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-[#3636D2]" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-[#3636D2]" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3636D2]/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Code Oreo. All rights reserved. Built with ❤️ and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  )
}
