export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Rhyco — Mystic Tribal Universe</p>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#lore" className="hover:text-white">Lore</a>
          <a href="#map" className="hover:text-white">Map</a>
          <a href="#nfts" className="hover:text-white">NFTs</a>
        </div>
      </div>
    </footer>
  )
}
