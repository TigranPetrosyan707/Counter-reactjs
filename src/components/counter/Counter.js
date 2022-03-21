import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  function deceaseButton() {
    setCount(count + 1);
  }

  function increaseButton() {
    setCount(count - 1);
  }
  return (
    <div className="counterBtn">
      <button className="btn btnDec" onClick={deceaseButton}>
        +
      </button>
      <span>{count}</span>
      <button className="btn btnInc" onClick={increaseButton}>
        -
      </button>
    </div>
  );
}

export default Counter;
