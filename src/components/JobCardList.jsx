import React from 'react';
import JobCard from './JobCard';

const JobCardList = ({ jobs }) => {
  return (
    <div className=" ">
      <div className="">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobCardList;