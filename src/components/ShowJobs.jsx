import React from "react";
import JobCard from "./JobCard";
import LOGO from '@/app/favicon.ico';


function ShowJobs() {
  const jobCards = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      logo: LOGO,
      experience: "3+ years",
      salary: "15-20",
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
      logo: LOGO,
      experience: "2+ years",
      salary: "10-15",
      timeDuration: "Part-time",
      location: "San Francisco, CA",
      startsIn: "5 days",
      skills: ["UI/UX", "Figma", "Prototyping"],
      description:
        "Design intuitive and user-friendly product interfaces with a focus on user experience.",
      applyUrl: "https://www.microsoft.com",
    },

  ];

  return (
    <div className="max-w-7xl mx-5 border absolute top-[1rem] bg-[#e4e4e7] border-gray-500 lg:rounded-t-none border-t-gray-300 rounded-lg  lg:mt-0">
      <div className="sm:max-h-[535px]  max-h-[27.5rem] overflow-y-auto overflow-x-hidden p-4 space-y-4 scrollbar-hide ">
        {jobCards.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default ShowJobs;
