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
          <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <p className="text-sm text-gray-600">
              Suggested: <span className="text-gray-900">{searchQuery}</span>
            </p>
          </div>
          <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <p className="text-sm text-gray-600">Popular: Software Engineer</p>
          </div>
          <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <p className="text-sm text-gray-600">Popular: Product Manager</p>
          </div>
        </div>
      )}

   
      <div
        className={`
          flex items-center w-full h-12 rounded-lg 
          border transition-all duration-300 bg-transparent 
          ${isFocused ? "border-black shadow-lg shadow-blue-100" : "border-black hover:border-gray-400"}
        `}
      >
      
        <div className="grid place-items-center h-full w-10 sm:w-12">
          <Search className="h-5 w-5 text-gray-500" />
        </div>

   
        <input
          type="text"
          placeholder="Search for jobs, companies, or keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            flex-1 h-full pr-10 pl-2
            text-gray-700 outline-none 
            placeholder:text-gray-500
            bg-transparent text-sm sm:text-base 
          "
        />

       
      </div>
    </div>
  )
}

export default SearchBar
