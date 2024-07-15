import React, {useState} from "react";

const Game = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Game</h1>
            <button class="bg-blue-600 rounded-2xl p-5 mt-5" onClick={() => setCount(count + 1)}>Click me {count}</button>
        </div>
    );
};

export default Game;
