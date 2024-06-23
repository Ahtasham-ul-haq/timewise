"use client";

import CountdownTimer from "@/components/CountdownTimer";
import { useState, useEffect, useRef } from "react";

const CountdownTimerPage = () => {
  const [timeLeft, setTimeLeft] = useState<number>(600); // Initial time in seconds (e.g., 10 minutes)
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

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Countdown Timer</h1>
      <div className="grid grid-cols-2 grid-rows-1 gap-4 p-4">
        <CountdownTimer timer={500} />
        <CountdownTimer timer={500} />
        <CountdownTimer timer={500} />
      </div>
    </div>
  );
};

export default CountdownTimerPage;
