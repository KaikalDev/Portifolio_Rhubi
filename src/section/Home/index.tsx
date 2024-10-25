import HomeText from '../../container/HomeText'
import imgHome from '../../assets/Images/HomeIMG.png'
import { ContainerSection, ImageWrapper } from './styles'

const Home = () => (
  <ContainerSection>
    <HomeText />
    <ImageWrapper>
      <img src={imgHome} alt="imgHome" />
    </ImageWrapper>
  </ContainerSection>
)

export default Home
