import React, { useState } from "react";

function Setting() {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const usermail = "mylapuramakshaikumar@gmail.com";

  const notifyOn = [
    "Nonprofit and Social Services",
    "Telecommunications",
    "Environmental Services",
    "Nonprofit and Social Services",
    "Telecommunications",
    "Environmental Services",
    "Nonprofit and Social Services",
    "Telecommunications",
    "Environmental Services",
    "Nonprofit and Social Services",
    "Telecommunications",
    "Environmental Services",
    "Nonprofit and Social Services",
    "Telecommunications",
    "Environmental Services",
    "Nonprofit and Social Services",
    "Telecommunications",
    "Environmental Services",
  ];

  return (
    <div className="max-w-3xl w-full mx-auto lg:mt-0 mt-10 bg-white rounded-lg shadow-md p-8 overflow-hidden min-h-[400px]">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Settings</h1>

      <div className="border-b border-gray-200 pb-4 mb-6">
        <ul className="flex space-x-4">
          
        </ul>
      </div>

      <div className="h-[400px] overflow-hidden">
       

        {activeTab === "appearance" && (
          <div>
            <p>Appearance settings will go here.</p>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Industry Preferences
            </h2>
            <div className="h-40 overflow-y-auto scrollbar-hide border p-2 rounded">
              {" "}
             
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Email Notifications
            </h2>
          
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md mt-4">
              Update notifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Setting;
