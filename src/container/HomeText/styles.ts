import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > div {
    margin-left: 20%;
    margin-top: -15%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  h1 {
    font-family: ${Fonts.Amsterdam};
    font-weight: normal;
    font-size: 64px;
  }

  p {
    line-height: 22px;
    font-size: 20px;
    width: 70%;
  }

  .Curriculo {
    background-color: ${Colors.Primary};
    padding: 12px 16px;
    border-radius: 50px;
    font-size: 16px;
    font-family: ${Fonts.Roboto};
    font-weight: bold;
    border: none;
    color: #000;
    text-decoration: none;
  }

  .buttons {
    display: flex;
    gap: 32px;
  }
  button,
  a {
    padding: 12px;
    background-color: transparent;
    border: 1px solid ${Colors.Primary};
    border-radius: 50%;
    width: max-content;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }
`
