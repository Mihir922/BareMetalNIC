'use client'

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ultra-Low-Latency NIC Drivers</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Zero-abstraction network drivers achieving 20-50ns packet latency.
              Built by Krishna Bajpai. Open source, production-ready, MIT licensed.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/krish567366/BareMetalNIC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/krishnabajpai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:krishna@krishnabajpai.me"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/krish567366/BareMetalNIC/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Documentation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/krish567366/BareMetalNIC/tree/main/examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Examples
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/krish567366/BareMetalNIC/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Report Issues
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://krishnabajpai.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Krishna Bajpai
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#architecture" className="text-gray-400 hover:text-white transition-colors">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#quickstart" className="text-gray-400 hover:text-white transition-colors">
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/krish567366/BareMetalNIC/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  MIT License
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            © {currentYear} Krishna Bajpai. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/krish567366/BareMetalNIC/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              License
            </a>
            <a
              href="https://github.com/krish567366/BareMetalNIC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://krishnabajpai.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              krishnabajpai.me
            </a>
          </div>
        </div>

        {/* Performance Badge */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            ⚡ 20-50ns Latency · 10x Faster than DPDK · Open Source
          </div>
        </div>
      </div>
    </footer>
  )
}
