import React, { useEffect, useState } from "react";
import Header from "../../components/Header/index";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import {
  QuestionsBlock,
  Image,
  AlternativesBlock,
  QuestionsContent,
  Questions,
  AlternativeButton,
  Loading,
  Button,
} from "./styles";
import { fetchQuestions } from "../../redux/slices/questions";
import { unwrapResult } from "@reduxjs/toolkit";

type DataFormattedProps = {
  incorrect_answers: string[];
  question: string;
  answers: string[];
  correct_answer: string;
};

type SelectedAnswerProps = {
  selectedQuestion: DataFormattedProps;
  isCorrect: boolean;
  currentAnswer: String;
};

const PagesQuestions: React.FC = () => {
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>();
  const [listQuestions, setListQuestions] = useState<DataFormattedProps[]>([]);
  const dispatch: AppDispatch = useDispatch();

  const [answers, setAnswers] = useState<SelectedAnswerProps[]>([]);

  useEffect(() => {
    dispatch(fetchQuestions())
      .then(unwrapResult)
      .then((result) => {
        if (result) setListQuestions(result);
      });
  }, [dispatch]);

  function goToNextQuestion() {
    if (currentAnswer) {
      const isCorrect =
        currentAnswer === listQuestions[currentQuestion].correct_answer;
      const answer: SelectedAnswerProps = {
        selectedQuestion: listQuestions[currentQuestion],
        isCorrect,
        currentAnswer,
      };

      if (currentQuestion + 1 === listQuestions.length) {
        const reports = localStorage.getItem("reports");
        const final = JSON.stringify([...answers, answer]);

        if (reports) {
          localStorage.setItem("reports", `${reports}###${final}`);
        } else {
          localStorage.setItem("reports", final);
        }

        return history.push("/");
      }

      setAnswers([...answers, answer]);
      setCurrentQuestion(currentQuestion + 1);

      setCurrentAnswer("");
      setSelectedAnswerIndex(undefined);
    } else {
      alert("select a question");
    }
  }

  return (
    <>
      <Header />
      <QuestionsBlock>
        <QuestionsContent>
          {listQuestions.length ? (
            <AlternativesBlock>
              <LinearProgress
                value={
                  currentQuestion
                    ? Math.ceil(100 / listQuestions.length)
                    : currentQuestion
                }
                id={"linear"}
                variant="determinate"
              />
              <Questions>{listQuestions[currentQuestion].question}</Questions>

              <div>
                {listQuestions[currentQuestion].answers.map((answer, index) => {
                  return (
                    <AlternativeButton
                      key={index}
                      active={selectedAnswerIndex === index}
                      onClick={() => {
                        setCurrentAnswer(answer);
                        setSelectedAnswerIndex(index);
                      }}
                    >
                      {answer}
                    </AlternativeButton>
                  );
                })}
              </div>

              <Button onClick={goToNextQuestion}>Next</Button>
            </AlternativesBlock>
          ) : (
            <Loading>Loading...</Loading>
          )}
        </QuestionsContent>
      </QuestionsBlock>

      <Image src="/vectorDown.svg" alt="Vector Down" />
    </>
  );
};

export default PagesQuestions;
