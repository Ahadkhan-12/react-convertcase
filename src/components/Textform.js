import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
    document.getElementById("copy").innerHTML = "Copy to Clipboard";
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleReverse = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Reversed Text", "success");
  };

  const handleAltCase = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
    props.showAlert("Converted to Alternating Case", "success");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      document.getElementById("copy").innerHTML = "Copied!";
      props.showAlert("Text Copied", "success");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.mode === "dark" ? "white" : "#262938" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#262938" : "white",
              color: props.mode === "dark" ? "white" : "#262938",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mt-2 me-2"
          style={{ backgroundColor: props.color }}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mt-2 me-2"
          onClick={handleLoClick}
          style={{ backgroundColor: props.color }}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mt-2 me-2"
          onClick={handleReverse}
          style={{ backgroundColor: props.color }}
        >
          Reverse Text
        </button>
        <button
          className="btn btn-primary mt-2 me-2"
          onClick={handleAltCase}
          style={{ backgroundColor: props.color }}
        >
          Convert to aLtErNaTiNg CaSe
        </button>
        <button
          id="copy"
          className="btn btn-primary mt-2 me-2"
          onClick={handleCopy}
          style={{ backgroundColor: props.color }}
        >
          Copy to Clipboard
        </button>
        <button
          className="btn btn-primary mt-2 me-2"
          onClick={handleClear}
          style={{ backgroundColor: props.color }}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#262938" }}
      >
        <h3>Text Summary</h3>
        <p>
          {text.split(" ").filter(String).length} Words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} Min to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
