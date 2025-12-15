'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const pipelineSteps = [
  { label: 'NIC Hardware', description: 'DMA Descriptor Ring' },
  { label: 'Memory-Mapped I/O', description: '20-50ns Access' },
  { label: 'Zero Copy', description: 'Direct Buffer Access' },
  { label: 'User Application', description: 'Packet Processing' },
]

export function ArchitecturePipeline() {
  return (
    <section id="architecture" className="py-20 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Direct Hardware Access
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Bypass the kernel completely. Memory-mapped I/O gives you direct access to NIC descriptor rings.
          </p>

          {/* Pipeline Visualization */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 flex-1"
                >
                  <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex-1">
                    <div className="text-sm font-mono text-blue-600 mb-2">
                      Step {index + 1}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {step.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {step.description}
                    </div>
                  </div>
                  
                  {index < pipelineSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-blue-600 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Kernel Path</h3>
              <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`Packet arrives → Interrupt
  ↓
Kernel driver processes
  ↓
sk_buff allocation
  ↓
Protocol stack
  ↓
Copy to userspace
  ↓
Application (8,000-20,000ns)`}
              </pre>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Direct Memory-Mapped Path</h3>
              <pre className="font-mono text-sm text-blue-900 overflow-x-auto">
{`Packet arrives → DMA
  ↓
Poll descriptor
  ↓
Direct buffer access
  ↓
Application (20-50ns)



✓ 400x faster`}
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
