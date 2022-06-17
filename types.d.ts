export interface Question {
  category: string;
  level: "easy" | "medium" | "hard";
  question: string;
  answer: string;
  options: string[];
}
