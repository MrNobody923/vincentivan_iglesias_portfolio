import React from 'react'
import { useTextScramble } from '../hooks'

interface Props {
  visible: boolean
  onOpenCommandPalette?: () => void
}

export default function Hero({ visible, onOpenCommandPalette }: Props) {
  const anim = visible ? 'anim-visible' : ''
  const { displayText, scramble, isScrambling } = useTextScramble('Vincent Ivan', visible)

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-[110px] pb-16 lg:py-24">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Background Orbitals */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 pointer-events-none hidden xl:block opacity-40">
        <div className="absolute w-[450px] h-[450px] -top-[225px] -right-[100px] border border-black/[0.05] rounded-full animate-float" />
        <div className="absolute w-[320px] h-[320px] -top-[120px] right-0 border border-black/[0.05] rounded-full animate-float-reverse" />
      </div>

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-[2] w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 xl:gap-14">
          
          {/* Left Column: Name & Details */}
          <div className="flex-1 max-w-[640px]">
            {/* HUD Top Metadata Strip */}
            <div className={`anim-fade-up ${anim} flex flex-wrap items-center gap-2.5 mb-6 text-[11px] font-mono`}>
              <div className="inline-flex items-center gap-2 text-dark-gray bg-off-white border border-black/[0.06] px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-dot" />
                <span className="font-semibold text-black">AVAILABLE FOR WORK</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 text-gray-400 bg-white/70 border border-black/[0.06] px-3 py-1.5 rounded-full">
                <span>LOC:</span>
                <span className="text-charcoal font-medium">MANILA // 14.59° N, 120.98° E</span>
              </div>
              <div className="hidden md:inline-flex items-center gap-1.5 text-gray-400 bg-white/70 border border-black/[0.06] px-3 py-1.5 rounded-full">
                <span>SYS:</span>
                <span className="text-charcoal font-medium">FULL-STACK · MOBILE · IOT · CYBERSECURITY</span>
              </div>
            </div>

            {/* Hero Title with Cyber Decrypt & Liquid Fill Animations */}
            <h1 
              className={`anim-fade-up ${anim} font-heading text-[clamp(3rem,6.5vw,5.5rem)] font-bold leading-[1.02] -tracking-[3px] text-black mb-5 select-none`}
              style={{ transitionDelay: '0.1s' }}
            >
              {/* Line 1: Cyber Decrypt Scramble */}
              <span 
                onMouseEnter={scramble}
                onClick={scramble}
                className="block cursor-pointer transition-colors duration-200 hover:text-neutral-800"
                title="Hover or tap to decrypt"
              >
                <span>{displayText}</span>
                {isScrambling && (
                  <span className="hidden sm:inline-block ml-3 text-[11px] font-mono font-normal text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-300 align-middle tracking-wider animate-pulse">
                    DECRYPTING...
                  </span>
                )}
              </span>

              {/* Line 2: Interactive Liquid Laser Fill */}
              <span 
                className="block text-outline-interactive"
                data-text="Iglesias"
                title="Hover to fill"
              >
                Iglesias
              </span>
            </h1>

            {/* Role with Monospace HUD Tag */}
            <div className={`anim-fade-up ${anim} flex items-center gap-3 mb-6`} style={{ transitionDelay: '0.2s' }}>
              <p className="font-heading text-[clamp(1.1rem,2vw,1.35rem)] font-semibold text-black tracking-[4px] uppercase">
                Software Developer
              </p>
              <span className="text-[10px] font-mono text-gray-500 border border-black/10 px-2 py-0.5 rounded bg-black/[0.02]">
                CORE_ENGINEER
              </span>
            </div>

            {/* Description */}
            <p 
              className={`anim-fade-up ${anim} text-base sm:text-lg text-dark-gray leading-[1.8] mb-9 font-sans`}
              style={{ transitionDelay: '0.3s' }}
            >
              Architecting high-performance digital products — from scalable web platforms
              and reactive mobile apps to microcontroller IoT systems with automated payments.
            </p>

            {/* Action Buttons & Terminal Shortcut */}
            <div className={`anim-fade-up ${anim} flex gap-3 flex-wrap items-center`} style={{ transitionDelay: '0.4s' }}>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 font-body text-sm font-semibold px-6 py-3.5 rounded-full bg-black text-white border-2 border-black hover:bg-charcoal hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <span>View Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </a>

              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold px-5 py-3.5 rounded-full bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all shadow-sm"
                title="View 2-Page Curriculum Vitae (CV) PDF"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                <span>View CV (2-Page)</span>
              </a>

              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold px-4 py-3.5 rounded-full bg-off-white text-charcoal border-2 border-black/15 hover:border-black hover:text-black hover:-translate-y-0.5 transition-all"
                title="View or download 1-Page Resume PDF"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Resume (1-Page)</span>
              </a>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 font-body text-sm font-semibold px-5 py-3.5 rounded-full bg-transparent text-black border-2 border-black/15 hover:border-black hover:-translate-y-0.5 transition-all"
              >
                Contact
              </a>

              {onOpenCommandPalette && (
                <button
                  onClick={onOpenCommandPalette}
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full bg-off-white border border-black/10 hover:border-black text-xs font-mono text-charcoal hover:bg-black hover:text-white transition-all shadow-sm group"
                  title="Press Ctrl+K or ⌘K"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Terminal</span>
                  <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-black/5 group-hover:bg-white/20">⌘K</kbd>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Prominent Portrait Frame (Right Beside the Name) */}
          <div 
            className={`anim-fade-up ${anim} shrink-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] mx-auto lg:mx-0`}
            style={{ transitionDelay: '0.25s' }}
          >
            <div className="relative group">
              {/* Outer Decorative Glow Backdrop */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-black/20 via-black/5 to-transparent blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
              
              {/* Main Photo Card */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-light-gray border border-black/15 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Vincent Ivan Iglesias — Software Developer"
                  className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />

                {/* Subtle Gradient Fog at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                {/* Corner Technical HUD Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/70 pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/70 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/70 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/70 pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[11px] pointer-events-none">
                  <span className="flex items-center gap-1.5 font-semibold text-xs tracking-tight">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    VINCENT IVAN IGLESIAS
                  </span>
                  <span className="text-white/60 text-[9px] uppercase tracking-wider">PORTRAIT // 2026</span>
                </div>
              </div>

              {/* Offset Geometric Wireframe Accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-black/10 rounded-2xl -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex">
        <div className="w-px h-[50px] bg-gradient-to-b from-black to-transparent animate-scroll-bounce" />
        <span className="text-[0.65rem] font-mono font-semibold tracking-[3px] uppercase text-gray-400">Scroll</span>
      </div>
    </section>
  )
}
