"use client"

import { useAppSelector, useAppDispatch } from "../hooks/redux"
import { setFilter } from "../store/tasksSlice"
import Task from "./task"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ListTask() {
  const { tasks, filter } = useAppSelector((state) => state.tasks)
  const dispatch = useAppDispatch()

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone
    if (filter === "notDone") return !task.isDone
    return true
  })

  const completedCount = tasks.filter((task) => task.isDone).length
  const totalCount = tasks.length

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <CardTitle>Tasks</CardTitle>
            <Badge variant="secondary">
              {completedCount}/{totalCount} completed
            </Badge>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button
              size="sm"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => dispatch(setFilter("all"))}
            >
              All ({tasks.length})
            </Button>
            <Button
              size="sm"
              variant={filter === "notDone" ? "default" : "outline"}
              onClick={() => dispatch(setFilter("notDone"))}
            >
              Active ({tasks.filter((t) => !t.isDone).length})
            </Button>
            <Button
              size="sm"
              variant={filter === "done" ? "default" : "outline"}
              onClick={() => dispatch(setFilter("done"))}
            >
              Completed ({completedCount})
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            {filter === "all" && "No tasks yet. Add one above!"}
            {filter === "done" && "No completed tasks yet."}
            {filter === "notDone" && "No active tasks. Great job!"}
          </div>
        ) : (
          <div className="space-y-0">
            {filteredTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
