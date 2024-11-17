const GameBox = ({game}) => {
    return (
        <div className="bg-slate-600 w-fit h-full max-w-96 p-2 text-slate-100">
            <div className="bg-slate-500 pt-2 outline-double outline-2">
            <a href={game.game_url} target="_blank">
                <img className="h-auto w-auto object-center object-contain m-auto outline-double outline-2" src={game.thumbnail}/>
            </a>
            <h3 className="text-lg font-bold underline pt-2">{game.title}</h3>
            <p className="py-2">{game.short_description}</p>
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Platform:</strong> {game.platform}</p>
            <p><strong>Publisher:</strong> {game.publisher}</p>
            <p><strong>Developer:</strong> {game.publisher}</p>
            <p className="pb-2"><strong>Release Date:</strong> {game.release_date}</p>
            </div>
            <a href={game.game_url} target="_blank">
                <button className="bg-slate-100 rounded-xl border-8 p-1 border-slate-600">
                    <strong className="text-slate-800">Play Now!</strong>
                </button>
            </a>
        </div>
    );
};

export default GameBox;