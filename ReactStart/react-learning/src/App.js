import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div class="flex flex-col justify-around items-center gap-10">
      <button class="size-11 bg-red-500">Test</button>
      <img width={60} height={60} src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>
      <Game />
    </div>
  );
}

export default App;
