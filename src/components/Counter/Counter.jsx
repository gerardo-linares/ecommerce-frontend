import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <div className="flex items-center">
        <button
          className=" hover:bg-hover_button text-color_button font-bold  px-2 rounded text-xl"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="mx-4 ">{count}</span>
        <button
          className=" hover:bg-hover_button text-color_button font-bold px-2 rounded text-xl"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
