"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { AlarmClock, LayoutDashboardIcon, TimerIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { MdOutlineWidgets } from "react-icons/md";

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
    link: "/remainder",
    color: "text-pink-500",
  },
  {
    name: "Widgets",
    icon: MdOutlineWidgets,
    link: "/widgets",
    color: "text-emerald-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { user } = useUser();
  return (
    <div className="py-4 px-2">
      <div className="text-3xl font-bold pl-4">TimeWise</div>
      <div className="hidden md:flex mt-10 gap-4 items-center hover:bg-background cursor-default transition duration-300 px-4 py-2 rounded-lg ">
        <UserButton afterSignOutUrl="/" />
        <div>
          <h2 className="text-normal">{user?.firstName}</h2>
          <p className="text-xs text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        {sidebarLinks.map((link) => {
          return (
            <Link
              href={link.link}
              className={`flex gap-4 px-4 py-3 hover:bg-background rounded-lg items-center ${
                pathname === link.link ? "bg-background" : ""
              }`}
            >
              <link.icon className={`h-5 w-5 ${link.color}`} />
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
