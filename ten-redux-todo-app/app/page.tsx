"use client"

import { Provider } from "react-redux"
import { store } from "../store/store"
import AddTask from "../components/add-task"
import ListTask from "../components/list-task"

function TodoApp() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Todo App</h1>
        </div>

        <AddTask />
        <ListTask />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}
