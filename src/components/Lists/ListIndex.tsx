import TaskList from "./Tasks/TaskList";
import TagList from "./Tags/TagList";
import { Dispatch, SetStateAction, useState } from "react";
import Tag from "@/entities/Tag";
import { Task } from "@/entities/Task";
import ListToggle from "./ListToggle";

interface ListIndexProps {
  tasks: Task[];
  tags: Tag[];
  tasksToUpdate: Set<Task>;
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export default function ListIndex({ tasks, tags, tasksToUpdate, setTasks }: ListIndexProps) {
  const [showTagsOrTasks, setShowTagsOrTasks] = useState("tasks");

  return (
    <>
      <ListToggle
        setShowTagsOrTasks={setShowTagsOrTasks}
        showTagsOrTasks={showTagsOrTasks}
      ></ListToggle>
      {showTagsOrTasks == "tasks" ? (
        <TaskList setTasks={setTasks} tags={tags} tasksToUpdate={tasksToUpdate} tasks={tasks}></TaskList>
      ) : (
        <TagList tags={tags}></TagList>
      )}
    </>
  );
}
