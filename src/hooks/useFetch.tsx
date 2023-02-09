import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

// Custom hook that fetches data from the API using axios
// It is set to timeout after 10 seconds if no response is received
function useFetch(url: string) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true); // set the loading state to true by default

  const fetchData = async () => {
    try {
      // Fetch the data from the API using axios
      const res = await axios.get(url, {
        timeout: 10000,
      });
      setResponse(res.data); // Set the response to the data received from the API
    } catch (error) {
      const err = error as AxiosError; // Cast the error to an AxiosError
      setError(err?.message); // Set the error to the error message received from the API
    } finally {
      setIsLoading(false); // Set the loading state to false once the data has been fetched or an error has been received
    }
  };

  // Run the fetch function only once when the component mounts
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, isLoading };
}

export default useFetch;

catch (error) {
  const err = error as AxiosError
  console.log(err.response?.data)
}
