"use client";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, initCounterState } from "@/store/counter/CounterSlice";

interface CartCounterProps {
  value?: number
}

const getApiCounter = async () => {

  try {
    const response = await fetch('/api/counter');
    const data = await response.json();
    console.log({data})
    return data;
  } catch (error) {   
    console.error('Error:', error);
    throw error;
  }
}

export const CartCounter = ({value = 10}: CartCounterProps) => {
  
  const counter = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(initCounterState(count))
    })

  }, [dispatch])
  
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-9xl text-center">{counter}</span>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={() => dispatch(increment())}
          className="p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-1">
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className={'p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-1'}
          disabled={counter === 0}>
          -1
        </button>
      </div>
    </div>
  );
};
