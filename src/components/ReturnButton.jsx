import {useContext} from "react";
import {ResultsContext} from "../context";
import icon from "../assets/return.svg";

const ReturnButton = () => {
    const {resultsShown, setResultsShown} = useContext(ResultsContext)

    const handleClick = () => {
        setResultsShown(false);
    }

    return (
    <>
    {resultsShown ? (
        <>
            <button 
            className="w-40 h-40 mt-5 rounded-lg px-2 text-xl outline mb-6 bg-red-500"
            onClick={handleClick}
            >
            <img src={icon} />
            </button>
        </>
    ) : null };
    </>
    );
};

export default ReturnButton;