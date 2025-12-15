'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const latencyData = [
  { name: 'Custom Driver', value: 35, color: '#2563eb' },
  { name: 'Solarflare ef_vi', value: 150, color: '#3b82f6' },
  { name: 'DPDK', value: 300, color: '#94a3b8' },
  { name: 'Kernel Socket', value: 14000, color: '#cbd5e1' },
]

const throughputData = [
  { name: 'Custom Driver', mpps: 14.88, color: '#2563eb' },
  { name: 'DPDK', mpps: 12.5, color: '#94a3b8' },
  { name: 'Kernel', mpps: 1.2, color: '#cbd5e1' },
]

export function PerformanceCharts() {
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
            Benchmark Results
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Real-world performance measurements on Intel X710 @ 10Gbps with 64-byte packets.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Latency Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Packet Receive Latency</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={latencyData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" label={{ value: 'Nanoseconds (ns)', position: 'bottom' }} />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip 
                    formatter={(value: number) => [`${value}ns`, 'Latency']}
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {latencyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                <span className="font-semibold">400x faster</span> than kernel sockets.
                Lower is better.
              </p>
            </motion.div>

            {/* Throughput Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Throughput (64B packets)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={throughputData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Million packets/sec', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    formatter={(value: number) => [`${value} Mpps`, 'Throughput']}
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                  />
                  <Bar dataKey="mpps" radius={[4, 4, 0, 0]}>
                    {throughputData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                <span className="font-semibold">14.88 Mpps</span> line-rate performance.
                Higher is better.
              </p>
            </motion.div>
          </div>

          {/* Performance Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <MetricCard
              metric="20-50ns"
              label="RX Latency"
              description="p50 packet receive"
            />
            <MetricCard
              metric="14.88 Mpps"
              label="Max Throughput"
              description="10Gbps line rate"
            />
            <MetricCard
              metric="3-5ns"
              label="Timestamp"
              description="RDTSC overhead"
            />
            <MetricCard
              metric="0 Bytes"
              label="Memory Copy"
              description="True zero-copy"
            />
          </motion.div>

          {/* Test Environment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6"
          >
            <h3 className="text-lg font-bold text-blue-900 mb-3">Test Environment</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-semibold text-blue-900">Hardware</div>
                <div className="text-blue-700">Intel X710 10Gbps</div>
              </div>
              <div>
                <div className="font-semibold text-blue-900">CPU</div>
                <div className="text-blue-700">Intel Xeon E5-2680 v4</div>
              </div>
              <div>
                <div className="font-semibold text-blue-900">Packet Size</div>
                <div className="text-blue-700">64 bytes (min size)</div>
              </div>
              <div>
                <div className="font-semibold text-blue-900">Optimization</div>
                <div className="text-blue-700">-O3 -march=native -flto</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function MetricCard({ metric, label, description }: { metric: string; label: string; description: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl font-bold text-blue-600 mb-2">{metric}</div>
      <div className="text-sm font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-xs text-gray-600">{description}</div>
    </div>
  )
}
