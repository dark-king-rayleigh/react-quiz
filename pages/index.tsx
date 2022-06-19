import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Questions from "../components/Questions";
import Result from "../components/Result";
import { questions } from "../data/questions";
import { Question } from "../types";

const Home: NextPage = () => {
  const [quizQuestions, setQuizQuestions] = useState<Question[] | []>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // randomize questions
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffledQuestions);
  }, [showResult]);

  return (
    <>
      <Head>
        <title>Quiz App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full h-screen flex-col items-center justify-center text-center bg-secondary m-0 p-0">
        {!showResult ? (
          <Questions
            question={quizQuestions[questionIndex]}
            questionIndex={questionIndex}
            onSetQuestionIndex={setQuestionIndex}
            onSetShowResult={setShowResult}
            onSetScore={setScore}
          />
        ) : (
          <Result
            score={score}
            onSetScore={setScore}
            onSetShowResult={setShowResult}
            onSetQuestionIndex={setQuestionIndex}
          />
        )}
      </main>
    </>
  );
};

export default Home;
