"use client";

import CountdownTimer from "@/components/CountdownTimer";
import Timer from "@/components/Timer";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

const Dashboard = () => {
  const { user } = useUser();

  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  const [initialTime, setInitialTime] = useState(60); // default to 1 minute
  const [showTimer, setShowTimer] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInitialTime(Number(event.target.value) * 60); // convert minutes to seconds
  };

  const handleStartTimer = () => {
    setShowTimer(true);
  };
  return (
    <div className="px-4">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="h-full flex flex-col justify-between  py-6 md:px-5 md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-2xl font-semibold">
            Welcome, {user?.firstName}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full items-center mt-10 border border-white">
        <Timer />
      </div>
    </div>
  );
};

export default Dashboard;
