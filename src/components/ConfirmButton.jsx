import {ResultsContext} from "../context";

const ConfirmButton = ({queryString, gamesList, setGamesList}) => {
    const {resultsShown} = useContext(ResultsContext);

    const sendQuery = () => {
        fetch(`https://www.freetogame.com/api/filter?tag=${queryString}`, 
            {mode: 'no-cors'}
        );
    };

    const handleClick = () => {
        sendQuery();
    }

    return (
        <>
        <div 
        className="w-20 h-20 bg-slate-100"
        onClick={handleClick}
        >
            Click ME!
        </div>
        </>
    )

};

export default ConfirmButton;