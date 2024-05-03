"use client";
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { RiShoppingCartLine } from "react-icons/ri";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center items-center w-full">
      <SimpleWidget
        label="Carrito de compras"
        href="/dashboard/counter"
        icon={<RiShoppingCartLine size={50} />}
        title={`${counter}`}
        subtitle="Productos en el carrito"
      />
    </div>
  );
};
