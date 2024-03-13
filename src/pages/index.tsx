import CreateTaskForm from "@/components/Forms/CreateTaskForm";
import { useEffect, useState } from "react";
import { Task } from "@/entities/Task";
import TaskList from "@/components/Lists/Tasks/TaskList";
import Tag from "@/entities/Tag";
import CreateTagForm from "@/components/Forms/CreateTagForm";
import TagList from "@/components/Lists/Tags/TagList";
import ListIndex from "@/components/Lists/ListIndex";
import ListToggle from "@/components/Lists/ListToggle";
import EditTaskModal from "@/components/Modal";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [tags, setTags] = useState<Tag[]>([]);

  const tasksToUpdate: Set<Task> = new Set();

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

  const fetchTags = async () => {
    const res = await fetch("http://192.168.1.100:8181/tags", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const tagList = await res.json();
    setTags(tagList);
  };

  useEffect(() => {
    fetchTasks();
    fetchTags();
  }, []);

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg border-rose-200 border-2 mt-4">
        <CreateTagForm tags={tags} setTags={setTags}></CreateTagForm>
      </div>
      <div className="w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg border-rose-200 border-2">
        <CreateTaskForm
          tags={tags}
          tasks={tasks}
          setTasks={setTasks}
        ></CreateTaskForm>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg border-rose-200 border-2 mb-4">
        <ListIndex setTasks={setTasks} tasksToUpdate={tasksToUpdate} tags={tags} tasks={tasks}></ListIndex>
      </div>
    </main>
  );
}
