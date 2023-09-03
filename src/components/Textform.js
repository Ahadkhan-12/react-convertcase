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
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(71 76 92)" : "white",
              color: props.mode === "dark" ? "white" : "#262938",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          style={{ backgroundColor: props.color }}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
          style={{ backgroundColor: props.color }}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleReverse}
          style={{ backgroundColor: props.color }}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleAltCase}
          style={{ backgroundColor: props.color }}
        >
          Convert to aLtErNaTiNg CaSe
        </button>
        <button
          disabled={text.length === 0}
          id="copy"
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
          style={{ backgroundColor: props.color }}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
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
          {text.split(/\s+/).filter(String).length} Words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(/s+/).filter(String).length} Min to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
