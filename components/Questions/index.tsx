import React from "react";
import { Question } from "../../types";

const Questions: React.FC<{ question: Question; questionIndex: number }> = ({
  question,
  questionIndex,
}) => {
  return (
    <div className="">
      <div className="flex flex-col gap-y-6 md:flex-row bg-primary text-white font-bold p-4 px-6 rounded-xl">
        <div className="md:w-60  flex-1 text-center md:text-left ">
          <h1 className="text-2xl tracking-wider first-letter:text-3xl mb-4">
            Question {questionIndex + 1}
            <span className="text-sm">/10</span>
          </h1>
          <h2>{question?.question}</h2>
        </div>
        <div className="flex-1">
          {question?.options.map((opt, index) => {
            return (
              <button
                key={index}
                className="px-4 py-2 m-2 w-full border-4 rounded-3xl border-secondary hover:bg-secondary transition-all duration-200"
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-4 flex gap-4 justify-end">
        <button className="button hover:bg-secondary transition-all duration-300">
          QUIT
        </button>
        <button className="button hover:bg-secondary transition-all duration-300">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Questions;
