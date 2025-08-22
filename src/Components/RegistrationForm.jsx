import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Navbar from "./Navbar";
import McqForm from "./McqForm";
import { useTimer } from "../Context/TimerContext";
const Container = styled.div`
  padding-top: 2%;
  width: 60%;
  margin: auto;
  gap: 10px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
`;

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [step, setStep] = useState(1); // Track current step
  const { startTimer } = useTimer();
  const [submitted,setSubmitted] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });


  //onchange={handledata} in input field
  const handleData = (eve) => {
    const { name, value } = eve.target;
    if (name == "firstName") setFirstName(value);
    if (name == "lastName") setLastName(value);
    if (name == "email") setEmail(value);
  };

  const validateData = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
    };

    const nameRegrex = /^[A-Za-z]+\.?[A-Za-z]*$/;
    if (!firstName) {
      newErrors.firstName = "First name is required!";
      isValid = false;
    } else if (!nameRegrex.test(firstName)) {
      newErrors.firstName = "First name should only contain alphabets";
      isValid = false;
    }

    if (!lastName) {
      newErrors.lastName = "Last Name is required!";
      isValid = false;
    } else if (!nameRegrex.test(lastName)) {
      newErrors.lastName = "last name should only contain alphabets";
      isValid = false;
    }
    if (firstName && lastName && firstName.toLowerCase() == lastName.toLowerCase()) {
      newErrors.firstName = "First and Last name should not be the same";
      newErrors.lastName = "First and Last name should not be the same";
      isValid = false;
    }

    const emailRegrex = /\S+@\S+\.\S+/;
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegrex.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  //we passed a function handleSubmit on next button
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateData()) {
      startTimer();
      setStep(2); // Move to MCQ form
      console.log("Form is valid!");
    } else {
      console.log("Form has errors.");
    }
  };


  return (
    <div>
      <Navbar step={step} setStep={setStep} submitted={submitted}>
      </Navbar>
      <Container>
        {step === 1 && (
          <form>
            <Heading heading="Register Now" />
            <InputField
              label="First Name"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleData}
              placeholder="Enter Your First Name"
              error={errors.firstName}
            />
            <InputField
              label="Last Name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleData}
              placeholder="Enter Your Last Name"
              error={errors.lastName}
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleData}
              placeholder="Enter Your Email"
              error={errors.email}
            />
            <Button props_text="Next" onClick={handleSubmit} />
          </form>
        )}

        {step === 2 && (
          <McqForm submitted={submitted} setSubmitted={setSubmitted}  />
        )}
      </Container>
    </div>
  );
};

export default RegistrationForm;

