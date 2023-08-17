import { useContext } from "react";
import { myContext } from "../context/context";

function MyContext() {
  return useContext(myContext);
}

export default MyContext;
