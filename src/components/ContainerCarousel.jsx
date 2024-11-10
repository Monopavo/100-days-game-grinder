import {useEffect, useState} from "react";
import boxObjects from "../boxObjects.js";
import Box from "./Box";
import animations from "../styles/animations.module.css";

const ContainerCarousel = () => {
    const [boxes, setBoxes] = useState(boxObjects);
    
    return (
        <>
        <div className={`breakpoints gap-x-5 flex flex-row ${animations.conveyor}`}>
        {Object.keys(boxes).map((category) => (
        <Box key={category} description={boxes[category].description} icon={boxes[category].icon} />
        ))}
        </div>
        </>
    )
};

export default ContainerCarousel;