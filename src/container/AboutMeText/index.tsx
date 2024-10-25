import Figma from '../../assets/Images/icons8-logo-figma-60.png'
import Canva from '../../assets/Images/icons8-aplicativo-canva-100.png'
import HTML from '../../assets/Images/icons8-html-5-100.png'
import CSS from '../../assets/Images/icons8-css3-100.png'
import Java from '../../assets/Images/icons8-logo-java-coffee-cup-100.png'
import Python from '../../assets/Images/icons8-python-100.png'
import { TextContainer } from './styles'

const AboutMeText = () => (
  <TextContainer>
    <h2>Hi, I&apos;m Rhubi</h2>
    <p>
      Sou Rhubi, tenho 19 anos, sou estudante de Análise e Desenvolvimento de
      Sistemas (ADS) com habilidades de liderança e interesse em tecnologia da
      informação. Estou aprimorando conhecimentos em programação e UI/UX, e sou
      fluente em inglês. Busco oportunidades para aplicar minhas habilidades em
      projetos desafiadores focados em tecnologia e inovação.
    </p>
    <p>Tenho conhecimento em:</p>
    <div>
      <i>
        <img src={Figma} alt="Fimga" title="Figma" />
      </i>
      <i>
        <img src={Canva} alt="Canva" title="Canva" />
      </i>
      <i>
        <img src={HTML} alt="HTML" title="HTML" />
      </i>
      <i>
        <img src={CSS} alt="CSS" title="CSS" />
      </i>
      <i>
        <img src={Python} alt="Python" title="Python" />
      </i>
      <i>
        <img src={Java} alt="Java" title="Java" />
      </i>
    </div>
  </TextContainer>
)

export default AboutMeText
