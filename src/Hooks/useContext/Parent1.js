import Child1 from "./Child1";
import React from "react";
import "./parent.css";
import { useContext } from "react";
import themeContext from "./Context/context";
import "./child2.css";

const Parent1 = () => {
  console.log("Parent1");

  // const dispatch = useDispatch();
  const theme = useContext(themeContext);

  return (
    <>
      <div className="parent">
        <div className="parent_body">
          <span>Parent1:</span>
          <button className={theme ? "light" : "dark"}>chnage theme</button>
        </div>

        <Child1 />
      </div>
    </>
  );
};

export default React.memo(Parent1);
