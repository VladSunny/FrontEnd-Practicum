import logo from './logo.svg';

function App() {
  return (
    <div class="flex flex-row justify-around">
      <button class="size-11 bg-red-500">Test</button>
      <img width={60} height={60} src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
