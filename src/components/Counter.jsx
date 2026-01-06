import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // function for increment
  const increment = () => {
    setCount(count + 1);
  };

  // function for decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // function for reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>

      <div className="btn-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
