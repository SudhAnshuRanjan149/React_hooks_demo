import "./Index.css";
import { useState } from "react";

import UseEffect from "./UseEffect.js";
const Index = () => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div className="useEffect_body">
        <h1>UseEffect</h1>
        <button onClick={() => setFlag(!flag)}>Toggle useEffect</button>
        {flag && <UseEffect />}
      </div>
    </>
  );
};
export default Index;
