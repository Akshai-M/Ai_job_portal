import React from "react";
import { FaRegBookmark, FaRupeeSign } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import { PiNotepadBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "./ui/Button";

const JobCard = ({ job }) => {
  return (
    <div className=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 border border-gray-200">
     

     

     

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Starts in:{" "}
          <span className="text-black font-medium">{job.startsIn}</span>
        </p>
      </div>
      <div className="mt-3">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            window.open(job.applyUrl, "_blank");
          }}
          className="bg-indigo-600 w-full hover:bg-indigo-700 text-white font-semibold  py-3 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Apply Here anyone you want
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
