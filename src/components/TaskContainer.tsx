import { useState } from "react";
import InputRow from "./InputRow";
import TaskList from "./TaskList";

const initialTasks = [
  { id: "1", task: "Some Tasks", isDone: false },
  { id: "2", task: "Some Second Tasks", isDone: false },
];

function TaskContainer() {
  const [tasks, setTasks] = useState(initialTasks);

  function toggleTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );

  }

  return (
    <main className="border-solid border-x border-y border-ocean-200 shadow h-[90vh] px-3">
      <InputRow onAddTask={setTasks} tasks={tasks} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </main>
  );
}

export default TaskContainer;
