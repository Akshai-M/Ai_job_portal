import React from "react";
import { Button } from "./ui/Button";
import { Edit, Trash2 } from "lucide-react";

const Bookmark = () => {
  return (
    <>
      <div className="grid items-center justify-center ">
        {" "}

        <div className="max-w-2xl w-full text-center p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold text-gray-800">
            No Saved Jobs Yet
          </h1>
          
        </div>
      </div>
      
    </>
  );
};

export default Bookmark;
