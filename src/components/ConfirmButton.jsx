import {useContext} from "react";
import {ResultsContext} from "../context.jsx";

const ConfirmButton = ({queryString, setGamesList}) => {
    const {resultsShown, setResultsShown} = useContext(ResultsContext);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_REACT_APP_ENV_KEY,
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };    

    const sendQuery = async () => {
        try {
            const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${queryString}`, options);
            if (!res.ok) {
                throw new Error(`Network response was not ok. Status: ${res.status}`);
            }
            const data = await res.json();
            setGamesList(data);
        } catch (error) {
            console.error(`Failed to fetch game data: ${error.message}`);
        }
    };

    const handleClick = () => {
        sendQuery();
        setResultsShown(true);
    }

    return (
        <>
        {resultsShown ? null : (
            <>
                <div 
                className="w-20 h-20 bg-slate-100"
                onClick={handleClick}
                >
                Click ME!
                </div>
            </>
        )};
        </>
    );
};

export default ConfirmButton;