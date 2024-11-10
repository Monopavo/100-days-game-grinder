import ContainerSticky from "./components/ContainerSticky";
import ContainerMain from "./components/ContainerMain";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
        <ContainerSticky><Header/></ContainerSticky>
        <ContainerMain />
        <ContainerSticky><Footer/></ContainerSticky>
    </>
  );
};

export default App