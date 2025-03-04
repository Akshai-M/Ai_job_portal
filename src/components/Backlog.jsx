import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const BacklogColumn = ({ tasks }) => (
  <Droppable droppableId="backlog">
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="w-1/3 p-6 rounded-lg min-h-[400px] shadow-lg bg-yellow-300 border-2 border-yellow-500"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-yellow-900">Backlog</h2>
    
          
      
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default BacklogColumn;
