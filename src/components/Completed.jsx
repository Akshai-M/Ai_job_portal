import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const CompletedColumn = ({ tasks }) => (
  <Droppable droppableId="completed">
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="w-1/3 p-6 rounded-lg min-h-[400px] shadow-lg bg-green-300 border-2 border-green-500"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-green-900">Completed</h2>
        
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default CompletedColumn;
