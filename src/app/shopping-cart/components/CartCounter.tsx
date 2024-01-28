"use client";

import React, { useState } from "react";

interface CartCounterProps {
  value?: number
}

export const CartCounter = ({value = 10}: CartCounterProps) => {
  const [counter, setCounter] = useState(value);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-9xl text-center">{counter}</span>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={() => setCounter(counter + 1)}
          className="p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-1">
          +1
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className={'p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-1'}
          disabled={counter === 0}>
          -1
        </button>
      </div>
    </div>
  );
};
