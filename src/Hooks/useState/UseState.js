import "./UseState.css";
import { useState } from "react";

const InitialValueFromHeavyOpp = () => {
  console.log("called");
  return 0;
};

const UseState = () => {
  const [name, setName] = useState("Anshu");
  const [name2, setName2] = useState("");
  const [flag, setFlag] = useState(false);
  // const [number, setNumber] = useState(0);

  //Whwn initial value of UseState comming from a heavy Operation then initiate like below to optimize this
  const [number, setNumber] = useState(() => InitialValueFromHeavyOpp());
  // const [number, setNumber] = useState(() => {
  //   console.log("clicked");
  //   return 0;
  // });

  const [names, setNames] = useState([]);

  const toggleName = () => {
    if (name === "Anshu") {
      setName("Sudhanshu");
    } else {
      setName("Anshu");
    }
  };

  const Increment = () => {
    // console.log("clicked!!!");
    setNumber((prev) => prev + 1);
  };
  const Decrement = () => {
    // console.log("clicked!!!");
    setNumber((prev) => prev - 1);
  };

  const addName = (e) => {
    e.preventDefault();
    setNames([...names, name2]);
    setName2("");
  };
  const deleteName = (name) => {
    setNames((prev) => prev.filter((nam) => nam !== name));
  };
  return (
    <>
      <div className="UseState_body">
        <h1>UseState</h1>
        <div>My Name is : {name}</div>
        <button onClick={toggleName}>Toggle Name</button>
        <hr />
        <div>Flag value is: {flag + ""}</div>
        <button onClick={() => setFlag(!flag)}>Change flag</button>
        <hr />
        <button onClick={Increment}>+</button>
        <div>{number}</div>
        <button onClick={Decrement}>-</button>
        <hr />
        <form onSubmit={addName}>
          <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Add Names"
          />
          <button>Add</button>
        </form>
        <hr style={{ width: "50%" }} />
        {names.length !== 0 &&
          names.map((name) => {
            return (
              <>
                <div style={{ display: "flex" }}>
                  <li key={name}>{name}</li>
                  <button onClick={() => deleteName(name)}>X</button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default UseState;
