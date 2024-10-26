import { ProjectContainer } from './styles'

const Project = ({
  Description,
  Image,
  Link,
  Site,
  Title,
  isSecond
}: Projeto) => (
  <ProjectContainer className={isSecond ? 'Second' : ''}>
    <img src={Image} alt="Imagem do projeto" />
    <div>
      <h3>{Title}</h3>
      <p>{Description}</p>
      {Site && (
        <p>
          <span>Visite o site: </span>
          <a target="_blank" href={Site} rel="noreferrer">
            {Title}
          </a>
        </p>
      )}
      <a target="_blank" className="Button" href={Link} rel="noreferrer">
        Visitar modelo
      </a>
    </div>
  </ProjectContainer>
)

export default Project
