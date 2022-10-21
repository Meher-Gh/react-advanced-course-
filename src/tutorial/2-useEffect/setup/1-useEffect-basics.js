import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //side effect runs every time the value changes
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `new messages ${value}`;
    }
  }, [value]);

  //side effect runs only after the first runder
  useEffect(() => {
    console.log("hello");
  }, []);
  console.log("render");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        +
      </button>
    </>
  );
};

export default UseEffectBasics;
