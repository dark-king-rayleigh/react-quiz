import React from "react";
import { questions } from "../../data/questions";
import { Question } from "../../types";

interface Props {
  question: Question;
  questionIndex: number;
  onSetQuestionIndex: Function;
  onSetShowResult: Function;
  onSetScore: Function;
}

const Questions = ({
  question,
  questionIndex,
  onSetQuestionIndex,
  onSetShowResult,
  onSetScore,
}: Props) => {
  const [selected, setSelected] = React.useState<string>("");

  const nextQuestionHandler = () => {
    if (selected) {
      setSelected("");
      onSetQuestionIndex((prev: number) => prev + 1);
    }
  };

  const selectHandler = (answer: string, isCorrect: boolean) => {
    setSelected(answer);
    if (isCorrect) {
      onSetScore((prev: number) => prev + 1);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col gap-y-6 md:flex-row bg-primary text-white font-bold p-4 px-6 rounded-xl">
        <div className="md:w-60  flex-1 text-center md:text-left ">
          <h1 className="text-2xl tracking-wider first-letter:text-3xl mb-4">
            Question {questionIndex + 1}
            <span className="text-sm">/{questions.length}</span>
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
                onClick={() =>
                  selectHandler(opt, question.answer === opt ? true : false)
                }
                disabled={selected.length > 1}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-4 flex gap-4 justify-end">
        {questionIndex + 1 < questions.length ? (
          <>
            <button className="button" onClick={() => onSetShowResult(true)}>
              QUIT
            </button>
            <button
              className="button disabled:bg-gray-400"
              onClick={nextQuestionHandler}
              disabled={selected.length === 0}
            >
              NEXT
            </button>
          </>
        ) : (
          <button
            className="button disabled:bg-gray-400"
            onClick={() => onSetShowResult(true)}
            disabled={selected.length === 0}
          >
            Show Results
          </button>
        )}
      </div>
    </div>
  );
};

export default Questions;
