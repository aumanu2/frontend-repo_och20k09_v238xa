import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs tracking-wider uppercase">Play 2 Earn • Mystic • Tribal</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-violet-200 via-fuchsia-300 to-cyan-200">
              Rhyco: The Mystic Tribal Odyssey
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              Enter a cosmic rollercoaster where tribes harness astral energy. Conquer tracks, forge totems, and earn by mastering the rhythm of the universe.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#nfts" className="px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:opacity-90 transition">Explore NFTs</a>
              <a href="#mechanics" className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">How it works</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/80">
              <h3 className="text-white text-lg font-semibold">Live Universe</h3>
              <p className="text-sm">Interactive 3D realm powered by Spline. Pan, zoom, and explore.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
