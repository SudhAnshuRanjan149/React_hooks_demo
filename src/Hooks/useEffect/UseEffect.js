import { useState, useEffect } from "react";

const UseEffect = () => {
  const [time, setTime] = useState(new Date().toString());
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    console.log("Component Mounted or Updated");
    const interval = setInterval(showDate, 1000);

    return () => {
      console.log("clean Up of interval");
      clearInterval(interval);
    };
  }, []);

  const changeScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", changeScreenWidth);

    return () => {
      console.log("remove event");
      window.removeEventListener("resize", changeScreenWidth);
    };
  }, []);

  const showDate = () => {
    setTime(new Date().toString());
  };

  return (
    <>
      <h2>UseEffect Component</h2>
      <div>{time}</div>
      <button onClick={showDate}>Show Date</button>
      <hr />
      <div>The Actual Screenwidth is: </div>
      <div>{screenWidth}</div>
    </>
  );
};
export default UseEffect;
