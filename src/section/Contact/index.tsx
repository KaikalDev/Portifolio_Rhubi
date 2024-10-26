import ContactInfo from '../../container/contactInfos'
import { SectionContainer } from './styles'
import imgContact from '../../assets/Images/imgContact.png'

const Contato = () => (
  <SectionContainer id="Contact">
    <ContactInfo />
    <img src={imgContact} alt="" />
  </SectionContainer>
)

export default Contato
