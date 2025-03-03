import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const SectionContainer = styled.section`
  padding: 16px 15%;
  background-color: ${Colors.Secondary};
  position: relative;
  box-shadow: 0 10px 10px -5px rgba(255, 255, 255, 0.7);

  h2 {
    text-align: center;
    font-size: 48px;
    font-family: ${Fonts.Aloja};
    color: ${Colors.white};
  }

  hr {
    background-color: #872b10;
    height: 2px;
    border: none;
    opacity: 0.5;
  }

  button {
    background-color: #000;
    color: ${Colors.white};
    border: none;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    font-size: 40px;
    position: absolute;
    right: 10%;
    top: calc(50% + 20px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
