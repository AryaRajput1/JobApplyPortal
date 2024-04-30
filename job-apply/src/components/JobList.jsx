import React from "react";
import JobCard from "./JobCard";

function JobList({ list }) {
  return (
    <div className="job-list flex items-center w-full">
      {list?.map((jdItem, index) => {
        return <JobCard key={index} jobDetails={jdItem} />;
      })}
    </div>
  );
}

export default JobList;
