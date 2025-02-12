"use client"
import React, { useState, useRef, useEffect } from "react";

import {
  MessageSquareDiff,
  Upload,
  Wand,
  Filter as FilterIcon,
} from "lucide-react";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const filterModalRef = useRef(null);

  

  return (
    <div className="max-w-3xl w-full mx-auto lg:mt-0 mt-10 p-8 overflow-hidden min-h-[400px]">
      {activeComponent === "jobs" && <ShowJobs />}

      {activeComponent === "thread" && <NewThread />}

     

      
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
