import { createSlice } from "@reduxjs/toolkit";

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
