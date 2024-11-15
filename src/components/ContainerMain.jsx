import Instructions from "./Instructions";
import ContainerCarousel from "./ContainerCarousel";

const ContainerMain = () => {

    return (
        <>
        <div className="breakpoints flex flex-col justify-center items-center bg-slate-900 m-auto">
        <Instructions />
        <ContainerCarousel />
        </div>
        </>
    )
};

export default ContainerMain;