import { createSlice } from "@reduxjs/toolkit";

const defaultTask = [
  { id: 1, title: "Something", state: "TASK_INBOX" },
  { id: 2, title: "Something more", state: "TASK_INBOX" },
  { id: 3, title: "Something else", state: "TASK_INBOX" },
  { id: 4, title: "Something again", state: "TASK_INBOX" },
  { id: 5, title: "Go to bed soon", state: "TASK_ARCHIVED" },
  { id: 6, title: "Call Taiwo tomorrow", state: "TASK_PINNED" },
];

const TaskBoxData = {
  tasks: defaultTask,
  status: "idle",
  error: null,
};

const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;

export const taskReducer = TasksSlice.reducer;
