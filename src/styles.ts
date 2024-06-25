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

export const OverlayButton = styled.img`
  position: absolute;
  bottom: 10%; // Ajusta la posición según la perspectiva
  left: 20%;
  transform: translate(-50%, 0) perspective(300px) rotateX(45deg)
    rotateZ(-12deg); // Ajusta el ángulo de la perspectiva
  width: 10%;
  height: auto;
  opacity: 0.6; // Ajusta la transparencia
  transition: opacity 0.3s, box-shadow 0.3s;

  &:hover {
    opacity: 0.9; // Aumenta la opacidad
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); // Efecto glow dorado
    cursor: pointer;
  }
`;

export const OverlayTablet = styled.img`
  position: absolute;
  bottom: 3%; // Ajusta la posición según la perspectiva
  left: 36%;
  transform: translate(-50%, 0) perspective(1000px) rotateX(45deg)
    rotateZ(-21deg); // Ajusta el ángulo de la perspectiva
  width: 15%;
  height: auto;
  opacity: 0.6; // Ajusta la transparencia
  transition: opacity 0.3s, box-shadow 0.3s;

  &:hover {
    opacity: 0.9; // Aumenta la opacidad
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); // Efecto glow dorado
    cursor: pointer;
  }
`;
