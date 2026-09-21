export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div>
            <a href="#hero" className="font-heading text-2xl font-bold text-white -tracking-tight block mb-3">
              <span className="text-gray-500 font-normal">&lt;</span>VII<span className="text-gray-500 font-normal"> /&gt;</span>
            </a>
            <p className="text-sm text-gray-500 max-w-[320px] font-sans">
              Software Developer & Cybersecurity Enthusiast. Building high-integrity digital experiences.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a 
              href="https://github.com/MrNobody923" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 flex items-center justify-center border border-white/15 rounded-xl text-gray-400 hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 transition-all" 
              aria-label="GitHub"
              title="GitHub: MrNobody923"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://web.facebook.com/0xviiglesias" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 flex items-center justify-center border border-white/15 rounded-xl text-gray-400 hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 transition-all" 
              aria-label="Facebook"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:iglesias.vincentivan.m@gmail.com" 
              className="w-11 h-11 flex items-center justify-center border border-white/15 rounded-xl text-gray-400 hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 transition-all" 
              aria-label="Email"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>

            {/* CV & Resume Links */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-xl border border-white/15 text-xs font-mono font-semibold text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all flex items-center gap-1"
              title="Curriculum Vitae (2-Page PDF)"
            >
              <span>CV</span>
              <span>↗</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-xl border border-white/15 text-xs font-mono font-semibold text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all flex items-center gap-1"
              title="1-Page Resume PDF"
            >
              <span>Resume</span>
              <span>↓</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/[0.08] gap-4">
          <p className="text-xs text-gray-500 font-mono">&copy; 2025 Vincent Ivan Iglesias · Built with React & Tailwind</p>
          <button onClick={scrollToTop} className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-full text-gray-500 hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 transition-all" aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
