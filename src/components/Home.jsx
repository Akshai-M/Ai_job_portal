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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobCards.map((job) => (
            <div
              key={job.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img src={job.logo} alt={job.company} className="w-12 h-12 mb-3" />
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm mt-2">{job.location}</p>
              <p className="text-sm text-gray-500">Salary: {job.salary} LPA</p>
              <p className="text-sm text-gray-500">Experience: {job.experience}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={job.applyUrl}
                target="_blank"
                className="mt-4 block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <Cardscroller />

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
