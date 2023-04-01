import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./store";
const store = configureStore({
  reducer: {
    taskbox: taskReducer,
  },
});

export default store;
