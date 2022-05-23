import "./UseReducer.css";
import { useState, useReducer } from "react";
import UseReducer2 from "./UseReducer2/UseReducer2.js";
//Initial State
const initialState = 0;

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      throw new Error();
  }
};

//Action
const Increment = { type: "Increment" };

const UseReducer = () => {
  //useState
  const [counter, setCounter] = useState(0);

  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="useReducer_body">
        <h1>UseReducer Component</h1>
        <hr />
        <div>UseState</div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment
        </button>
        <button onClick={() => setCounter((prev) => prev - 1)}>
          Decrement
        </button>
        <hr />
        <div>UseReducer</div>
        <h2>Counter: {state}</h2>
        <button onClick={() => dispatch(Increment)}>Increment</button>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>

        <hr />
        <UseReducer2 />
      </div>
    </>
  );
};
export default UseReducer;
