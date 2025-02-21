"use client";
import Cardscroller from "./Cardscroller";

const jobCards = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Google",
    logo: "/logo.png", // Replace LOGO with the actual path or import
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
    logo: "/logo.png",
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
    logo: "/logo.png",
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
    logo: "/logo.png", // Replace LOGO with the actual path or import
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
    logo: "/logo.png",
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
    logo: "/logo.png",
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
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex">
      <main className="flex-grow p-6 space-y-12 overflow-y-auto">
        {/* Featured Jobs */}
        <h2 className="text-2xl font-semibold">Featured Jobs</h2>
        

        {/* Popular Categories */}
        <h2 className="text-2xl font-semibold">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              className="p-4 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:text-white transition-colors cursor-pointer"
            >
              <span className="inline-block px-4 py-2 rounded-full">
                {category}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
