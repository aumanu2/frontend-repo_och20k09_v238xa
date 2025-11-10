import { useState } from 'react'
import { Menu, X, Rocket, Wallet } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'NFTs', href: '#nfts' },
    { label: 'Map', href: '#map' },
    { label: 'Lore', href: '#lore' },
    { label: 'Mechanics', href: '#mechanics' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
            <Rocket size={20} />
          </div>
          <span className="text-white font-semibold tracking-wider text-lg">RHYCO</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-sm">
            <Wallet size={16} /> Connect
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">
              {item.label}
            </a>
          ))}
          <button className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-sm">
            <Wallet size={16} /> Connect
          </button>
        </div>
      )}
    </header>
  )
}
