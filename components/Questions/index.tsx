import React from "react";
import { Question } from "../../types";

const Questions: React.FC<{ question: Question; questionIndex: number }> = ({
  question,
  questionIndex,
}) => {
  const [selected, setSelected] = React.useState<string>("");
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
                className={`button m-2 w-full border-4 rounded-3xl border-secondary disabled:bg-gray-400 disabled:cursor-not-allowed  ${
                  selected
                    ? question.answer === opt
                      ? "!bg-green-600 !border-green-600 !hover:bg-green-600"
                      : "bg-secondary"
                    : ""
                }
                
                ${
                  selected && selected === opt && question.answer !== opt
                    ? "!bg-red-500 border-red-500 hover:bg-red-500"
                    : ""
                }

                `}
                onClick={() => {
                  setSelected(opt);
                }}
                disabled={selected.length > 1}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-4 flex gap-4 justify-end">
        <button className="button ">QUIT</button>
        <button className="button ">NEXT</button>
      </div>
    </div>
  );
};

export default Questions;
