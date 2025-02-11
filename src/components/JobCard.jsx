import React from "react";
import { FaRegBookmark, FaRupeeSign } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import { PiNotepadBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "./ui/Button";

const JobCard = ({ job }) => {
  

  return (
    <div
      className=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 border border-gray-200"
    >
      

      <div className="text-sm text-gray-700 space-y-2">
        <div className="flex items-center">
          <TbBriefcase2 className="text-gray-500 text-lg mr-2" />
          <span>{job.experience}</span>
          <FaRupeeSign className="ml-4 text-gray-500 text-lg mr-1" />
          <span>{job.salary ? `${job.salary} LPA` : "Negotiable"}</span>
        </div>
        <div className="flex items-center">
          <IoLocationSharp className="text-gray-500 text-lg mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <PiNotepadBold className="text-gray-500 text-xl mr-2" />
          <p className="text-gray-500">{job.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {job.skills && job.skills.length > 0 ? (
          job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 border border-indigo-300 rounded-lg"
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-gray-500 text-xs">No skills listed</span>
        )}
      </div>

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
        Apply Here
      </Button>
      </div>
    </div>
  );
};

export default JobCard;
