import { Task } from "@/entities/Task";
import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../../Modal";
import EditTaskForm from "@/components/Forms/EditTaskForm";
import Tag from "@/entities/Tag";

interface TaskListItemProps {
  task: Task;
  tasksToUpdate: Set<Task>;
  setTasks: Dispatch<SetStateAction<Task[]>>;
  tags: Tag[];
}

export default function TaskListItem({
  task,
  tasksToUpdate,
  setTasks,
  tags,
}: TaskListItemProps) {
  const [done, setDone] = useState<boolean>(task.isDone);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = () => {
    task.isDone = !done;
    setDone(!done);
    tasksToUpdate.add(task);
  };

  const openModal = () => setModalIsOpen(true);

  const deleteTask = async () => {
    const res = await fetch(`http://192.168.1.100:8181/tasks/${task.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setTasks((curTasks) => curTasks.filter((curTask) => curTask != task));
    }
  };

  return (
    <li className="h-10">
    <div className="flex w-96">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={done}
          className=""
        />
        <label className={`px-3 w-72 break-words ${done ? "line-through" : ""}`}>{task.name}</label>
      </div>
      <div className="flex items-center"> 
        <button onClick={openModal}>
          <svg
            className="w-6 h-6 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
          </svg>
        </button>
        <button onClick={deleteTask}>
          <svg
            className="h-8 w-8 text-red-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <Modal setIsOpen={setModalIsOpen} isOpen={modalIsOpen}>
        <EditTaskForm tags={tags} task={task}></EditTaskForm>
      </Modal>
    </div>
  </li>
  );
}
