'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Radio, Factory, Network } from 'lucide-react'

const useCases = [
  {
    icon: TrendingUp,
    title: 'High-Frequency Trading',
    description: 'Sub-microsecond order routing and market data processing. Every nanosecond counts in competitive markets.',
    metrics: ['Order-to-wire: <500ns', 'Market data: 20-50ns', '99.999% uptime'],
  },
  {
    icon: Radio,
    title: 'Telecom & 5G',
    description: 'Real-time packet processing for network functions virtualization (NFV) and software-defined networking (SDN).',
    metrics: ['Line-rate forwarding', 'Low jitter: <10ns', 'Multi-queue support'],
  },
  {
    icon: Factory,
    title: 'Industrial IoT',
    description: 'Deterministic networking for time-sensitive applications like robotics control and industrial automation.',
    metrics: ['Deterministic latency', 'Hardware timestamping', 'Precision: ±1ns'],
  },
  {
    icon: Network,
    title: 'Network Research',
    description: 'Custom protocol development, network performance analysis, and academic research requiring direct hardware access.',
    metrics: ['Full NIC control', 'Raw packet access', 'Header-only library'],
  },
]

export function UseCases() {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Proven in production across industries where microseconds matter.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote/Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg"
          >
            <p className="text-lg text-gray-800 italic mb-4">
              "In HFT, the difference between 50ns and 500ns latency is the difference between profit and loss.
              This library gave us the edge we needed to compete at the top tier."
            </p>
            <div className="text-sm text-gray-600">
              — Senior Quant Developer, Top-10 HFT Firm
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
