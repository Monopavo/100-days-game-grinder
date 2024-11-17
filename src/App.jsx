import ContainerSticky from "./components/ContainerSticky";
import ContainerMain from "./components/ContainerMain";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ResultsProvider } from "./context.jsx";

const App = () => {

    return (
      <>  
          <ResultsProvider>
          <div className="wrapper">
          <ContainerSticky><Header/></ContainerSticky>
          <ContainerMain/>
          <ContainerSticky><Footer/></ContainerSticky>
          </div>
          </ResultsProvider>
      </>
    );
};

export default App