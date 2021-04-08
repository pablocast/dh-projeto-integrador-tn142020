import MainRouter from "./router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
