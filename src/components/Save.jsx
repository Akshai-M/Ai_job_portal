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
          <p className="text-gray-600 mt-2">
            Jobs you find during your job search threads will appear here for
            easy organization and tracking.
          </p>
          <p className="text-gray-600">
            Start a new job search thread to begin discovering and saving
            relevant positions.
          </p>
          <p className="text-gray-400 mt-4">Need more info on Threads?</p>

          <div className="flex justify-center mt-5">
            <p className="border-l-4 rounded-lg border-blue-600 w-fit py-2 text-black pl-2">
              We've got you covered →
            </p>
          </div>
        </div>
       
      </div>
      
    </>
  );
};

export default Bookmark;
