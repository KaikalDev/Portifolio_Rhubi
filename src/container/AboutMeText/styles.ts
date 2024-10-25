import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const TextContainer = styled.div`
  margin-right: 10%;
  background-color: ${Colors.Secondary};
  padding: 24px 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 21px;

  h2 {
    font-family: ${Fonts.Aloja};
    font-size: 48px;
  }

  p {
    line-height: 25px;
    font-size: 18px;
  }

  img {
    height: 50px;
  }
`
