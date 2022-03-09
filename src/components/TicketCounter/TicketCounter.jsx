import "./TicketCounter.scss";
import { useState } from "react";

const TicketCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0)
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="ticket-counter">
      <h4 className="ticket-counter__heading">Tickets Completed:</h4>
      <p className="ticket-counter__number">{counter}</p>
      <div className="ticket-counter__buttons">
        <button className="buttons ticket-counter__buttons--decrement" onClick={handleDecrement}>-</button>
        <button className="buttons ticket-counter__buttons--increment" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default TicketCounter;