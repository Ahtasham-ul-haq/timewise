"use client";

import { usePathname } from "next/navigation";
import React, { useState, useRef } from "react";

const StopWatch: React.FC = () => {
  const pathname = usePathname();
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Timer is already running

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const formatTime = (time: number) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div
      className={`group flex flex-col items-center justify-center ${
        pathname === "/dashboard" && "border"
      } ${pathname === "/stopwatch" && "h-screen"}  py-4 rounded-lg`}
    >
      <div className="text-4xl font-sans mb-4">{formatTime(time)}</div>
      <div className={`space-x-4 flex`}>
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-500"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-500"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
