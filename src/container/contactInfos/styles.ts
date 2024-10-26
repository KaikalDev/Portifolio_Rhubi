import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const ContainerContact = styled.div`
  border: 5px solid ${Colors.white};
  border-radius: 50px;
  width: max-content;
  position: relative;
  padding: 180px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: max-content;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h1 {
    font-size: 48px;
    font-family: ${Fonts.Amsterdam};
    font-weight: normal;
    position: absolute;
    top: 75px;
    left: 8px;
    white-space: nowrap;
    background-color: ${Colors.TextBack};
    height: 75px;
    line-height: 25px;
  }

  p {
    line-height: 22px;
    font-size: 20px;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  a {
    cursor: pointer;
    color: ${Colors.white};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .button {
    background-color: ${Colors.Primary};
    color: ${Colors.white};
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    transition: all ease 0.3s;

    &:hover {
      transform: scale(1.15);
    }
  }
`
