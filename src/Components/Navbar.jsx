import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import Timer from "./Timer";
import { useTimer } from "../Context/TimerContext";
const NavbarContainer = styled.nav`
  background-color: #c097c0;
  width: 60%;
  align-items: center;
  padding: 7px;
  text-align: center;
  color: black;
  margin: auto;
  border-radius: 5px;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;


const Navbar = ({ step, setStep,submitted}) => {
  const { stopTimer } = useTimer();
  const handleBack = () => {
    stopTimer();
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <>
      <NavbarContainer>
        {step > 1 && !submitted ? (
          <>
            <Button props_text="Back" onClick={handleBack} color="white" /> 
       <Timer/>
       </>
        ) : (
          <Heading heading="MultiQuiz Form" />  //false
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;


