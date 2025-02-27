"use client"
import React, { useState, useRef, useEffect } from "react";

import {
  MessageSquareDiff,
  Upload,
  Wand,
  Filter as FilterIcon,
} from "lucide-react";
import ShowJobs from "./ShowJobs";
import NewThread from "./NewThread";
import Filter from "./ui/Filter";
import { Button } from "./ui/Button";
import SearchBar from "./ui/SearchBar";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const filterModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterModalRef.current &&
        !filterModalRef.current.contains(event.target)
      ) {
        setFilterModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-3xl w-full mx-auto lg:mt-0 mt-10 p-8 overflow-hidden min-h-[400px]">
      {activeComponent === "jobs" && <ShowJobs />}

      {activeComponent === "thread" && <NewThread />}

      {filterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
          <div
            ref={filterModalRef}
            className="bg-white p-6 rounded-lg max-w-max space-y-8"
          >
            <Filter />
          </div>
        </div>
      )}

      
      <div className=" w-72 lg:w-auto lg:p-0 p-2 mx-auto absolute bottom-4 lg:bottom-10">
        <div className="lg:flex w-full justify-center gap-6 mb-1 lg:mb-8">
          <button
            className="flex items-center gap-2 h-10 lg:h-auto w-full lg:w-[10rem] lg:p-2 px-6 py-3 text-lg font-semibold bg-transparent border border-white text-black bg-indigo-600 rounded-lg"
            onClick={() =>
              setActiveComponent(activeComponent === "jobs" ? null : "jobs")
            }
          >
            <Wand className="h-5 w-5" />
            Match Jobs
          </button>

          <button className="flex items-center gap-2 h-10 lg:h-auto w-full lg:w-[10rem] lg:p-1 px-6 py-3 text-lg font-semibold bg-transparent border border-black text-black bg-indigo-300 rounded-lg">
            <Upload className="h-5 w-5" />
            Upload Resume
          </button>

          <button
            className="flex items-center gap-2 h-10 lg:h-auto w-full lg:w-[10rem] lg:p-2 px-6 py-3 text-lg font-semibold bg-transparent border border-black text-black bg-indigo-300 rounded-lg"
            onClick={() =>
              setActiveComponent(activeComponent === "thread" ? null : "thread")
            }
          >
            <MessageSquareDiff className="h-5 w-5" />
            New Thread
          </button>
        </div>

        <div className="flex lg:w-full items-center justify-center gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 border border-black text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setFilterModalOpen(!filterModalOpen)}
          >
            <FilterIcon className="h-5 w-5" />
            Filter
          </Button>

          <SearchBar className="w-full max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
