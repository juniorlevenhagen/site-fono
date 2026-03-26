import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutLifespan from "./components/AboutLifespan"
import Services from "./components/Services"
import AboutFounder from "./components/AboutFounder"
import Testimonials from "./components/Testimonials"
import Resources from "./components/Resources"
import Footer from "./components/Footer"
import Reveal from "./components/Reveal"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden">
        {/* HERO - Início */}
        <div id="inicio">
          <Hero />
        </div>

        {/* SOBRE - Combinando Lifespan e Founder no mesmo ID para o menu */}
        <div id="sobre" className="scroll-mt-20">
          <Reveal>
            <AboutLifespan />
          </Reveal>
          <Reveal>
            <AboutFounder />
          </Reveal>
        </div>

        {/* SERVIÇOS */}
        <div id="servicos" className="scroll-mt-20">
          <Reveal>
            <Services />
          </Reveal>
        </div>

        {/* TESTEMUNHOS (Opcional, se quiser link no menu) */}
        <Reveal>
          <Testimonials />
        </Reveal>

        {/* RECURSOS */}
        <div id="recursos" className="scroll-mt-20">
          <Reveal>
            <Resources />
          </Reveal>
        </div>

        {/* CONTATO (Geralmente aponta para o Footer) */}
        <div id="contato" className="scroll-mt-20">
          <Reveal>
            <Footer />
          </Reveal>

        </div>
      </main>
      <div><WhatsAppButton /></div>
    </>
  )
}

export default App