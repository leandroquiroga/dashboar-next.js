'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


interface PropsSidebarMenu {
  icon: JSX.Element;
  path: string;
  subtitle: string;
  title: string;
};

export const SidebarMenuItems = ({ icon, path, subtitle, title }: PropsSidebarMenu) => {
  
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`
        w-full mb-1 px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150
        ${pathName === path ? "bg-blue-800" : ""} 
      `}>
      
      <div>
          {icon}
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
