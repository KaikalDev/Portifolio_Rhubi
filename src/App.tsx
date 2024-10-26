import Footer from './container/Footer'
import AboutMe from './section/AboutMe'
import Contato from './section/Contact'
import Home from './section/Home'
import Projects from './section/Projects'
import { GlobalStyles } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <AboutMe />
      <Projects />
      <Contato />
      <Footer />
    </>
  )
}

export default App
