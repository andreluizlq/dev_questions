import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import questionsReducer from "./slices/questions";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
