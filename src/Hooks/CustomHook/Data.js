import { useState, useEffect } from "react";
import "./Data.css";
import useFetch from "./useFetch.js";

const Data = () => {
  // const [data, setData] = useState(null);

  //******************************************* */
  //fetch by then chaining
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  //******************************************** */

  //fetch by async-await
  // const fetchData = async() => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const actualData = await res.json();
  //   setData(actualData);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //******************************************** */

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <div className="Data_body">
        <h1>Data</h1>
        <hr />
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    </>
  );
};
export default Data;
