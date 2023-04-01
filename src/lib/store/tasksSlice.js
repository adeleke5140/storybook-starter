import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
        state.error = "Something went wrong";
        state.tasks = [];
      });
  },
});

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=1"
  );
  const data = await response.json();
  const result = data.map((task) => ({
    id: `${task.id}`,
    title: task.title,
    state: task.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
  }));

  return result;
});

export const { updateTaskState } = TasksSlice.actions;

export const taskReducer = TasksSlice.reducer;
