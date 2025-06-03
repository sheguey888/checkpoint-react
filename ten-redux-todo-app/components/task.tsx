"use client"

import { useState } from "react"
import { useAppDispatch } from "../hooks/redux"
import { toggleTask, editTask, deleteTask } from "../store/tasksSlice"
import type { Task as TaskType } from "../store/tasksSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Edit2, Trash2, Check, X } from "lucide-react"

interface TaskProps {
  task: TaskType
}

export default function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editDescription, setEditDescription] = useState(task.description)
  const dispatch = useAppDispatch()

  const handleToggle = () => {
    dispatch(toggleTask(task.id))
  }

  const handleEdit = () => {
    if (editDescription.trim() && editDescription !== task.description) {
      dispatch(editTask({ id: task.id, description: editDescription.trim() }))
    }
    setIsEditing(false)
    setEditDescription(task.description)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditDescription(task.description)
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  return (
    <Card className={`mb-3 transition-all duration-200 ${task.isDone ? "opacity-75" : ""}`}>
      <CardContent className="pt-4">
        <div className="flex items-center gap-3">
          <Checkbox checked={task.isDone} onCheckedChange={handleToggle} className="mt-1" />

          {isEditing ? (
            <div className="flex-1 flex gap-2">
              <Input
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEdit()
                  if (e.key === "Escape") handleCancelEdit()
                }}
                className="flex-1"
                autoFocus
              />
              <Button size="sm" onClick={handleEdit} variant="outline">
                <Check className="h-4 w-4" />
              </Button>
              <Button size="sm" onClick={handleCancelEdit} variant="outline">
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <span className={`flex-1 ${task.isDone ? "line-through text-muted-foreground" : ""}`}>
                {task.description}
              </span>
              <div className="flex gap-1">
                <Button size="sm" variant="ghost" onClick={() => setIsEditing(true)} className="h-8 w-8 p-0">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleDelete}
                  className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
