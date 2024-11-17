import {useContext, useState} from "react";
import Instructions from "./Instructions";
import ContainerCarousel from "./ContainerCarousel";
import ConfirmButton from "./ConfirmButton";
import ContainerResult from "./ContainerResult";
import {ResultsContext} from "../context.jsx";


const ContainerMain = () => {
    const [queryString, setQueryString] = useState("");
    const [gamesList, setGamesList] = useState([]);
    const {resultsShown} = useContext(ResultsContext);

    return (
        <>
        <div className="breakpoints flex flex-col justify-center items-center bg-slate-900 m-auto">
            <Instructions />
            <ContainerCarousel queryString={queryString} setQueryString={setQueryString}/>
            <ConfirmButton queryString={queryString} setGamesList={setGamesList} />
            <ContainerResult queryString={queryString} gamesList={gamesList} />
        </div>
        </>
    )
};

export default ContainerMain;