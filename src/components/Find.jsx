import React from 'react'

import { Edit, Trash, Trash2 } from 'lucide-react';


function Find() {
  return (

<div className="w-1/2 mx-auto bg-white rounded-lg shadow-md p-6">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold text-gray-800">Previous Job Search Threads</h2>
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md">
      Start new thread
    </button>
  </div>

  <div className="mb-4">
    <input
      type="text"
      placeholder="Filter threads..."
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <table className="min-w-full divide-y divide-gray-200 table-auto"> 
    <thead>
      <tr className="bg-gray-50 border-2">
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
          Title
        </th>
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
          Created
        </th>
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      
      
      <tr className="hover:bg-gray-50 border-2 ">
        <td className="px-4 py-3 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">I would like to match with jobs.</div>
        </td>
        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
          February 4, 2025
        </td>
       
      </tr>
      <tr className="hover:bg-gray-50 border-2 ">
        <td className="px-4 py-3 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">I would like to match with jobs.</div>
        </td>
        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
          February 4, 2025
        </td>
        <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium flex items-center pl-7">
          <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-2 flex items-center">
            <Edit className="h-4 w-4 mr-1" />
           
          </a>
          <a href="#" className="text-red-600 hover:text-red-900 flex items-center">
            <Trash2 className="h-4 w-4 mr-1" />
         
          </a>
        </td>
      </tr>
     
    
    </tbody>
  </table>
  <div>
    
  </div>
  <button className="bg-[#e4e4e7] hover:bg-red-700 text-black font-medium flex items-center justify-center gap-2 py-2 px-4 rounded-md mt-4 w-full">
  <Trash className="h-4 w-4" />
  Delete All Threads
</button>

</div>
  )
}

export default Find
