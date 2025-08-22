import React, { createContext, useContext, useState, useEffect } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [handleSubmit, setHandleSubmit] = useState(null);

  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && handleSubmit) {
      setIsTimerRunning(false);
      handleSubmit(); // Auto-submit when time reaches 00:00
    }

    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft, handleSubmit]);

  const startTimer = () => setIsTimerRunning(true);
  const stopTimer = () => setIsTimerRunning(false);
  const resetTimer = () => {
    setTimeLeft(120); // Reset to initial value
    setIsTimerRunning(true);
  };

  // Function to format time as MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <TimerContext.Provider value={{ timeLeft: formatTime(timeLeft), startTimer, stopTimer, resetTimer, setHandleSubmit }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
