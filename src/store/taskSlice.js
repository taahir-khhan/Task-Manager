import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.log("Error loading from localStorage", error);
    return [];
  }
};

const initialState = {
  tasks: loadFromLocalStorage(),
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
      };
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id != action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateStatus: (state, action) => {
      state.tasks = state.tasks.map((item) =>
        item.id === action.payload.id
          ? { ...item, status: action.payload.status }
          : item
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    sortTasks: (state, action) => {},
  },
});

export const { addTask, deleteTask, updateStatus } = taskSlice.actions;
export default taskSlice.reducer;
