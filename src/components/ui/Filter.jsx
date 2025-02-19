"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";

export default function Filter() {
    const [jobAge, setJobAge] = useState(12);
    const [salary, setSalary] = useState("0");

    return (
        <div className="bg-white z-10 p-6 rounded-lg max-w-max space-y-8">
            <h2 className="text-black dark:text-white text-2xl font-semibold">Refine your search</h2>

            <div className="flex gap-3">
                <div className="space-y-1">
                    <label className="text-black dark:text-white text-base">Country</label>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Filter jobs by country</p>
                    <div className="relative mt-2">
                        <select className="w-full bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-[#333333] rounded-md px-4 py-3 appearance-none text-black dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-[#333333]">
                            <option>No preference</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 pointer-events-none h-5 w-5" />
                    </div>
                </div>

               
            </div>

        </div>
    );
}
