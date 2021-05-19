import { React, useEffect } from "react";
import MainRouter from "./router";
import "./App.css";

function App() {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return <MainRouter className="App" />;
}

export default App;
