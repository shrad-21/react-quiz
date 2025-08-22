import React, { useState, useEffect, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import QuestionData from './QuestionData';
import Button from './Button';
import Heading from './Heading';
import Popup from './Popup';
import { useQuiz } from '../Context/QuizContext';
import { useTimer } from "../Context/TimerContext";
const correctAnswers = {
  q1: 'Bat',
  q2: 'Cheetah',
  q3: 'Jupiter',
  q4: 'H2O',
  q5: 'Pacific',
  q6: 'Hydrogen',
  q7: 'Au',
  q8: '4',
  q9: 'Sun',
  q10: '7',
};

const TOTAL_QUESTIONS = 10;

const McqForm = ({submitted, setSubmitted}) => {
  const { selectedAnswers, setSelectedAnswers } = useQuiz();              //from QuizContext
  const [showUnansweredModal, setShowUnansweredModal] = useState(false);  //when user didnt attend every question and click submit button
  const [showSubmittedModal, setShowSubmittedModal] = useState(false);    //user attend every question and clicks submit
  const [correctness, setCorrectness] = useState({});
  const { stopTimer, setHandleSubmit } = useTimer();

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: answer,
    }));
  };

  // Use useCallback to prevent infinite loop
  const handleSubmit = useCallback(() => {
    stopTimer();

    const newCorrectness = {};
    for (let questionId in correctAnswers) {
      newCorrectness[questionId] = selectedAnswers[questionId] === correctAnswers[questionId];
    }

    setCorrectness(newCorrectness);
    setSubmitted(true);
    setShowSubmittedModal(true);
  }, [stopTimer, selectedAnswers,setSubmitted]);

  // Stable useEffect
  useEffect(() => {
    setHandleSubmit(() => handleSubmit);
  }, []); 

  const handleManualSubmit = (e) => {
    e.preventDefault();

    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < TOTAL_QUESTIONS) {
      setShowUnansweredModal(true);
    } else {
      stopTimer();
      handleSubmit();
    }
  };

  return (
    <>

      <Heading heading="Multiple Choice Questions" />

      <Form onSubmit={handleManualSubmit}>
        <QuestionData
          selectedAnswers={selectedAnswers}
          onAnswerChange={handleAnswerChange}
          correctness={correctness}
          submitted={submitted}
          correctAnswers={correctAnswers}
        />
        {!submitted && <Button props_text="Submit" type="submit" />}
      </Form>

      {/* Modal for Unanswered Questions */}
      <Popup
        show={showUnansweredModal}
        handleClose={() => setShowUnansweredModal(false)}
        title="Incomplete Submission"
        message="Please answer all questions before submitting."
      />

      {/* Modal for Successful Submission */}
      <Popup
        show={showSubmittedModal}
        handleClose={() => setShowSubmittedModal(false)}
        title="Success!"
        message="Form Submitted Successfully!"
      />
    </>
  );
};

export default McqForm;

