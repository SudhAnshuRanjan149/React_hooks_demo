import "./styles.css";
import themeContext from "./Hooks/useContext/Context/context.js";
import { useState } from "react";
import React from "react";

import UseContext from "./Hooks/useContext/UseContext.js";
import UseReducer from "./Hooks/UseReducer/UseReducer.js";
import UseState from "./Hooks/useState/UseState.js";
import Index from "./Hooks/useEffect/Index.js";
import UseRef from "./Hooks/useRef/UseRef.js";
import UseMemo from "./Hooks/UseMemo/UseMemo.js";
import Data from "./Hooks/CustomHook/Data.js";

function App() {
  const [theme, setTheme] = useState(false);
  console.log("App");

  return (
    <div className="App">
      App page
      <themeContext.Provider value={{ theme, setTheme }}>
        <button onClick={() => setTheme(!theme)}>change theme</button>
        <UseContext />
        <UseState />
        <Index />
        <UseRef />
        <UseMemo />
        <UseReducer />
        <Data />
      </themeContext.Provider>
    </div>
  );
}
export default React.memo(App);
