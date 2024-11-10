import {useEffect, useState} from "react";
import boxObjects from "../boxObjects";
import Box from "./Box";

const ContainerCarousel = ({children}) => {
    const [boxes, setBoxes] = useState(boxObjects);

    useEffect(() => {

    }, []);

    return (
        <>
        <div className="breakpoints">
            <div></div>
        </div>
        </>
    )
};

export default ContainerCarousel;