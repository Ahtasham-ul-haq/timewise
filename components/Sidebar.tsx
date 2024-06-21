"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { AlarmClock, LayoutDashboardIcon, TimerIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const sidebarLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
    link: "/dashboard",
    color: "text-sky-500",
  },
  {
    name: "Countdown Timer",
    icon: TimerIcon,
    link: "/countdown",
    color: "text-violet-500",
  },
  {
    name: "Remainder",
    icon: AlarmClock,
    link: "/dashboard",
    color: "text-pink-500",
  },
];

const Sidebar = () => {
  const { user } = useUser();
  return (
    <div className="py-4 px-8">
      <div className="text-3xl font-bold ">TimeWise</div>
      <div className="hidden md:flex mt-10 gap-4 items-center hover:bg-background cursor-default transition duration-300 px-4 py-2 rounded-lg ">
        <UserButton afterSignOutUrl="/" />
        <div>
          <h2 className="text-normal">{user?.firstName}</h2>
          <p className="text-xs text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-5">
        {sidebarLinks.map((link) => (
          <Link href={link.link} className="">
            <link.icon className={`h-5 w-5 ${link.color}`} />
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
