import { UserButton } from "@clerk/nextjs";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-end items-center">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Topbar;
