interface Task {
  id: string;
  task: string;
  isDone: boolean;
}

interface TasksProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

function TaskList({ tasks, onToggleTask }: TasksProps) {
  return (
    <>
      <ul className=" border-b border-ocean-100 pb-3">
        {tasks.map(
          (task) =>
            task.isDone === false && (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => onToggleTask(task.id)}
                />
                <span className="text-ocean-900 ml-2">{task.task}</span>
              </li>
            )
        )}
      </ul>
      <div className="text-ocean-500">Tasks Completed</div>
      <ul>
        {tasks.map(
          (task) =>
            task.isDone === true && (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => onToggleTask(task.id)}
                />
                <span className="line-through text-ocean-400 ml-2">
                  {task.task}
                </span>
              </li>
            )
        )}
      </ul>
    </>
  );
}

export default TaskList;
