import React, { useState, useEffect } from "react";

const MaxPalindrome = () => {
    const [inputValue, setInputValue] = useState("");
    const [maxPalindrome, setMaxPalindrome] = useState("");

    useEffect(() => {
        const findMaxPalindrome = (s) => {
            let maxPalindrome = "";
            for (let i = 0; i < s.length; i++) {
                for (let j = i + 1; j <= s.length; j++) {
                    const substr = s.substring(i, j);
                    if (substr === substr.split('').reverse().join('') && substr.length > maxPalindrome.length) {
                        maxPalindrome = substr;
                    }
                }
            }
            return maxPalindrome;
        }

        setMaxPalindrome(findMaxPalindrome(inputValue));
    }, [inputValue]);

    return (
        <div className="flex flex-col items-center">
            <h1>Max Palindrome</h1>
            <input className="border-2" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <h3>{maxPalindrome}</h3>
        </div>
    );
};

export default MaxPalindrome;

