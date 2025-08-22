import './App.css'
import RegistrationForm from './Components/RegistrationForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuizProvider } from './Context/QuizContext';
import { TimerProvider } from './Context/TimerContext';
function App() {
  return (
    <>
      <TimerProvider>
        <QuizProvider>
          <RegistrationForm />
        </QuizProvider>
      </TimerProvider>

    </>
  )
}

export default App
