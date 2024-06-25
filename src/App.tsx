import React from "react";
import {
  Container,
  BackgroundImage,
  OverlayTablet,
  OverlayButton,
} from "./styles";
import backgroundSrc from "/background.jpg";
import tabletSrc from "/overlay.png";
import buttonSrc from "/info.png";

const App: React.FC = () => {
  return (
    <Container>
      <BackgroundImage src={backgroundSrc} />
      <OverlayTablet src={tabletSrc} />
      <OverlayButton src={buttonSrc} />
    </Container>
  );
};

export default App;
