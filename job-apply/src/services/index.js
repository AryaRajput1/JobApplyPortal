import { useEffect, useState } from "react";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const useFetchJobsList = (limit = 10, offset) => {
    const [jobList, setJobList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const raw = JSON.stringify({
        limit,
        offset
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        // raw
    };
    useEffect(() => {
        setIsLoading(true)
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setJobList(prev => ([...prev, ...result.jdList]))
                setIsLoading(false)
            })
            .catch((error) => console.error(error));
    }, [offset])
    return { isLoading, jobList }
}