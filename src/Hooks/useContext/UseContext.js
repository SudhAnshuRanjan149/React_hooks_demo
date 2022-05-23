import Parent1 from "./Parent1";
import Parent2 from "./Parent2";
import "./UseContext.css";

const UseContext = () => {
  return (
    <>
      <div className="useContext_body">
        <h1>UseContext Component</h1>
        <Parent1 />
        <Parent2 />
      </div>
    </>
  );
};

export default UseContext;
