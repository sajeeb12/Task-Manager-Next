"use client"

import { Task } from "../types/task"

interface Props {
    task: Task,
    toggleTask: (id: string) => void,
    deleteTask: (id: string) => void,
}
export default function TaskItem({ task, toggleTask, deleteTask }: Props) {
    return (
        <div className="flex items-center gap-2">
            <input type="checkbox" checked={task.status === 'completed'} onChange={() => toggleTask(task.id)} />
            <span style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )

}