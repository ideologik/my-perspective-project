import React from "react";
import { Container, BackgroundImage, OverlayImage } from "./styles";
import backgroundSrc from "/background.jpg";
import tabletSrc from "/overlay.png";
import buttonSrc from "/info.png";

const App: React.FC = () => {
  return (
    <Container>
      <BackgroundImage src={backgroundSrc} />
      <OverlayImage
        src={tabletSrc}
        bottom="3%"
        left="36%"
        width="15%"
        perspective="1000px"
        rotateX="45deg"
        rotateZ="-21deg"
        opacity={0.6}
      />
      <OverlayImage
        src={buttonSrc}
        bottom="10%"
        left="20%"
        width="10%"
        perspective="300px"
        rotateX="45deg"
        rotateZ="-12deg"
        opacity={0.6}
      />
    </Container>
  );
};

export default App;
