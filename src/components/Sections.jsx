import { motion } from 'framer-motion'
import { Map, ScrollText, Gem, Sparkles, Coins } from 'lucide-react'

export function NFTSection() {
  const items = [
    { title: 'Totem Guardians', desc: 'Animated 3D totems with unique buffs and rituals.', color: 'from-fuchsia-500 to-violet-600' },
    { title: 'Rhythm Riders', desc: 'Elite racers synced to the cosmic track waveform.', color: 'from-cyan-400 to-indigo-600' },
    { title: 'Astral Relics', desc: 'One-of-one items forged from nebula shards.', color: 'from-amber-400 to-rose-500' },
  ]

  return (
    <section id="nfts" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(139,92,246,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">
          NFT Collection
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">Collect, trade, and empower your tribe with on-chain assets designed for gameplay and status.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={`h-40 rounded-xl bg-gradient-to-br ${it.color} opacity-90 group-hover:opacity-100 transition`} />
              <h3 className="mt-4 text-white text-lg font-semibold">{it.title}</h3>
              <p className="text-white/70 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MapSection() {
  return (
    <section id="map" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <Map className="text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">World Map</h2>
        </div>
        <p className="mt-3 text-white/70 max-w-2xl">Travel across biomes: Crystal Dunes, Jungle of Echoes, and the Void Rails. Each region changes track physics and rewards.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {['Crystal Dunes', 'Jungle of Echoes', 'Void Rails'].map((r, i) => (
            <motion.div key={r} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-36 rounded-xl bg-gradient-to-br from-sky-400/30 to-purple-500/30" />
              <h3 className="mt-4 text-white font-medium">{r}</h3>
              <p className="text-white/70 text-sm">Dynamic modifiers, hidden shrines, and seasonal events.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LoreSection() {
  return (
    <section id="lore" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <ScrollText className="text-pink-300" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Lore</h2>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-8 text-white/80">
          <p>
            When the Comet Rhy split the sky, tribes awakened to the Choir of Orbits — a rhythm threading every star. Those who learned to ride it became the Rhyco.
          </p>
          <p>
            Totems pulse with ancient algorithms. Songs are maps. Tracks are living rivers of light. Champions weave fate by drifting on cosmic rails.
          </p>
          <p>
            Markets formed around relics and resonances. Guilds rose, guardians stirred, and the race for astral sovereignty began.
          </p>
        </div>
      </div>
    </section>
  )
}

export function MechanicsSection() {
  const rows = [
    { icon: <Sparkles className="text-fuchsia-300" />, title: 'Skill Sync', desc: 'Drift, chain boosts, and time inputs to the track waveform for score multipliers.' },
    { icon: <Gem className="text-cyan-300" />, title: 'Totem Crafting', desc: 'Fuse relics to craft totems that alter physics, AI, and loot tables.' },
    { icon: <Coins className="text-amber-300" />, title: 'Play 2 Earn', desc: 'Ranked races yield token rewards. Seasonal ladders with NFT-bound trophies.' },
  ]

  return (
    <section id="mechanics" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(217,70,239,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Core Mechanics</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {rows.map((r) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-36 rounded-xl bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center">
                {r.icon}
              </div>
              <h3 className="mt-4 text-white font-semibold">{r.title}</h3>
              <p className="text-white/70 text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
