import {useContext} from "react";
import {ResultsContext} from "../context";

const ReturnButton = () => {
    const {resultsShown, setResultsShown} = useContext(ResultsContext)

    const handleClick = () => {
        window.history.back();
        setResultsShown(false);
    }

    return (
    <>
    {resultsShown ? (
        <>
            <button 
            className="w-20 h-20 bg-slate-100 block"
            onClick={handleClick}
            >
            Return to the Game Grinder
            </button>
        </>
    ) : null };
    </>
    );
};

export default ReturnButton;