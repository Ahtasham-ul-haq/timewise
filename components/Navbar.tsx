"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { user, isLoaded } = useUser();
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2 text-3xl font-bold">
        <Image src={`/logo.png`} alt="logo" width={30} height={15} />
        TimeWise
      </div>
      <div>
        <Link href={!user ? "/sign-in" : "dashboard"}>
          <Button>{!user ? "Sign in" : "Dashboard"}</Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
