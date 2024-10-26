import styled from 'styled-components'
import { Colors } from '../../styles'

export const ConteinerFooter = styled.footer`
  box-shadow: 0 -10px 10px -5px rgba(255, 255, 255, 0.7);
  position: relative;
  display: flex;
  padding: 18px 0;
  gap: 24px;
  justify-content: center;
  p,
  a {
    text-align: center;
    font-size: 14px;
    color: ${Colors.white};
  }
`
