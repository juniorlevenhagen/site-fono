import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutLifespan from "./components/AboutLifespan"
import Services from "./components/Services"



function App() {


  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <main>
      <AboutLifespan/>
      </main>
      <Services />
    </>
  )
}

export default App
