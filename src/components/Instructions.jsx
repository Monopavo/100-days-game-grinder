import {useContext} from "react";
import {ResultsContext} from "../context.jsx";

const Instructions = () => {
    const {resultsShown} = useContext(ResultsContext);

return (
    <>
    {resultsShown ? null : (
        <>
        <div className="breakpoints border-double border-4 border-stone-100 text-slate-100 m-auto">
            <p className="breakpoints w-auto">
                <span className="block">Looking for free games?</span> 
                <span className="block">Choose a genre, and it'll be added to the "Game Grinder"!</span>
                <span className="block">Once you've narrowed down your selection, click the button at the bottom of the page!</span>
            </p>
        </div>
        </>
    )};
    </>
    );
};

export default Instructions;