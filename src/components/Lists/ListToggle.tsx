import { Dispatch, SetStateAction } from "react";

interface ListToggleProps {
  showTagsOrTasks: string;
  setShowTagsOrTasks: Dispatch<SetStateAction<string>>;
}

export default function ListToggle({showTagsOrTasks, setShowTagsOrTasks}: ListToggleProps) {

  const handleToggle = () => {
    if (showTagsOrTasks == "tasks") {
      setShowTagsOrTasks("tags");
      return;
    }
    if (showTagsOrTasks == "tags") {
      setShowTagsOrTasks("tasks");
      return;
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button
        disabled={showTagsOrTasks==="tasks"}
        onClick={handleToggle}
        type="button"
        className="border-rose-200 hover:bg-rose-500 hover:text-white border-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Tarefas
      </button>
      <button
        disabled={showTagsOrTasks==="tags"}
        onClick={handleToggle}
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3.5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Categorias
      </button>
    </div>
  );
}
