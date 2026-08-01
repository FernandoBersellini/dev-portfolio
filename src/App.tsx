import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WaveBackground from '@/components/WaveBackground'

function App() {
  return (
    <>
      <WaveBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
