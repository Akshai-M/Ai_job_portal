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

                <div className="space-y-1">
                    <label className="text-black dark:text-white text-base">Remote</label>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Filter jobs by whether they are remote or not
                    </p>
                    <div className="relative mt-2">
                        <select className="w-full bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-[#333333] rounded-md px-4 py-3 appearance-none text-black dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-[#333333]">
                            <option>No preference</option>
                            <option>Remote only</option>
                            <option>Office only</option>
                            <option>Hybrid</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 pointer-events-none h-5 w-5" />
                    </div>
                </div>
            </div>

           

            <div className="space-y-1">
                <label className="text-black dark:text-white text-base">Experience (months)</label>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Filter jobs by the number of months you have been working
                </p>
                <div className="relative mt-4">
                    <input
                        type="range"
                        min="0"
                        max="24"
                        value={jobAge}
                        onChange={(e) => setJobAge(Number(e.target.value))}
                        className="w-full h-1 bg-gray-300 dark:bg-[#333333] rounded-lg appearance-none cursor-pointer accent-indigo-8 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black dark:[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
                        style={{ background: `linear-gradient(to right, #6366F1 ${jobAge / 24 * 100}%, #333333 ${jobAge / 24 * 100}%)` }}
                    />
                    <span className="absolute -bottom-6 left-0 text-sm text-gray-600 dark:text-gray-400">
                        {jobAge} months
                    </span>
                </div>
            </div>

            <div className="flex gap-3 pt-6">
                <Button className="flex-1 bg-indigo-600 dark:bg-[#4A3ECC] hover:bg-indigo-500 dark:hover:bg-[#313272] text-white font-medium py-3 px-4 rounded-md transition-colors">
                    Apply filters
                </Button>
                <Button className="flex-1 bg-gray-200 dark:bg-[#27272A] hover:bg-gray-300 dark:hover:bg-black text-black dark:text-white font-medium py-3 px-4 rounded-md transition-colors border border-gray-300 dark:border-[#333333]">
                    Reset filters
                </Button>
            </div>
        </div>
    );
}
