"use client";

import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Topbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between md:hidden mb-10 m-2 rounded-lg p-4 bg-gray-900">
      <div className="flex gap-2 items-center text-xl font-semibold">
        <Image src={`/logo.png`} alt="logo" width={30} height={15} />
        TimeWise
      </div>
      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/" />
        <div>
          {!isOpen ? (
            <MenuIcon onClick={() => setIsOpen(true)} />
          ) : (
            <Sheet>
              <SheetTrigger>
                <MenuIcon onClick={() => setIsOpen(true)} />
              </SheetTrigger>
              <SheetContent side={`left`} onClick={() => setIsOpen(false)}>
                <div className="flex gap-2 items-center text-xl font-semibold">
                  <Image src={`/logo.png`} alt="logo" width={30} height={15} />
                  TimeWise
                </div>
                <div>
                  <div className="flex flex-col gap-2 mt-5">
                    {sidebarLinks.map((link) => {
                      return (
                        <Link
                          key={link.link}
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
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
