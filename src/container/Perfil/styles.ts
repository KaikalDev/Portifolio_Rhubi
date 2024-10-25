import styled from 'styled-components'
import { Colors } from '../../styles'

export const PerfilContainer = styled.div`
  aspect-ratio: 1 / 1;
  height: 60vh;
  position: relative;
  margin-left: 10%;

  img {
    height: 90%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  i {
    content: '';
    background-color: ${Colors.Secondary};
    height: 90%;
    width: 90%;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
