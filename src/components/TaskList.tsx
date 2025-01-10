import { Task } from "../types/task";

interface TasksProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

function TaskList({ tasks, onToggleTask, onDeleteTask }: TasksProps) {
  const incompleteTasks = tasks.filter((task) => !task.isDone);
  const completedTasks = tasks.filter((task) => task.isDone);
  return (
    <>
      <ul className=" border-b border-ocean-100 pb-3">
        {incompleteTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => onToggleTask(task.id)}
            />
            <span className="text-ocean-900 ml-2">{task.task}</span>
            <button onClick={() => onDeleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="text-ocean-500">Tasks Completed</div>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => onToggleTask(task.id)}
            />
            <span className="line-through text-ocean-400 ml-2">
              {task.task}
            </span>
            <button onClick={() => onDeleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
