import styled from 'styled-components'

export const ContainerSection = styled.div`
  display: flex;
  position: relative;
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  align-items: center;

  img {
    height: 100%;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 2%,
      rgba(80, 80, 80, 0.2665441176470589) 48%,
      rgba(255, 255, 255, 0) 64%
    );
    pointer-events: none;
  }
`
