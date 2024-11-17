import {useContext} from "react";
import {ResultsContext} from "../context.jsx";
import icon from "../assets/grind-button.svg";

const ConfirmButton = ({queryString, setQueryString, setGamesList}) => {
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
        setQueryString("");
    }

    return (
        <>
        {resultsShown ? null : (
            <>
                <button 
                className="w-40 h-40 mt-5 rounded-lg px-2 mb-6 bg-lime-500"
                onClick={handleClick}
                >
                <img src={icon} />
                </button>
            </>
        )};
        </>
    );
};

export default ConfirmButton;