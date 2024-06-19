"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const { user, isLoaded } = useUser();
  return (
    <header className="flex justify-between items-center">
      <div className="text-3xl font-bold ">TimeWise</div>
      <div>
        <Link href={!user ? "/sign-in" : "dashboard"}>
          <Button>{!user ? "Sign in" : "Dashboard"}</Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
