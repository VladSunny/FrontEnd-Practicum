import React, {useState} from "react";

const MaxPalindrome = () => {
    const [maxPalindrome, setMaxPalindrome] = useState("");

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

    return (
        <div class="flex flex-col items-center">
            <h1>Max Palindrome</h1>
            <input class="border-2" onChange={(e) => setMaxPalindrome(findMaxPalindrome(e.target.value))}></input>
            <h3>{maxPalindrome}</h3>
        </div>
    );
};

export default MaxPalindrome;
