import CreateTaskForm from "@/components/CreateTaskForm";
import { useEffect, useState } from "react";
import { Task } from "@/entities/Task";
import TaskList from "@/components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await fetch("http://192.168.1.100:8181/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const taskList = await res.json();
    setTasks(taskList);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg">
        <CreateTaskForm tasks={tasks} setTasks={setTasks}></CreateTaskForm>
      </div>
      <div className="w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg">
        <TaskList tasks={tasks}></TaskList>
      </div>
    </main>
  );
}
