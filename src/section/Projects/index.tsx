import Project from '../../container/Project'
import ImgProject1 from '../../assets/Images/computadorlucas-removebg-preview.png'
import ImgProject2 from '../../assets/Images/computadorpastel-removebg-preview.png'
import ImgProject3 from '../../assets/Images/computadorisaac-removebg-preview.png'
import ImgProject4 from '../../assets/Images/computadortelefone-removebg-preview.png'
import ImgProject5 from '../../assets/Images/computadorkaikal-removebg-preview.png'
import { SectionContainer } from './styles'
import { useState } from 'react'
import { Colors } from '../../styles'

const projects: Projeto[] = [
  {
    Title: 'Portifolio Lucas Cariolano',
    Description:
      'O projeto de portfólio do Lucas Cariolano apresenta um design limpo e direto, com foco em uma estrutura de fácil navegação. O uso de cores neutras e tipografia simples contribui para uma estética profissional e moderna, enquanto os ícones e links para contato são estrategicamente posicionados.',
    Image: ImgProject1,
    Link: 'https://www.canva.com/design/DAGSeOkiPsM/4MiGVa7bZ17Piope6OLAqg/edit?utm_content=DAGSeOkiPsM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    Site: 'https://projeto-portifolio-seven-bay.vercel.app/'
  },
  {
    Title: "Liane's pastel",
    Description:
      "O site Liane's Pastel apresenta uma estética refinada e organizada, utilizando um esquema de cores que combinam azul-escuro, dourado e branco, transmitindo elegância e modernidade. A presença de ícones personalizados e uma fonte estilizada reforça a identidade visual da marca, criando uma experiência visual coesa e atraente para o usuário.",
    Image: ImgProject2,
    Link: 'https://www.canva.com/design/DAGPe4Whvoo/4XLq78f7pNrVfiYPCAtVOA/edit?utm_content=DAGPe4Whvoo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
    Title: 'Portifolio Isaac lima',
    Description:
      'Este portfólio foi cuidadosamente planejado para refletir a identidade e as necessidades do cliente. Cada detalhe – desde a navegação intuitiva até a escolha das cores e fontes – visa transmitir profissionalismo e autenticidade, garantindo que o conteúdo seja o foco. A estrutura do layout permite que as habilidades e os projetos do cliente sejam exibidos de forma destacada e organizada, facilitando a compreensão do que ele tem a oferecer.',
    Image: ImgProject3,
    Link: 'https://www.canva.com/design/DAGUgGXS9wc/bNY5DkIb5YDI3IHM03_03Q/edit?utm_content=DAGUgGXS9wc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
    Title: 'Catálogo Telefonico',
    Description:
      'Projeto básico feito no intuito de melhorar minhas habilidades com o Figma',
    Image: ImgProject4,
    Link: ''
  },
  {
    Title: 'Portifolio Kaique Luan',
    Description:
      'Desenvolvido pensando nas necessidades do profissional, mantendo sua identidade visual simples e confiável, com um site intuitivo. kaique',
    Image: ImgProject5,
    Link: 'https://www.canva.com/design/DAGPqearx3s/PC0039AAUMfUjvf57GlgHw/edit?utm_content=DAGPqearx3s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    Site: 'https://projeto-portifolio-seven-bay.vercel.app/'
  }
]

const Projects = () => {
  const [projetoActive, setProjetoActive] = useState([projects[0], projects[1]])

  const passa = () => {
    const total = projects.length - 1
    let ultimaPosicao = projects.indexOf(projetoActive[1])
    let primeiraPosicao = ultimaPosicao - 1
    if (ultimaPosicao + 2 > total) {
      if (ultimaPosicao + 1 > total) {
        ultimaPosicao = 1
        primeiraPosicao = 0
      } else {
        ultimaPosicao = 0
        primeiraPosicao = total
      }
    } else {
      ultimaPosicao += 2
      primeiraPosicao = ultimaPosicao - 1
    }
    setProjetoActive([projects[primeiraPosicao], projects[ultimaPosicao]])
  }

  return (
    <SectionContainer id="Projects">
      <h2>Meus Projetos</h2>
      <Project
        Description={projetoActive[0].Description}
        Image={projetoActive[0].Image}
        Link={projetoActive[0].Link}
        Title={projetoActive[0].Title}
        Site={projetoActive[0].Site}
      />
      <hr />
      <Project
        Description={projetoActive[1].Description}
        Image={projetoActive[1].Image}
        Link={projetoActive[1].Link}
        Title={projetoActive[1].Title}
        Site={projetoActive[1].Site}
        isSecond
      />
      <button onClick={passa}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="35"
          fill={Colors.white}
          className="bi bi-forward-fill"
          viewBox="0 0 16 16"
        >
          <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557" />
        </svg>
      </button>
    </SectionContainer>
  )
}

export default Projects
