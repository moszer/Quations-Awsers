import React, { useEffect, useState } from "react";
import MyStopwatch from "./MyStopwatch";
import TimerDaisy from "./TimerDaisy";
import questionsData from './questions.json'; 
import { useRecoilValue } from "recoil";
import { textState } from './atoms';
import Swal from "sweetalert2";

export default function App() {
  const [timer, setTimer] = useState(10); // State to hold the timer
  const [stateTimer, setStateTimer] = useState("stop"); // State to manage start/stop
  const [num_questionsData, setNumQuestionsData] = useState(1);
  const TimerValue = useRecoilValue(textState);

  useEffect(() => {
    console.log(TimerValue);
    if(TimerValue === 0){
      setStateTimer("stop");

      Swal.fire({
        title: "ตอบ " + handleCheckAnswer(),
        text: "__________________________",
        icon: "success"
      }).then((result) => {
        handleNextQuestion();
      });
    }
  }, [TimerValue])
  
  const handleStart = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10); // 10 minutes timer
    setTimer(time);
    setStateTimer("start");
  };

  const handleStop = () => {
    setStateTimer("stop");
  };

  const handleNextQuestion = () => {
    setNumQuestionsData(prevNum => (prevNum >= 10 ? 1 : prevNum + 1));
    setStateTimer("stop");
  };
  const handleBackQuestion = () => {
    setNumQuestionsData(prevNum => (prevNum >= 0 ? 10 : prevNum - 1));
    setStateTimer("stop");
  };

  const filteredQuestion = questionsData.questions.filter(question => question.question_number === num_questionsData)[0];

  const handleCheckAnswer = () => {
    const currentQuestion = questionsData.questions.find(question => question.question_number === num_questionsData);
    console.log(`Correct Answer: ${currentQuestion.choices[currentQuestion.answer]}`);
    return currentQuestion.answer + " " +currentQuestion.choices[currentQuestion.answer]
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        {stateTimer !== "stop" ? (
          <MyStopwatch expiryTimestamp={timer} State={stateTimer} />
        ) : (
          <div className="p-20" style={{ textAlign: 'center' }}>
            <TimerDaisy seccond={timer} min={"0"} hours={"0"} />
          </div>
        )}
         <div>
        

        {stateTimer === "start" && TimerValue !== 0 ? (
          <div key={filteredQuestion.question_number} className="mb-4 pb-10">
          <h3 className="pb-10">{num_questionsData +" "+ filteredQuestion.question}</h3>
          <div className="flex flex-row gap-4">
            {Object.entries(filteredQuestion.choices).map(([choiceNumber, choice]) => (
              <button key={choiceNumber} onClick={() => console.log("clicked")}>
                <div className="bg-pink-200 w-64 h-64 flex justify-center items-center">
                  <p className="text-red-400">{choiceNumber}.{choice}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        ) : (
          <h3 className="pb-10">{num_questionsData +" "+ filteredQuestion.question}</h3>
        )}

      </div>
        <div className="flex pt-5 gap-4">
          <button className="btn btn-success w-40" onClick={handleBackQuestion}>
            Back Answer
          </button>
          {stateTimer === "stop" ? (
            <button className="btn btn-success w-40" onClick={handleStart}>
              Start
            </button>
          ) : (
            <button className="btn btn-warning w-40" onClick={handleStop}>
            Stop
          </button>
          )}
          <button className="btn btn-success w-40" onClick={handleNextQuestion}>
            Next Answer
          </button>
        </div>
      </div>
    </>
  );
}
