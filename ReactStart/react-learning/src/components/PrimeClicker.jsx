import React, { useState, useEffect } from "react";

const PrimeClicker = () => {
    const [count, setCount] = useState(2);
    const [factorial, setFactorial] = useState(1);

    useEffect(() => {
        const calculateFactorial = (n) => {
            if (n === 0) return 1;
            return n * calculateFactorial(n - 1);
        }

        setFactorial(calculateFactorial(count));
    }, [count]);
    

    const isPrimeNumber = (n) => {
        if (n < 2) return false;
        if (n === 2) return true;

        for (let i = 2; i < Math.sqrt(n) + 1; i++) {
            if (n % i === 0) return false;
        }

        return true;
    }

    const OnClick = () => {
        console.log(count);
        let a = count;

        a++;
        while (!isPrimeNumber(a))
            a++;

        setCount(a);
    }

    return (
        <div class="flex flex-col items-center">
            <h1>Prime Game</h1>
            <button class="bg-blue-600 rounded-2xl p-5 mt-5" onClick={OnClick}>
                {count}
            </button>
            <h3>{factorial}</h3>
        </div>
    );
};

export default PrimeClicker;
