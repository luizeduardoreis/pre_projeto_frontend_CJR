import { Task } from "@/entities/Task";

interface TaskListItemProps {
    task: Task;
}

export default function TaskListItem({ task }: TaskListItemProps) {
    return (
        <li className="h-10">{task.name}</li>
    );
}