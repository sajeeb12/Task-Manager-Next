"use client"

import { useState } from "react"

interface Props {
    addTask: (title: string) => void
}
export default function TaskForm({ addTask }: Props) {
    const [title, setTitle] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            addTask(title);
            setTitle('')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                className="border p-2 flex-1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task..."
            />
            <button className="bg-blue-500 text-white px-4">Add</button>
        </form>
    );
}