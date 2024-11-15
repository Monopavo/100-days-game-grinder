const GameBox = ({game}) => {
    return (
        <div className="game-card">
            <img src={game.thumbnail}/>
            <h3>{game.title}</h3>
            <p>{game.short_description}</p>
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Platform:</strong> {game.platform}</p>
            <p><strong>Publisher:</strong> {game.publisher}</p>
            <p><strong>Developer:</strong> {game.publisher}</p>
            <p><strong>Release Date:</strong> {game.release_date}</p>
            <a href={game.game_url} target="_blank">Play Now</a>
        </div>
    );
};

export default GameBox;