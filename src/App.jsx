import ContainerSticky from "./components/ContainerSticky";
import ContainerMain from "./components/ContainerMain";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import ContainerCarousel from "./components/ContainerCarousel";
import Footer from "./components/Footer";
import Box from "./components/Box";

const App = () => {

  return (
    <>
    <ContainerMain>
      <ContainerSticky><Header/></ContainerSticky>
      <Instructions/>
      <Box />
      <ContainerCarousel />
      <ContainerSticky><Footer/></ContainerSticky>
    </ContainerMain>
    </>
  );
};

export default App