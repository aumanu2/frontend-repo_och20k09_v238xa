import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { NFTSection, MapSection, LoreSection, MechanicsSection } from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <NFTSection />
        <MapSection />
        <LoreSection />
        <MechanicsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
