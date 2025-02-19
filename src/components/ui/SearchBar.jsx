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
        <div className="max-w-2xl w-full mx-auto relative">
            {searchQuery && (
                <div
                    className="
                    absolute bottom-full mb-2 w-full max-w-2xl
                    bg-white rounded-lg border border-gray-200
                    shadow-lg py-2 px-0
                    divide-y divide-gray-100
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
                    relative flex items-center w-full h-12 rounded-lg 
                    border transition-all duration-300 bg-transparent
                    ${isFocused ? "border-black shadow-lg shadow-blue-100" : "border-black hover:border-gray-400"}
                `}
            >
                

                {searchQuery && (
                    <Button
                        onClick={handleClear}
                        className="
                            absolute right-0 grid place-items-center 
                            h-full w-12 text-gray-500
                            hover:text-gray-700 transition-colors
                        "
                        aria-label="Clear search"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default SearchBar
