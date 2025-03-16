"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import Cardscroller from "./Cardscroller";
import SearchBar from "./ui/SearchBar";
import {
  Banknote,
  Building,
  Users,
  TrendingUp,
  Calculator,
  Headphones,
  Calendar,
  Laptop,
  Database,
  Code2,
  Brush,
  Megaphone,
} from "lucide-react";

const categoryIcons = {
  Banking: <Banknote />,
  "Work From Home": <Building />,
  HR: <Users />,
  Sales: <TrendingUp />,
  Accounting: <Calculator />,
  "Customer Support": <Headphones />,
  "Event Management": <Calendar />,
  IT: <Laptop />,
  SQL: <Database />,
  Oracle: <Code2 />,
  "Graphic Design": <Brush />,
  "Digital Marketing": <Megaphone />,
};

const jobCards = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Google",
    logo: "https://connect-assets.prosple.com/cdn/ff/5DCs8JrEwzITnwvZ1hm7pIiadZS5O-OPcpQCujFj0yg/1652245146/public/inline-images/logo-ey-2022.jpeg",
    experience: "3+ years",
    salary: "15-20 LPA",
    timeDuration: "Full-time",
    location: "Mountain View, CA",
    startsIn: "3 days",
    skills: ["CSS", "React", "JavaScript"],
    description:
      "Lead the development of cutting-edge web applications and collaborate with teams.",
    applyUrl: "https://www.microsoft.com",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Airbnb",
    logo: "https://connect-assets.prosple.com/cdn/ff/5DCs8JrEwzITnwvZ1hm7pIiadZS5O-OPcpQCujFj0yg/1652245146/public/inline-images/logo-ey-2022.jpeg",
    experience: "2+ years",
    salary: "10-15 LPA",
    timeDuration: "Part-time",
    location: "San Francisco, CA",
    startsIn: "5 days",
    skills: ["UI/UX", "Figma", "Prototyping"],
    description:
      "Design intuitive and user-friendly product interfaces with a focus on user experience.",
    applyUrl: "https://www.microsoft.com",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Amazon",
    logo: "https://connect-assets.prosple.com/cdn/ff/5DCs8JrEwzITnwvZ1hm7pIiadZS5O-OPcpQCujFj0yg/1652245146/public/inline-images/logo-ey-2022.jpeg",
    experience: "4+ years",
    salary: "20-25 LPA",
    timeDuration: "Full-time",
    location: "Seattle, WA",
    startsIn: "7 days",
    skills: ["Node.js", "MongoDB", "AWS"],
    description:
      "Build and maintain scalable backend services powering millions of users.",
    applyUrl: "https://www.microsoft.com",
  },
  {
    id: 4,
    title: "Senior Frontend Developer",
    company: "Google",
    logo: "https://connect-assets.prosple.com/cdn/ff/5DCs8JrEwzITnwvZ1hm7pIiadZS5O-OPcpQCujFj0yg/1652245146/public/inline-images/logo-ey-2022.jpeg",
    experience: "3+ years",
    salary: "15-20 LPA",
    timeDuration: "Full-time",
    location: "Mountain View, CA",
    startsIn: "3 days",
    skills: ["CSS", "React", "JavaScript"],
    description:
      "Lead the development of cutting-edge web applications and collaborate with teams.",
    applyUrl: "https://www.microsoft.com",
  },
  {
    id: 5,
    title: "Product Designer",
    company: "Airbnb",
    logo: "https://connect-assets.prosple.com/cdn/ff/5DCs8JrEwzITnwvZ1hm7pIiadZS5O-OPcpQCujFj0yg/1652245146/public/inline-images/logo-ey-2022.jpeg",
    experience: "2+ years",
    salary: "10-15 LPA",
    timeDuration: "Part-time",
    location: "San Francisco, CA",
    startsIn: "5 days",
    skills: ["UI/UX", "Figma", "Prototyping"],
    description:
      "Design intuitive and user-friendly product interfaces with a focus on user experience.",
    applyUrl: "https://www.microsoft.com",
  },
  {
    id: 6,
    title: "Backend Engineer",
    company: "Amazon",
    logo: "https://connect-assets.prosple.com/cdn/ff/5DCs8JrEwzITnwvZ1hm7pIiadZS5O-OPcpQCujFj0yg/1652245146/public/inline-images/logo-ey-2022.jpeg",
    experience: "4+ years",
    salary: "Not disclosed ",
    timeDuration: "Full-time",
    location: "Seattle, WA",
    startsIn: "7 days",
    skills: ["Node.js", "MongoDB", "AWS"],
    description:
      "Build and maintain scalable backend services powering millions of users.",
    applyUrl: "https://www.microsoft.com",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <main className="flex-grow p-6 space-y-12 overflow-y-auto">
        {/* Featured Jobs */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#121224] mb-8 text-center">
            Featured Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobCards.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-20 h-20 rounded-lg mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-[#121224]">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex">
                      <span className="text-sm text-gray-600 pr-1">
                        <FaLocationDot />{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-sm font-medium text-gray-700 pt-[1px]">
                        <FaRupeeSign />
                      </span>
                      <span className="text-sm text-gray-600">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex ">
                      <span className="text-sm font-medium text-gray-700 pr-1 pt-[2px]">
                        <TbBriefcase2 />
                      </span>
                      <span className="text-sm text-gray-600">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 ">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-[#4969E1] px-3 py-1 rounded-lg font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 text-center border-t border-gray-200">
                  <a
                    href={job.applyUrl}
                    target="_blank"
                    className="inline-block px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Cardscroller />

        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Banking",
              "Work From Home",
              "HR",
              "Sales",
              "Accounting",
              "Customer Support",
              "Event Management",
              "IT",
              "SQL",
              "Oracle",
              "Graphic Design",
              "Digital Marketing",
            ].map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                <span className="mr-2 text-blue-600 group-hover:text-white">
                  {categoryIcons[category]}
                </span>
                <span className="font-semibold text-gray-600 group-hover:text-white">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="sticky bottom-0 w-full bg-white p-4 z-10 border-t md:px-10 lg:px-20">
        <SearchBar />
      </div>
    </div>
  );
}
