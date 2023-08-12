import { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262938";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="Ares"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Textform heading="Enter the text to modify" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
