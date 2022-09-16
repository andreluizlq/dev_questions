import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../services/api";
import { RootState } from "../store";

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
  questions?: [];
}
const initialState: questionsState = {
  value: 1,
};

// ------------------------------------------------------------------
// Não estou usando
// ------------------------------------------------------------------
export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, { payload }) => {});
  },
});
export default questionsSlice.reducer;
// ------------------------------------------------------------------

export const fetchQuestions = createAsyncThunk<
  DataFormattedProps[] | undefined,
  void,
  { state: RootState }
>("questions/fetchQuestions", async (_, { getState }) => {
  try {
    const { counter } = getState();
    const response = await API.get(`?amount=${counter.value}`);

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
