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

     

      
      
    </div>
  );
};

export default Home;
