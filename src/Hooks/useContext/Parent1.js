import Child1 from "./Child1";
import React from "react";
import "./parent.css";
import { useContext } from "react";
import themeContext from "./Context/context";
import "./child2.css";

const Parent1 = () => {
  console.log("Parent1");

  const { theme, setTheme } = useContext(themeContext);

  return (
    <>
      <div className="parent">
        <div className="parent_body">
          <span>Parent1:</span>
          <button
            onClick={() => setTheme(!theme)}
            className={theme ? "light" : "dark"}
          >
            change theme
          </button>
        </div>

        <Child1 />
      </div>
    </>
  );
};

export default React.memo(Parent1);
