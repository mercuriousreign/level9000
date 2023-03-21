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
      <h2>Track your progress, press the 💪*👍*💪 button every day you follow your plan: {count} </h2>
      <button onClick={handleIncrement}>💪*👍*💪</button>
    <button onClick={handleDecrement}>🙄*👎*🙄</button>
    </div>
  );
}