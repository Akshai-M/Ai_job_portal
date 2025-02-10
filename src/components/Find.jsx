import React from 'react'

import { Edit, Trash, Trash2 } from 'lucide-react';


function Find() {
  return (

<div className="w-1/2 mx-auto bg-white rounded-lg shadow-md p-6">
  

  

  <table className="min-w-full divide-y divide-gray-200 table-auto"> 
    
   
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
