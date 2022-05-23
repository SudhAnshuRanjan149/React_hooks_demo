import React, { useState, useMemo } from "react";
import "./UseMemo.css";

const UseMemo = () => {
  /*
  1.  Optimize Expensive Operation
  2.  Referential Equality
  */
  const [counter, setCounter] = useState(1);

  const [name, setName] = useState("");

  // const result = Factorial(counter);
  //to optimize this function, we can use useMemo --> call it only when counter chnaged --> not on every render
  const result = useMemo(() => {
    return Factorial(counter);
  }, [counter]);

  return (
    <>
      <div className="useMemo_body">
        <h1>UseMemo Component</h1>
        <hr />
        <h2>
          Factorial of {counter} is : {result}
        </h2>
        <button
          onClick={() => {
            setCounter((prev) => {
              if (prev !== 0) {
                return prev - 1;
              } else {
                return 0;
              }
            });
          }}
        >
          Decrement
        </button>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment
        </button>

        <hr />
        <div>Enter Name</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        <div>My Name is : {name}</div>
      </div>
    </>
  );
};

const Factorial = (number) => {
  console.log("called here");
  if (number === 0) {
    return 1;
  }
  return number * Factorial(number - 1);
};

export default UseMemo;
