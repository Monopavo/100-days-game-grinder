import {useState} from "react";
import boxObjects from "../boxObjects.js";
import Box from "./Box";
import animations from "../styles/animations.module.css";

const ContainerCarousel = () => {
    const [boxes, setBoxes] = useState(boxObjects);
    
    return (
        <>
        <hr className={`outline-slate-100 outline-dashed h-2 -skew-x-12 m-5 ${animations.beltTop}`}></hr>
        <div className={`breakpoints gap-x-5 flex flex-row flex-wrap flex-auto m-auto`}>
        {Object.keys(boxes).map((category) => (
        <Box key={category} description={boxes[category].description} icon={boxes[category].icon}/>
        ))}
        </div>
        <hr className={`outline-slate-100 outline-dashed h-2 skew-x-12 m-5 ${animations.beltBottom}`}></hr>
        </>
    )
};

export default ContainerCarousel;