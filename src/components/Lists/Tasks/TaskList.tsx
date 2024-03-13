import { Task } from "@/entities/Task";
import TaskListItem from "./TaskListItem";
import { Dispatch, SetStateAction } from "react";
import Tag from "@/entities/Tag";

interface TaskListProps {
  tasks: Task[];
  tasksToUpdate: Set<Task>;
  setTasks: Dispatch<SetStateAction<Task[]>>;
  tags: Tag[];
}

export default function TaskList({
  tasks,
  tasksToUpdate,
  setTasks,
  tags,
}: TaskListProps) {
  const handleSave = async () => {
    tasksToUpdate.forEach(async (task) => {
      const res = await fetch(`http://192.168.1.100:8181/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    });
  };

  const deleteDoneTasks = async () => {
    const res = await fetch("http://192.168.1.100:8181/tasks/clear-done", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.log("Error deleting done tasks.")
    }
    window.location.reload();
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <ul className="h-40 w-auto overflow-auto scrollbar-stylish">
        {tasks.map((task) => {
          return (
            <TaskListItem
              setTasks={setTasks}
              key={task.id}
              tasksToUpdate={tasksToUpdate}
              tags={tags}
              task={task}
            />
          );
        })}
      </ul>
      <div className="flex gap-4 items-center">
        <button
          onClick={handleSave}
          className="bg-transparent w-40 hover:bg-rose-400 text-rose-400 font-semibold hover:text-white py-2 border border-rose-200 hover:border-transparent rounded"
        >
          Salvar
        </button>
        <button
          onClick={deleteDoneTasks}
          className="bg-transparent w-40 hover:bg-red-800 text-red-800 font-semibold hover:text-white py-2 border border-red-800 hover:border-transparent rounded"
        >
          Apagar concluídas
        </button>
      </div>
    </div>
  );
}
