import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const [color, setcolor] = useState("blue");
  const showAlert = (message, type) => {
    setalert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262938";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils-Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };

  const changeColor = () => {
    if (color === "blue") {
      setcolor("red");
    } else {
      setcolor("blue");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          color={color}
          changeColor={changeColor}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter the text to modify"
                  mode={mode}
                  showAlert={showAlert}
                  color={color}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
