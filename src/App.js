import { Route, Routes } from "react-router-dom";
import "./App.css";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javaScript";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
      </Routes>
    </div>
  );
}

export default App;
