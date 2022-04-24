import React, {useState} from 'react'
import './App.css';
import Container from './Container';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
       <h1>Counter App using State/Hooks</h1>
      </header>
      <h2>Current value of Count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => count > 10 ? "" : setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => count === 0 ? "" : setCount(count - 1)}>Decrease Counter</button>
      <Container />
    </div>
  );
}

export default App;
