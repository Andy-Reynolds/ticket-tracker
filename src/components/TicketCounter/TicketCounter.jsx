import "./TicketCounter.scss";
import { useState } from "react";

const TicketCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    console.log("handling decrement");
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    console.log("handling increment");
    setCounter(counter + 1);
  };

  return (
    <div className="ticket-counter">
      <p>{counter}</p>
      <div className="buttons">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default TicketCounter;