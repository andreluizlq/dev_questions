import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

type DataFormattedProps = {
  incorrect_answers: string[];
  question: string;
  answers: string[];
  correct_answer: string;
};

type ItemResponse = {
  incorrect_answers: string[];
  question: string;
  correct_answer: string;
};

export const fetchQuestions = createAsyncThunk<
  DataFormattedProps[] | undefined,
  number
>("questions/fetchQuestions", async (count) => {
  try {
    const response = await API.get(`?amount=${count}`);

    const dataFormatted: DataFormattedProps[] = response.data.results.map(
      (item: ItemResponse) => {
        return {
          incorrect_answers: item.incorrect_answers,
          question: item.question,
          answers: [item.correct_answer, ...item.incorrect_answers].sort(),
          correct_answer: item.correct_answer,
        };
      }
    );
    return dataFormatted;
  } catch (error) {
    console.log(error);
  }
});
