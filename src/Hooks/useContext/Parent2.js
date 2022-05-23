import Child2 from "./Child2.js";
import Child1 from "./Child1.js";
import React from 'react';

const Parent2 = () => {
  console.log("Parent2");
  return (
    <>
      <div className="parent">
        <div>
          <span>Parent2:</span>
          <button>chnage theme</button>
        </div>
        <Child1 />
        <Child2 />
      </div>
    </>
  );
};

export default React.memo(Parent2);
