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
      <button onClick={handleDecrement}>Decrement</button>
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default TicketCounter;