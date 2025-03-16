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
        <div className="flex justify-center mt-5">
          <Button className="w-72 bg-indigo-600 text-white">
            Create your own thread
          </Button>
        </div>
      </div>
      <div className="w-1/2 mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Saved Jobs
          </h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Filter saved jobs..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead>
              <tr className="bg-gray-50 border-2">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Job Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 border-2 ">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Python Developer
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  February 4, 2025
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium  items-center justify-end">
                  {" "}
                  
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 flex items-center"
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> 
                    Delete
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 border-2 ">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Python Developer
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  February 4, 2025
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium  items-center justify-end">
                  {" "}
                  
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 flex items-center"
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> 
                    Delete
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 border-2 ">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Python Developer
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  February 4, 2025
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium  items-center justify-end">
                  {" "}
                  
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 flex items-center"
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> 
                    Delete
                  </a>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
