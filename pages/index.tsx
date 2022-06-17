import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Questions from "../components/Questions";
import Result from "../components/Result";
import { questions } from "../data/questions";

const Home: NextPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Quiz App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full h-screen flex-col items-center justify-center text-center bg-secondary m-0 p-0">
        <Questions
          question={questions[questionIndex]}
          questionIndex={questionIndex}
        />
        {/* <Result /> */}
      </main>
    </>
  );
};

export default Home;
