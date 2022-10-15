import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const decrease = () => {
    setValue(value - 1);
  };

  const increse = () => {
    setValue(value + 1);
  };

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <s></s>
        <button className="btn" onClick={increse}>
          +
        </button>
        <button className="btn" onClick={decrease}>
          -
        </button>
        <div>
          <button className="btn" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section style={{ margin: "4rem" }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
