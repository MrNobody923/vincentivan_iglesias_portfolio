import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import CommandPalette from './components/CommandPalette'
import Toast from './components/Toast'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading')
    } else {
      document.body.classList.remove('loading')
    }
  }, [loading])

  // Global Keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCommandPaletteOpen(prev => !prev)
      } else if (e.key === 'Escape') {
        setCommandPaletteOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Museum-Grade Paper Grain Overlay */}
      <div className="bg-noise" />

      <Preloader onComplete={() => setLoading(false)} />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <Hero 
        visible={!loading} 
        onOpenCommandPalette={() => setCommandPaletteOpen(true)} 
      />
      <About onShowToast={setToastMessage} />
      <Skills />
      <Timeline />
      <Projects />
      <Contact onShowToast={setToastMessage} />
      <Footer />
      <CursorGlow />

      {/* Command Palette & Terminal Modal */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />

      {/* Floating System Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </>
  )
}
