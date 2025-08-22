import React from "react";
import Question from "./Question";

const QuestionData = ({ selectedAnswers, onAnswerChange,
  correctness, submitted,correctAnswers }) => {
  return (
    <>
      <Question
        questionId="q1"
        questionText="1. The animal which uses sounds as its 'eyes' is -"
        options={["Dog", "Cat", "Snake", "Bat"]}
        selectedOption={selectedAnswers.q1}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted} 
        correctAnswers={correctAnswers}

      />
      <Question
        questionId="q2"
        questionText="2. The fastest land animal is -"
        options={["Lion", "Cheetah", "Elephant", "Tiger"]}
        selectedOption={selectedAnswers.q2}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted} 
        correctAnswers={correctAnswers}
      />
      <Question
        questionId="q3"
        questionText="3. Which of these is the largest planet in our solar system?"
        options={["Earth", "Mars", "Jupiter", "Saturn"]}
        selectedOption={selectedAnswers.q3}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted}
        correctAnswers={correctAnswers}

      />
      <Question
        questionId="q4"
        questionText="4. What is the chemical formula of water?"
        options={["H2O", "O2", "H3O", "HO"]}
        selectedOption={selectedAnswers.q4}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted}
        correctAnswers={correctAnswers}

      />
      <Question
        questionId="q5"
        questionText="5. What is the largest ocean on Earth?"
        options={["Atlantic", "Indian", "Pacific", "Arctic"]}
        selectedOption={selectedAnswers.q5}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted}
        correctAnswers={correctAnswers}

      />
      <Question
        questionId="q6"
        questionText="6. Which element has the chemical symbol 'H'?"
        options={["Hydrogen", "Helium", "Ozone", "Oxygenium"]}
        selectedOption={selectedAnswers.q6}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted}
        correctAnswers={correctAnswers}

      />
      <Question
        questionId="q7"
        questionText="7. What is the chemical symbol for gold?"
        options={["Ag", "Au", "O2", "H2O"]}
        selectedOption={selectedAnswers.q7}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted}
        correctAnswers={correctAnswers}

      />
      <Question
        questionId="q8"
        questionText="8.What is 2+2?"
        options={["5", "4", "6", "3"]}
        selectedOption={selectedAnswers.q8}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted}
        correctAnswers={correctAnswers}

      />
      <Question
        questionId="q9"
        questionText="9. What is the main source of energy for the Earth?"
        options={["Earth", "Sun", "Moon", "Saturn"]}
        selectedOption={selectedAnswers.q9}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted}
        correctAnswers={correctAnswers}

      />
      <Question
        questionId="q10"
        questionText="10. How many colors are there in a rainbow?"
        options={["9", "6", "5", "7"]}
        selectedOption={selectedAnswers.q10}
        onChange={onAnswerChange}
        correctness={correctness}
        submitted={submitted}
        correctAnswers={correctAnswers}

      />
    </>
  );
};

export default QuestionData;
