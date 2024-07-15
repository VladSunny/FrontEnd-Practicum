import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="flex flex-row justify-around">
      <button class="size-11 bg-red-500">Test</button>
      <img width={60} height={60} src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>
      <button class="bg-blue-600 rounded-2xl p-5" onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
}

export default App;
