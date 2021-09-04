import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (axiosParams) => {
  const [Data, setData] = useState();
   const [Search, setSearch] = useState("");



  const [error, setError] = useState("");

const [loading, setLoading] = useState(false);

  const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=30ee1107f5cb26e8b60960dfc8d1d433=${Search}`;
  axios.defaults.baseURL = `${baseURL}`;
  const fetchData = async (params) => {
    setLoading(true);
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams, Search]);

  return { Data, error, loading, setSearch, setLoading };
};

export default useAxios;
