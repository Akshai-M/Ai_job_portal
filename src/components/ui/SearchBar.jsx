import React, { useState } from "react"
import { Search, X } from "lucide-react"
import { Button } from "./Button"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = () => {
    setSearchQuery("")
  }

  return (
    <div className="w-full max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto relative">
     
      {searchQuery && (
        <div
          className="
            absolute bottom-full mb-2 w-full 
            bg-white rounded-lg border border-black
            shadow-lg py-2 divide-y divide-gray-100
          "
        >
          
        </div>
      )}

   
      <div
        className={`
          flex items-center w-full h-12 rounded-lg 
          border transition-all duration-300 bg-transparent 
          ${isFocused ? "border-black shadow-lg shadow-blue-100" : "border-black hover:border-gray-400"}
        `}
      >
      
       

   
        

       
      </div>
    </div>
  )
}

export default SearchBar
