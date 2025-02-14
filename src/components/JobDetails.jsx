import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
const JobDetails = ({ job }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-7xl w-full">
        <div className="flex items-center mb-6">
          <img
            src={job.logo}
            alt={`${job.company} Logo`}
            className="w-16 h-16 mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
            <p className="text-lg text-gray-600">{job.company}</p>
          </div>
        </div>
        <div className="text-lg text-gray-700 space-y-4 mb-8">
          <p>
            <span className="font-semibold text-gray-900">Duration:</span> {job.timeDuration}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Location:</span> {job.location}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Description:</span> {job.description}
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              if (job.applyUrl.startsWith('http')) { 
                window.location.href = job.applyUrl;
              } else {
                console.warn("Internal apply URL not yet implemented:", job.applyUrl);
              }
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
          >
            Apply Here
          </Button>

          <Link href="/">
            <Button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;