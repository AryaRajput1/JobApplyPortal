import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import JobList from "./components/JobList";
import Filter from "./components/filter/Filter";
import { useFetchJobsList } from "./services";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const App = () => {
  const [offset, setOffset] = useState(0);
  const { isLoading, jobList } = useFetchJobsList(10, offset);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight) {
        setOffset( prev => prev + 1);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <Filter />
      <JobList list={jobList} />
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>{" "}
        </div>
      )}
    </>
  );
};

export default App;
