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
          {["general", "appearance", "notifications"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => handleTabClick(tab)}
                className={`text-gray-600 hover:text-gray-800 relative pb-2 ${
                  activeTab === tab ? "text-indigo-600 font-medium" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-full"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-[400px] overflow-hidden">
        {activeTab === "general" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Email</h2>
            <p className=" border cursor-not-allowed mb-4 rounded-md px-3 py-2 text-gray-600">
              {usermail}
            </p>
            <p className="text-gray-500 text-sm ">
              This is so we can intro you to jobs that fit your the data in your
              wallet.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-24 mb-4">
              Wallet Address
            </h2>
            <input
              type="text"
              placeholder="Enter your wallet address"
              className="w-full px-4 py-2 border cursor-not-allowed rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <p className="text-gray-500 text-sm">
              This is your on-chain wallet address where you'll store your
              resume, skills, and other data to be used for the jobs you apply
              to.
            </p>
          </div>
        )}

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
              {notifyOn.map((industry, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`industry-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-200"
                  />
                  <label
                    htmlFor={`industry-${index}`}
                    className="text-gray-700"
                  >
                    {industry}
                  </label>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Email Notifications
            </h2>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="newsletter"
                className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600"
              />
              <label htmlFor="newsletter" className="text-gray-700">
                Newsletter emails{" "}
                <span className="text-gray-500 text-sm">
                  (Receive emails about recent news, jobs, etc.)
                </span>
              </label>
            </div>
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
