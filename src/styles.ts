import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundImage = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  filter: blur(1px); // Opcional, para dar más realismo
`;

interface OverlayImageProps {
  src: string;
  bottom: string;
  left: string;
  width: string;
  perspective: string;
  rotateX: string;
  rotateZ: string;
  opacity: number;
}

export const OverlayImage = styled.img<OverlayImageProps>`
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  transform: translate(-50%, 0) perspective(${(props) => props.perspective})
    rotateX(${(props) => props.rotateX}) rotateZ(${(props) => props.rotateZ});
  width: ${(props) => props.width};
  height: auto;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s, filter 0.3s;

  &:hover {
    opacity: 1; // Aumenta la opacidad
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); // Efecto glow dorado
    cursor: pointer;
  }
`;
