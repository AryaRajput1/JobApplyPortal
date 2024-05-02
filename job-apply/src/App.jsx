import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import JobList from "./components/JobList";
import Filter from "./components/filter/Filter";
import { useFetchJobsList } from "./services";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const App = () => {
  const [offset, setOffset] = useState(0);
  const [allFilters, setAllFilters] = useState({});
  const { isLoading, jobList } = useFetchJobsList(10, offset, allFilters);
  

  const scrollHandler = (e) => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setOffset((prev) => prev + 1);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, []);
  return (
    <>
      <Header />
      <Filter setAllFilters={setAllFilters}/>
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
