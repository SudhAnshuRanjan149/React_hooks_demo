import { useContext } from "react";
import React from 'react';
import themeContext from "./Context/context";
import "./child2.css";

const Child2 = () => {
  const theme = useContext(themeContext);
  console.log("child2");

  return (
    <>
      <div className={theme ? "light" : "dark"}>
        Child2
        <div>
          <button>chnage theme</button>
        </div>
      </div>
    </>
  );
};

export default React.memo(Child2);
