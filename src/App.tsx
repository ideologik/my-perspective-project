import React from "react";
import { Container, BackgroundImage, OverlayImage } from "./styles";
import backgroundSrc from "/background.jpg";
import overlaySrc from "/overlay.png";

const App: React.FC = () => {
  return (
    <Container>
      <BackgroundImage src={backgroundSrc} />
      <OverlayImage src={overlaySrc} />
    </Container>
  );
};

export default App;
