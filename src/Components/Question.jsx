import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.correct
      ? 'border: 2px solid green; color: darkgreen;' // Green for correct answers
      : props.correct === false
      ? 'border: 2px solid red; color: red;' // Red for incorrect answers
      : ''};
`;

const CorrectAnswer = styled.p`
  font-size: 18px;
  color: green;
  margin-top: 10px;
`;

const Question = ({
  questionText,
  options,
  questionId,
  selectedOption,
  onChange,
  correctness,
  submitted,
  correctAnswers
}) => {
  const isCorrect = submitted ? correctness[questionId] : null; // Check correctness after submission

  return (
    <QuestionContainer correct={isCorrect}>
      <p>{questionText}</p>
      {options.map((option, index) => (
        <Form.Check
          key={index}
          type="radio"
          label={option}
          name={questionId}
          value={option}
          checked={selectedOption === option}
          onChange={(e) => onChange(questionId, e.target.value)}
        />
      ))}
      {isCorrect === false && (
        <CorrectAnswer>The correct answer is: {correctAnswers[questionId]}</CorrectAnswer>
      )}
    </QuestionContainer>
  );
};

export default Question;