import React from "react";
import styled from "styled-components";
import { useTimer } from "../Context/TimerContext";

const TimerDisplay = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Timer = () => {
  const { timeLeft } = useTimer();
  return <TimerDisplay>Time Left: {timeLeft}s</TimerDisplay>;
};

export default Timer;
