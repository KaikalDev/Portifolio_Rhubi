import { BrowserRouter } from 'react-router-dom'
import Footer from './container/Footer'
import ScrollToAnchor from './ScrollToAnchor'
import AboutMe from './section/AboutMe'
import Contato from './section/Contact'
import Home from './section/Home'
import Projects from './section/Projects'
import { GlobalStyles } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToAnchor />
      <Home />
      <AboutMe />
      <Projects />
      <Contato />
      <Footer />
    </BrowserRouter>
  )
}

export default App
