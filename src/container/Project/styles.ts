import styled from 'styled-components'
import { Colors } from '../../styles'

export const ProjectContainer = styled.div`
  display: flex;
  padding: 10px 16px;
  color: ${Colors.TextBack};
  gap: 15%;

  &.Second {
    flex-direction: row-reverse;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    flex: 1;
  }

  span {
    font-weight: bold;
  }

  p {
    font-size: 18px;
  }

  a {
    color: ${Colors.TextBack};
  }

  img {
    height: 270px;
    width: 440px;
    object-fit: cover;
    flex-basis: 440px;
  }

  .Button {
    color: ${Colors.white};
    text-decoration: none;
    background-color: ${Colors.TextBack};
    max-width: max-content;
    padding: 8px 16px;
    transition: all ease 0.3s;
    border: 2px solid transparent;
    border-radius: 20px;

    &:hover {
      font-weight: bold;
      background-color: transparent;
      color: ${Colors.TextBack};
      border: 2px solid ${Colors.TextBack};
    }
  }
`
