import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("");

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    counter <= -1 ? setColor("red") : setColor("green");
  }, [counter]);

  return (
    <div className="App">
      <h1 style={{ color: color }}>{counter}</h1>
      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App;
