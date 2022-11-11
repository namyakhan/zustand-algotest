import React, { useState } from "react";
import useTodoStore from "../app/todoStore";

const TodoInput = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [leg, setLeg] = useState("");
  const [position, setPosition] = useState("");
  // OLD states
  const [isShown, setIsShown] = useState(false);
  const [isFuturesShown, setIsFuturesShown] = useState(false);
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleTodoSubmit = () => {
    addTodo({
      id: Math.ceil(Math.random() * 1000000),
      leg: leg,
      position: position,
    });

    setLeg("");
    setPosition("");
  };

  // OLD CLicks
  const handleLegClick = () => {
    setIsShown(!isShown);
  };
  const handleFuturesClick = () => {
    setIsFuturesShown(true);
    setIsOptionsShown(false);
    setIsActive((current) => !current);
  };

  const handleOptionsClick = () => {
    setIsOptionsShown(true);
    setIsFuturesShown(false);
    setIsActive((current) => !current);
  };

  // Components
  
  const Futures = () => {
    return (
      <div className="mt-5 flex flex-col items-center justify-center ">
        <div className="flex flex-row items-center  justify-center space-x-5">
          <div className="flex flex-col items-center space-y-1">
            <h3>Total Lot</h3>
            <input
              min="1"
              value={leg}
              className="p-2 w-[100px] h-[30px] bg-white border border-gray-300 text-charcoal text-sm rounded-full"
              placeholder="1"
              onChange={(e) => {
                setLeg(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col items-center space-y-1">
            <h3>Position</h3>
            <select
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              value={position}
              id="position"
              className="p-1 w-[100px] h-[30px] bg-white border border-gray-300 text-charcoal text-[16px] font-[400] rounded-full focus:ring-blue-500 focus:border-blue-500 block"
            >
              <option value="Sell">Sell</option>
              <option value="Buy">Buy</option>
            </select>
          </div>
        </div>

        <div className="mt-10 flex flex-row items-center justify-center space-x-5">
          <button onClick={handleTodoSubmit} className="bg-blue text-white">
            Add Leg
          </button>
          <button onClick={handleLegClick} className="bg-blue text-white">
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const Options = () => {
    return <div>Option</div>;
  };

  const Segments = () => {
    return (
      <div>
        <div className="flex flex-row items-center justify-center space-x-5 mt-5">
          <h6>Select Segments</h6>
          <div className="flex flex-row items-center">
            <h4
              onClick={handleFuturesClick}
              className={`rounded-l-full ${isActive ? "active" : "inactive"}`}
            >
              Futures
            </h4>
            <h4
              onClick={handleOptionsClick}
              className={`rounded-r-full ${!isActive ? "active" : "inactive"}`}
            >
              Options
            </h4>
          </div>
        </div>
        {isFuturesShown && <Futures />}
        {isOptionsShown && <Options />}
      </div>
    );
  };

  return (
    <div className="input-container ">
      <div className="container mx-auto mt-16">
        {/* Add Legs */}
        <div className=" container mx-auto flex flex-row justify-between mt-10 border-b border-grey">
          <h6>Legs</h6>
          <h5 onClick={handleLegClick}>+ Add Leg</h5>
        </div>
        {isShown && <Segments />}
      </div>
    </div>
  );
};

export default TodoInput;
