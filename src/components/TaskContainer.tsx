import { useState } from "react";
import InputRow from "./InputRow";
import TaskList from "./TaskList";
import { Task } from "../types/task";

const initialTasks = [
  { id: "1", task: "Some Tasks", isDone: false },
  { id: "2", task: "Some Second Tasks", isDone: false },
];

function TaskContainer() {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask(newTask: Task) {
    setTasks((prevTask) => [...prevTask, newTask]);
  }

  function toggleTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <main className="border-solid border-x border-y border-ocean-200 shadow h-[90vh] px-3">
      <InputRow onAddTask={addTask}/>
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}

export default TaskContainer;
