import React, { useState } from "react";

export default function About() {
  const [btntext, setBtntext] = useState("Enable Dark Mode");
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleMode = () => {
    if (mode.color === "black") {
      setMode({
        color: "white",
        backgroundColor: "black",
      });
      setBtntext("Enable Light Mode");
    } else {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      setBtntext("Enable Dark Mode");
    }
  };
  return (
    <div className="container" style={mode}>
      <h2 className="my-2">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mode}
            >
              About
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Convert Case is a free online text manipulator that allows users
              to convert text between different letter cases such as lower case,
              UPPER CASE, Sentence case, Capitalized Case, aLtErNaTiNg cAsE and
              more. The website is designed to be easy to use and offers a
              plethora of options when it comes to converting cases. Users can
              also use the website to generate small and wide text,
              strikethrough text, reverse text, upside-down text, Morse code,
              binary code, title case, bold text, italic text, underline text,
              mirror text, Unicode text, bubble text, Zalgo glitch text,
              invisible text, ASCII art, repeat text, JSON stringify text, UTF-8
              encoder/decoder, hex to text converter, CSV to JSON converter,
              slugify URL generator, UTM builder generator, Wingdings converter
              and duplicate line remover. The website also provides a sentence
              case converter that allows users to paste any text they'd like and
              it will automatically transform it into a fully formed structured
              sentence. It works by capitalizing the very first letter in each
              sentence and will then go on to transform the rest of the text
              into lowercase as well as converting i's into I's. Every letter
              after a full stop will get converted into an uppercase letter.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mode}
            >
              Made using
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>React </strong>
              Html , CSS , Javascript , Bootstrap
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleMode}>
          {btntext}
        </button>
      </div>
    </div>
  );
}
