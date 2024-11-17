import {useContext} from "react";
import {ResultsContext} from "../context.jsx";

const Instructions = () => {
    const {resultsShown} = useContext(ResultsContext);

return (
    <>
    {resultsShown ? null : (
        <>
        <div className="breakpoints border-double border-4 border-stone-100 text-slate-100 m-auto text-pretty rounded-lg">
            <p className="breakpoints text-xl w-auto bg-slate-500 text-slate-200 rounded-lg">
                <span className="block py-2 pt-6">
                    <strong>Looking for free games?</strong>
                </span> 
                <span className="block py-2">
                    Choose a genre, and it'll be added to the "Game Grinder"!
                </span>
                <span className="block py-2 pb-6">
                    Once you've narrowed down your choices, click the button at the bottom of the page!
                </span>
            </p>
        </div>
        </>
    )};
    </>
    );
};

export default Instructions;