import { useContext, useState } from "react";
import ContextSelected from "../contexts/ContextSelected";

const Box = ({description, icon}) => {
    const {toggleSelected} = useContext(ContextSelected);
    const [selected, setSelected] = useState(false);

    return (
        <>
        <div 
        className="flex-none w-24 m-auto"
        onClick={() => toggleSelected(setSelected, selected)}
        style={{ display : selected ? "none" : "show"}}
        >
            <img src={icon} />
            <p display="none">{description}</p>
        </div>
        </>
    )
};

export default Box;