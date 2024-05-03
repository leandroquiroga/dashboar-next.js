import Image from "next/image";
import React from "react";
import {
  RiDashboardLine,
  RiCalculatorLine,
  RiArticleLine,
  RiFootballLine,
  RiHeart2Line,
} from "react-icons/ri";
import { SidebarMenuItems } from "./SidebarMenuItems";

const menuItem = [
  {
    icon: <RiArticleLine size={30} />,
    path: "/dashboard/main",
    subtitle: "Dashboard Page",
    title: "Dashboard",
  },
  {
    icon: <RiCalculatorLine size={30} />,
    path: "/dashboard/counter",
    subtitle: "Counter Page",
    title: "Counter",
  },
  {
    icon: <RiFootballLine size={30} />,
    path: "/dashboard/pokemons",
    subtitle: "Pokemon Page",
    title: "Pokemon",
  },
  {
    icon: <RiHeart2Line size={30} />,
    path: "/dashboard/favorites",
    subtitle: "Favorite Page",
    title: "Favorites",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0">
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-blue-500">
          <RiDashboardLine className="mr-2" />
          <span>D</span>
          <span className="text-white">ashboard</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width="40"
              height="40"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="unplash"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Leandro Emanuel
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItem.map((item) => (
          <SidebarMenuItems key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
