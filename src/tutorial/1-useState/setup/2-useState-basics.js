import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const changeTitle = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  console.log(text);
  return (
    <React.Fragment>
      <h1>useState basic example</h1>
      <h2>{text}</h2>
      <button className="btn" onClick={changeTitle}>
        Change State
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
