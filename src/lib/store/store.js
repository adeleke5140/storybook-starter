import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./tasksSlice";

const store = configureStore({
  reducer: {
    taskbox: taskReducer,
  },
});

export default store;
