import {useEffect, useState} from "react";
import animations from "../styles/animations.module.css";
import {ResultsContext} from "../context";

const Box = ({category, description, icon, queryString, setQueryString}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [animation, setAnimation] = useState("");
    const {resultsShown} = useContext(ResultsContext);

    const handleClick = () => {
        setIsSelected(!isSelected);
        setQueryString(`${queryString}${category}.`);
    };

    useEffect(() => { 
        setAnimation(
            isSelected ? animations.boxGrind : null);
    }, [isSelected]);

    return (
        <div 
            className={`flex-none w-28 p-1 m-auto ${animation}`}
            onClick={handleClick}
        >
            <img src={icon} />
            <p className="sticky bg-slate-500 text-slate-200 font-bold text-pretty">{description}</p>
        </div>
    );
};

export default Box;