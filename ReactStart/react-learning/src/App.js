import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Game from './components/Game';
import PrimeClicker from './components/PrimeClicker';
import MaxPalindrome from './components/MaxPalindrome';

function App() {
  return (
    <div class="flex flex-col justify-around items-center gap-10">
      <Game />
      <PrimeClicker />
      <MaxPalindrome />
    </div>
  );
}

export default App;
