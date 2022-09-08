import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}
const countStorage = localStorage.getItem("count");
const initialState: CounterState = {
  value: countStorage ? stringToNumberFormat(countStorage) : 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setCount: (state) => {
      localStorage.setItem("count", state.value.toString());
    },
    resetCount: (state) => {
      localStorage.setItem("count", "1");
      state.value = 1;
    },
  },
});

export const { increment, decrement, incrementByAmount, setCount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;

export function stringToNumberFormat(value: string): number {
  return parseFloat(value.replace(/[.]/g, "").replace(",", "."));
}
