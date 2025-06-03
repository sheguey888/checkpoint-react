import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Task {
  id: string
  description: string
  isDone: boolean
}

interface TasksState {
  tasks: Task[]
  filter: "all" | "done" | "notDone"
}

const initialState: TasksState = {
  tasks: [
    { id: "1", description: "Acheter le monton pour l'Eid", isDone: false },
    { id: "2", description: "Recuperer mon boubou chez le tailleur", isDone: true },
    { id: "3", description: "Acheter des babouches", isDone: false },
  ],
  filter: "all",
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ description: string }>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        description: action.payload.description,
        isDone: false,
      }
      state.tasks.push(newTask)
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.isDone = !task.isDone
      }
    },
    editTask: (state, action: PayloadAction<{ id: string; description: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id)
      if (task) {
        task.description = action.payload.description
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<"all" | "done" | "notDone">) => {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTask, editTask, deleteTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer
