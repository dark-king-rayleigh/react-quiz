import React from "react";
import { questions } from "../../data/questions";

const Result: React.FC<{
  score: number;
  onSetScore: Function;
  onSetShowResult: Function;
  onSetQuestionIndex: Function;
}> = ({ score, onSetScore, onSetShowResult, onSetQuestionIndex }) => {
  return (
    <div className="text-xl">
      <h1>{score < 5 ? "Need more pratice" : "Congralutions !!!"}</h1>
      <h2>
        You scored {score} out of {questions.length}
      </h2>
      <button
        className="button mt-4"
        onClick={() => {
          onSetScore(0);
          onSetShowResult(false);
          onSetQuestionIndex(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
