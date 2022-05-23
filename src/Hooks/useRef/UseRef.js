import "./UseRef.css";
import React from "react";
import { useState, useRef, useEffect } from "react";

const UseRef = () => {
  /*
    1. DOM Reference
    2. useRef for storing the previous state
    3. hold mutable value prevent re-render of component
  */
  console.log("useref");

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const inputElement = useRef("");
  const prevCount = useRef("");

  const resetInput = () => {
    setName("");
    inputElement.current.focus();
  };

  const updateCounter = () => {
    setCount2(count);
    setCount(Math.ceil(Math.random() * 100));
  };
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <div className="useref_body">
        <h1>UseRef Component</h1>
        <hr />
        <input
          ref={inputElement}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetInput}>Reset</button>
        <div>My name is : {name}</div>
        <hr />
        <div>Random Counter : {count}</div>
        {typeof prevCount.current !== "undefined" && (
          <div>Prvious Counter State: {prevCount.current}</div>
        )}
        <div>Prvious Count2 State: {count2}</div>
        <button onClick={updateCounter}>Reset</button>
      </div>
    </>
  );
};

export default React.memo(UseRef);
