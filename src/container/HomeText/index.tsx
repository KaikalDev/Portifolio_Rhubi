import { Colors } from '../../styles'
import { TextContainer } from './styles'

const HomeText = () => (
  <TextContainer>
    <div>
      <h1>Rhubi Marçal</h1>
      <p>
        Estudante de Ánalise e Desenvolvimento de Sistemas com interesse em
        UI/UX design com fluencia em ingles.
      </p>
      <button className="Curriculo">
        Currículo
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            stroke="currentColor"
            className="bi bi-download"
            viewBox="0 0 16 16"
            strokeWidth="1"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
          </svg>
        </i>
      </button>
      <div className="buttons">
        <a href="#AboutMe">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill={Colors.Primary}
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </a>
        <a href="#Projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill={Colors.Primary}
            className="bi bi-file-earmark-text-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
          </svg>
        </a>
        <a href="#Contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill={Colors.Primary}
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
        </a>
      </div>
    </div>
  </TextContainer>
)

export default HomeText
