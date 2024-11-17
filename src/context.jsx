import React, {createContext, useState} from "react";

const ResultsContext = createContext();

const ResultsProvider = ({children}) => {
    const [resultsShown, setResultsShown] = useState(false);

    return (
        <ResultsContext.Provider value={{resultsShown, setResultsShown}}>
            {children}
        </ResultsContext.Provider>
    );
};

const handleResults = () => {};

export {ResultsProvider, ResultsContext, handleResults};