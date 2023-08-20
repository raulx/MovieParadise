import { createContext, useState } from "react";
import axios from "axios";

const myContext = createContext();

function Provider({ children }) {
  const [type, setType] = useState("Hollywood");
  const [genre, setGenre] = useState("Action");
  const [data, setData] = useState([]);

  const handleTypeAction = (action) => {
    setType(action.name);
  };
  const handleGenreAction = (action) => {
    setGenre(action.name);
  };
  const getData = async function () {
    let result;
    try {
      // const fetch = await axios.get(`http://127.0.0.1:3001/${type}/${genre}`);
      const fetch = await axios.get(
        `https://movieparadisemockdb.onrender.com/${genre}`
      );
      result = await fetch.data;
    } catch (err) {
      result = new Error("Something went wrong..");
    }
    setData(result);

    return result;
  };
  const value = {
    data,
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
