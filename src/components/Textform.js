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
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleReverse = () => {
    setText(text.split("").reverse().join(""));
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
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      document.getElementById("copy").innerHTML = "Copied!";
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleClear = () => {
    setText("");
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
        <button className="btn btn-primary mt-2 me-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mt-2 me-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mt-2 me-2" onClick={handleReverse}>
          Reverse Text
        </button>
        <button className="btn btn-primary mt-2 me-2" onClick={handleAltCase}>
          Convert to aLtErNaTiNg CaSe
        </button>
        <button
          id="copy"
          className="btn btn-primary mt-2 me-2"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mt-2 me-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#262938" }}
      >
        <h3>Text Summary</h3>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Min to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
