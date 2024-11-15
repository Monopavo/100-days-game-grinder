import ContainerSticky from "./components/ContainerSticky";
import ContainerMain from "./components/ContainerMain";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContextSelected from "./contexts/ContextSelected";

const App = () => {
    const toggleSelected = (setSelected, selected) => {
    setSelected(!selected);
    };

    const value = {toggleSelected};




    return (
      <>  
        <ContextSelected.Provider value={value}>
          <div className="wrapper">
          <ContainerSticky><Header/></ContainerSticky>
          <ContainerMain />
          <ContainerSticky><Footer/></ContainerSticky>
          </div>
        </ContextSelected.Provider>
      </>
    );
};

export default App