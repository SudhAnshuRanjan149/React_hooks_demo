import "./styles.css";
import themeContext from "./Hooks/useContext/Context/context.js";
import { useState } from "react";
import React from "react";

import Parent1 from "./Hooks/useContext/Parent1.js";
import Parent2 from "./Hooks/useContext/Parent2.js";

import UseState from "./Hooks/useState/UseState.js";
import Index from "./Hooks/useEffect/Index.js";
import UseRef from "./Hooks/useRef/UseRef.js";
import UseMemo from "./Hooks/UseMemo/UseMemo.js";

function App() {
  const [theme, setTheme] = useState(false);
  console.log("App");

  return (
    <div className="App">
      App page
      <themeContext.Provider value={theme}>
        <button onClick={() => setTheme(!theme)}>change theme</button>
        <Parent1 />
        <Parent2 />
        <UseState />
        <Index />
        <UseRef />
        <UseMemo />
      </themeContext.Provider>
    </div>
  );
}
export default React.memo(App);
