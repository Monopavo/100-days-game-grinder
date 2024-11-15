import GameBox from "./GameBox";

const ContainerResult = ({gamesList, setGamesList}) => {
    
    return (
        <div className="w-100 h-100">
            {gamesList && gamesList.length > 0 ? ( 
                gamesList.map(game => (
                <GameBox key={game.id} game={game} />
            ))
        ) : ( 
            <p>There are no games that suit your search.</p>
        )}
        </div>
    );
};

export default ContainerResult;