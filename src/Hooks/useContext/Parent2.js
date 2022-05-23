import Child2 from "./Child2.js";
import Child1 from "./Child1.js";
import React from "react";
import { useContext } from "react";
import themeContext from "./Context/context";

const Parent2 = () => {
  console.log("Parent2");

  const { theme, setTheme } = useContext(themeContext);

  return (
    <>
      <div className="parent">
        <div>
          <span>Parent2:</span>
          <button onClick={() => setTheme(!theme)}>change theme</button>
        </div>
        <Child1 />
        <Child2 />
      </div>
    </>
  );
};

export default React.memo(Parent2);
