"use client"
import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface Props {
    tasks: Task[];
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
}

export default function TaskList({ tasks, toggleTask, deleteTask }: Props) {
    return (
        <div className="space-y-2">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
}