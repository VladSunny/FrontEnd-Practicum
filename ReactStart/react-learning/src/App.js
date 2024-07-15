import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Game from './components/Game';
import PrimeClicker from './components/PrimeClicker';

function App() {
  return (
    <div class="flex flex-col justify-around items-center gap-10">
      <Game />
      <PrimeClicker />
    </div>
  );
}

export default App;
