'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw } from 'lucide-react'

export function InteractiveDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [packets, setPackets] = useState(0)
  const [avgLatency, setAvgLatency] = useState(0)
  const [throughput, setThroughput] = useState(0)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setPackets(prev => prev + Math.floor(Math.random() * 100) + 800)
      setAvgLatency(Math.random() * 15 + 25) // 25-40ns
      setThroughput(Math.random() * 2 + 13) // 13-15 Mpps
    }, 100)

    return () => clearInterval(interval)
  }, [isRunning])

  const handleReset = () => {
    setIsRunning(false)
    setPackets(0)
    setAvgLatency(0)
    setThroughput(0)
  }

  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Simulated packet capture with real-time statistics (values for demonstration purposes).
          </p>

          {/* Demo Interface */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-xl">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-400 text-sm font-mono">./basic_usage --device=0000:03:00.0</span>
            </div>

            {/* Terminal Content */}
            <div className="bg-gray-900 p-6 font-mono text-sm min-h-[300px]">
              <div className="text-green-400">$ sudo ./basic_usage --device=0000:03:00.0</div>
              <div className="text-gray-400 mt-2">Initializing Custom NIC Driver...</div>
              <div className="text-gray-400">✓ Device mapped to 0x7f8b4c000000</div>
              <div className="text-gray-400">✓ RX descriptor ring allocated (4096 entries)</div>
              <div className="text-gray-400 mb-4">✓ Driver ready, polling for packets...</div>
              
              {isRunning && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-1"
                >
                  <div className="text-blue-400">
                    Packets received: <span className="text-white font-semibold">{packets.toLocaleString()}</span>
                  </div>
                  <div className="text-blue-400">
                    Avg latency: <span className="text-white font-semibold">{avgLatency.toFixed(1)}ns</span>
                  </div>
                  <div className="text-blue-400">
                    Throughput: <span className="text-white font-semibold">{throughput.toFixed(2)} Mpps</span>
                  </div>
                  <div className="text-green-400 mt-2">● Receiving packets...</div>
                </motion.div>
              )}

              {!isRunning && packets > 0 && (
                <div className="text-yellow-400">⏸ Paused</div>
              )}

              {!isRunning && packets === 0 && (
                <div className="text-gray-500">⏹ Ready to start</div>
              )}

              <div className="mt-4 h-px bg-gray-700"></div>
              <div className="text-gray-500 text-xs mt-2">
                Press Start to begin packet capture simulation
              </div>
            </div>

            {/* Controls */}
            <div className="bg-gray-100 px-6 py-4 flex items-center gap-4">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
                  isRunning
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Start
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <div className="ml-auto text-sm text-gray-600">
                Simulated performance on Intel X710
              </div>
            </div>
          </div>

          {/* Code Sample */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Sample Code</h3>
              <span className="text-sm text-gray-400 font-mono">basic_usage.cpp</span>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`#include "ull_nic/custom_driver.hpp"

int main() {
    ull_nic::CustomNICDriver driver("0000:03:00.0");
    
    while (running) {
        auto packet = driver.poll_rx();  // 20-50ns
        if (packet) {
            process_packet(packet);
        }
    }
}`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
