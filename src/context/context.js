import { createContext, useState, useEffect } from "react";
import axios from "axios";

const myContext = createContext();

function Provider({ children }) {
  const [type, setType] = useState("Hollywood");
  const [genre, setGenre] = useState("Action");
  const [data, setData] = useState([]);
  const [isError, setError] = useState({ status: false, message: null });
  const [isFetching, setIsfetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);
  const handleTypeAction = (action) => {
    setType(action.name);
  };
  const handleGenreAction = (action) => {
    setGenre(action.name);
  };
  const getData = async function () {
    let result;
    setIsfetching(true);
    try {
      // const fetch = await axios.get(`http://127.0.0.1:3001/${type}/${genre}`);
      const fetch = await axios.get(
        `https://movieparadisemockdb.onrender.com/${type}/${genre}/`
      );
      result = await fetch.data;
      setData(result);
      setIsfetching(false);
    } catch (err) {
      setIsfetching(false);
      let errorObj = {};

      if (err.response && err.response.status === 404) {
        errorObj = { ...isError, status: true, message: "404:Not Found" };
      } else {
        errorObj = { ...isError, status: true, message: err.message };
      }
      setError(errorObj);
      console.log(isError);
    }

    return result;
  };
  const value = {
    data,
    isError,
    isFetching,
    genre,
    setGenre,
    type,
    setType,
    getData,
    handleTypeAction,
    handleGenreAction,
  };

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
}

export default Provider;
export { myContext };
