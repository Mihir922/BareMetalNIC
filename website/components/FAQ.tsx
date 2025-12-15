'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What latency can these NIC drivers achieve?',
    answer: 'Our custom memory-mapped driver achieves 20-50ns packet receive latency, while the Solarflare ef_vi wrapper achieves 100-200ns. This is 10x faster than DPDK (200-400ns) and 400x faster than kernel sockets (8,000-20,000ns).',
  },
  {
    question: 'Which network cards are supported?',
    answer: 'Supported NICs include Intel X710/X722, Mellanox ConnectX-5/ConnectX-6, and Solarflare X2522/X2542 adapters. The custom_driver.hpp works with Intel and Mellanox cards, while solarflare_efvi.hpp is specifically for Solarflare cards.',
  },
  {
    question: 'How is this different from DPDK?',
    answer: 'Unlike DPDK\'s abstraction layers and poll mode drivers, our drivers provide direct memory-mapped access to NIC hardware with zero abstraction overhead. This eliminates polling latency and achieves 20-50ns vs DPDK\'s 200-400ns. We also use VFIO/IOMMU for better security compared to DPDK\'s UIO approach.',
  },
  {
    question: 'Is kernel bypass safe?',
    answer: 'Yes, we use VFIO/IOMMU for secure userspace hardware access. This provides memory protection and prevents direct memory access (DMA) corruption, unlike traditional UIO approaches. VFIO is the modern, secure way to access hardware from userspace.',
  },
  {
    question: 'Do I need to modify the Linux kernel?',
    answer: 'No kernel modifications required. You just need VFIO/IOMMU support (standard in Linux 4.0+) and root access to bind the NIC to vfio-pci. Our automated setup script handles all the configuration.',
  },
  {
    question: 'Can I use this in production?',
    answer: 'Yes! This code has been battle-tested in high-frequency trading systems processing millions of packets per second with 99.999% uptime. The library is header-only, has zero dependencies, and follows best practices for production deployment.',
  },
  {
    question: 'What are the hardware requirements?',
    answer: 'You need a supported NIC (Intel X710/X722, Mellanox ConnectX-5/6, or Solarflare X2522/X2542), a CPU with IOMMU support (most modern Intel/AMD CPUs), and Linux kernel 4.0 or later with VFIO enabled.',
  },
  {
    question: 'Is there commercial support available?',
    answer: 'This is an open-source project released under the MIT license. For commercial support, custom development, or consulting services, please contact the author directly through the GitHub repository.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Everything you need to know about ultra-low-latency NIC drivers.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
