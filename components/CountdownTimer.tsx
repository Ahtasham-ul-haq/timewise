"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const CountdownTimer = ({ timer }: { timer: number }) => {
  const pathname = usePathname();
  const initialTime = timer; // Initial time in seconds (e.g., 10 minutes)
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(intervalRef.current!);
    }
    return () => clearInterval(intervalRef.current!);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    clearInterval(intervalRef.current!);
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(intervalRef.current!);
    setTimeLeft(initialTime);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="group flex flex-col items-center p-4 rounded-lg shadow-md border border-gray-500">
      <div className="text-4xl font-mono mb-4">{formatTime(timeLeft)}</div>
      <div
        className={`space-x-4 hidden group-hover:flex ${
          pathname === "/dashboard" ? "!flex" : ""
        }`}
      >
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleStart}
          disabled={isActive}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleStop}
          disabled={!isActive}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
