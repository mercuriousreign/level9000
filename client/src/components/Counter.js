import React, { useState, useEffect } from "react";



export default function Counter(props) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count < 6) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    props.onCountChange(count);
  }, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>💪*👍*💪</button>
    <button onClick={handleDecrement}>🙄*👎*🙄</button>
    </div>
  );
}