import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export interface questionsState {
  value: number;
}
const initialState: questionsState = {
  value: 1,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = questionsSlice.actions;

export default questionsSlice.reducer;

export const fetchQuestions = createAsyncThunk<
  DataFormattedProps[] | undefined,
  number
>("questions/fetchQuestions", async (count) => {
  try {
    const response = await API.get(`?amount=${count}`);

    let dataFormatted = [] as DataFormattedProps[];

    if (response.status === 200) {
      response.data.results.map((item: ItemResponse) => {
        return dataFormatted.push({
          incorrect_answers: item.incorrect_answers,
          question: item.question,
          answers: [item.correct_answer, ...item.incorrect_answers].sort(),
          correct_answer: item.correct_answer,
        });
      });
    }
    return dataFormatted;
  } catch (error) {
    console.log(error);
  }
});
