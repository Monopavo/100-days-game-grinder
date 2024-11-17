import GameBox from "./GameBox";
import {ResultsContext} from "../context";
import {useContext} from "react";
import ReturnButton from "./ReturnButton";

const ContainerResult = ({gamesList}) => {
    const {resultsShown} = useContext(ResultsContext);

    return (
        <>
        {resultsShown ? (
            <>
                <div className="bg-slate-700 flex flex-wrap items-center justify-center">
                    {gamesList && gamesList.length > 0 ? (
                        gamesList.map(game => (
                        <GameBox key={game.id} game={game} />
                        ))
                    ) : (
                        <p className="bg-slate-500 p-5 text-slate-200 rounded-lg text-xl font-bold text-pretty">
                            <span className="block">Sorry!</span> 
                            <span className="block">There are no games that suit your search.</span>
                        </p>
                    )}
                </div>
                <ReturnButton />
            </>
        ) : null}
        </>
    );
};


export default ContainerResult;