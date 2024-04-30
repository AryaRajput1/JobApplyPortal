import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function JobCard({ jobDetails }) {
  return (
    <div className="xl:w-[23%] lg:w-[31%] md:w-[40%] sm:w-[70%] shadow-md hover:scale-105 hover:shadow-lg m-2 p-6 rounded-xl">
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Weekday_Logo.jpg"
          className="rounded-full w-12 h-12 object-contain border p-1 aspect-square"
        />
        <div className="ml-4 flex flex-col gap-1">
          <h3 className="text-[14px] font-semibold text-gray-500">Weekday</h3>
          <p className="text-[16px] capitalize">{jobDetails.jobRole}</p>
          <p className="text-[12px] capitalize">{jobDetails.location}</p>
        </div>
      </div>
      <div>
        <p className="mt-3 text-gray-500">Estimated Salary: ₹30 - 35 LPA ✅</p>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-md">About Company:</h3>
        <p className="job-description text-[14px]">
          {jobDetails.jobDetailsFromCompany.slice(0, 300)}
        </p>
        <div className="text-center text-blue-600">
          <button>View More</button>
        </div>
      </div>
      <button className="bg-green-300 w-full p-2 rounded-md mt-4">
        ⚡ Easy Apply
      </button>
    </div>
  );
}
