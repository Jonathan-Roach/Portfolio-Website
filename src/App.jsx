import Experiences from "./components/Experiences"
import Education from "./components/Education"
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="">
      <Hero />
      <div className="bg-[#121212]">
      <About />
      <Experiences/>
      <Education/>
      <Projects />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
