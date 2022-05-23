import React from "react";
import { useContext } from "react";
import themeContext from "./Context/context";

const Child1 = () => {
  const { theme, setTheme } = useContext(themeContext);

  console.log("child1");
  return (
    <>
      <div>
        <span>Child1:</span>
        <button onClick={() => setTheme(!theme)}>change theme</button>
      </div>
    </>
  );
};

export default React.memo(Child1);
