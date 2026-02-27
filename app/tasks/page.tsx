"use client";
import { useEffect, useState } from "react";
import { filter, Task } from "./types/task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [filter, setFilter] = useState<filter>('all')

    useEffect(() => {
        const storedTask = localStorage.getItem('tasks')
        if (storedTask) {
            setTasks(JSON.parse(storedTask))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title: string) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            status: 'pending'
        }
        setTasks((prev) => [...prev, newTask])
    }

    const toggleTask = (id: string) => {
        setTasks((prev) => prev.map((task) => task.id === id ?
            { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
            : task
        ))
    }

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== id))
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true
        if (filter === 'pending') return task.status === 'pending'
        if (filter === 'completed') return task.status === 'completed'
        return true
    })
    return (
        <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">Task Manager 🚀</h1>

            <TaskForm addTask={addTask} />

            <div className="flex gap-2 my-4">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("pending")}>Active</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
            </div>

            <TaskList
                tasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        </div>
    );
}