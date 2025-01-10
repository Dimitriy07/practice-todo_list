import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import generateUniqueId from "generate-unique-id";
import { Task } from "../types/task";

interface InputRowProps {
  onAddTask: (task: Task) => void;
}

function InputRow({ onAddTask }: InputRowProps) {
  const [input, setInput] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  useEffect(function () {
    ref.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim() === "") return;
    const newTask = {
      id: generateUniqueId(),
      task: input,
      isDone: false,
    };
    onAddTask(newTask);
    setInput("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-10 rounded-lg flex items-center  mt-2"
    >
      <input
        ref={ref}
        value={input}
        type="text"
        placeholder="New Task"
        className="w-full border border-ocean-600 h-full focus:outline-none focus:ring-1 focus:ring-coral-800 px-5"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button type="primary">Add Task</Button>
    </form>
  );
}

export default InputRow;
