import React, { createContext,useEffect, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  
  return (
    <QuizContext.Provider value={{ selectedAnswers, setSelectedAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => {
  return useContext(QuizContext);
};
