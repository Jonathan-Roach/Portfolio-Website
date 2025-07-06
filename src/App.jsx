import Experiences from "./components/Experiences"
import Hero from "./components/Hero"
import About from "./components/about"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="">
      <Hero />
      <div className="bg-[#121212]">
      <About />
      <Experiences/>
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
