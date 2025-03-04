"use client";
import React, { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import TodoColumn from "./Todo";
import BacklogColumn from "./Backlog";
import CompletedColumn from "./Completed";

const initialTasks = [
  { id: "1", content: "Task 1", status: "todo" },
  { id: "2", content: "Task 2", status: "backlog" },
  { id: "3", content: "Task 3", status: "completed" },
];

const Dragdrop = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = tasks.map((task) => {
      if (task.id === result.draggableId) {
        return { ...task, status: result.destination.droppableId };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-6 p-6 bg-gray-200 min-h-screen justify-center items-start text-black">
        <TodoColumn tasks={tasks.filter((task) => task.status === "todo")} />
        <BacklogColumn tasks={tasks.filter((task) => task.status === "backlog")} />
        <CompletedColumn tasks={tasks.filter((task) => task.status === "completed")} />
      </div>
    </DragDropContext>
  );
};

export default Dragdrop;



