"use client";
import React, { useState } from "react";
import {
  House,
  Search,
  Save,
  Telescope,
  Wrench,
  Share2,
  LifeBuoy,
} from "lucide-react";
import Setting from "@/components/Setting";
import Home from "@/components/Home";
import Browse from "@/components/Browse";
import Find from "@/components/Find";
import Bookmark from "@/components/Save";
import Share from "@/components/Share";
import Help from "@/components/Help";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(<Home />);
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleSidebarMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarMouseLeave = () => {
    setIsSidebarOpen(false);
  };

  const navItems = [
    { icon: <House size={24} />, text: "Home", component: <Home /> },
    { icon: <Search size={24} />, text: "Browse", component: <Browse /> },
    { icon: <Telescope size={24} />, text: "Find", component: <Find /> },
    { icon: <Save size={24} />, text: "Bookmark", component: <Bookmark /> },
    { icon: <Share2 size={24} />, text: "Share", component: <Share /> },
    { icon: <Wrench size={24} />, text: "Setting", component: <Setting /> },
    { icon: <LifeBuoy size={24} />, text: "Help", component: <Help /> },
  ];

  return (
    <div className="flex">
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-md z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
          onClick={toggleSidebar}
        >
          <aside
            className="bg-white w-64 rounded-lg shadow-lg p-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center py-3 px-4 cursor-pointer transition-all rounded-md ${
                      activeNavItem === index
                        ? "bg-indigo-800 text-white"
                        : "hover:bg-indigo-50 hover:text-indigo-800 text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedComponent(item.component);
                      setActiveNavItem(index);
                      setIsOpen(false);
                    }}
                  >
                    <span className="w-10 flex justify-center">{item.icon}</span>
                    <span className="ml-3">{item.text}</span>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`bg-[#E4E4E7] px-5 border text-gray-700 h-screen fixed top-0 left-0 z-30 transition-all duration-300 lg:flex flex-col ${
          isSidebarOpen ? "w-64" : "w-24"
        } hidden lg:flex`}
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold whitespace-nowrap">
            {isSidebarOpen ? "Your App" : "YA"}
          </h1>
        </div>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center py-3 px-4 cursor-pointer transition-all rounded-md ${
                  activeNavItem === index
                    ? "bg-indigo-800 text-white"
                    : "hover:bg-indigo-50 hover:text-indigo-800 text-gray-600"
                }`}
                onClick={() => {
                  setSelectedComponent(item.component);
                  setActiveNavItem(index);
                }}
              >
                <span className="w-10 flex justify-center">{item.icon}</span>
                <span
                  className="ml-3 whitespace-nowrap"
                  style={{
                    width: isSidebarOpen ? "auto" : "0",
                    overflow: "hidden",
                    transition: "width 0.3s ease-in-out",
                  }}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      
        {selectedComponent}
    </div>
  );
};

export default Sidebar;