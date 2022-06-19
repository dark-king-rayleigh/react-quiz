import { Question } from "../types";

export const questions: Question[] = [
  {
    question: " What data type is not supported by JavaScript?",
    answer: "int",
    options: ["undefined", "null", "string", "int"],
    category: "JS",
    level: "easy",
  },
  {
    question: " Is JavaScript a case-sensitive language?",
    answer: "Yes",
    options: ["Yes", "No"],
    category: "JS",
    level: "easy",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: "script",
    options: ["script", "js", "javascript", "source"],
    category: "JS",
    level: "easy",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answer: "Both the <head> and <body> sections are correct",
    options: [
      "The <head> section",
      "The <body> section",
      "Both the <head> and <body> sections are correct",
    ],
    category: "JS",
    level: "easy",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answer: "alert('Hello World');",
    options: [
      "alert('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alertBox('Hello World');",
    ],
    category: "JS",
    level: "easy",
  },
  {
    question: "How do you create a function in JavaScript?",
    answer: "function myFunction()",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "function myFunction = function()",
    ],
    category: "JS",
    level: "easy",
  },
];
