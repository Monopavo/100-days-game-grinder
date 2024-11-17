const GameBox = ({game}) => {
    return (
        <div className="text-xl bg-slate-600 w-fit h-full max-w-96 p-2 m-auto text-slate-100">
            <div className="bg-slate-500 outline-double outline-2 rounded-lg">
            <a href={game.game_url} target="_blank">
                <img className="h-auto w-auto object-center object-contain m-auto rounded-lg outline-double outline-2" src={game.thumbnail}/>
            </a>
            <h3 className="text-2xl font-bold underline pt-4">{game.title}</h3>
            <p className="py-2"><em className="text"> {game.short_description}</em></p>
            <p><strong className="underline">Genre:</strong><em> {game.genre}</em></p>
            <p><strong className="underline">Platform:</strong><em> {game.platform}</em></p>
            <p><strong className="underline">Publisher:</strong><em> {game.publisher}</em></p>
            <p><strong className="underline">Developer:</strong><em> {game.publisher}</em></p>
            <p className="py-2 pt-4"><strong className="underline">Release Date (YY-MM-DD):</strong>
            <em className="block pb-2">{game.release_date}</em></p>
            <a href={game.game_url} target="_blank">
                <button className="w-24 h-10 rounded-xl mt-3 border-slate-600 mb-6 bg-lime-500 outline">
                    <strong className="text-slate-100">Play Now!</strong>
                </button>
            </a>
            </div>
        </div>
    );
};

export default GameBox;