// change the file name to typescript and run it , its made for testing purpeses

import React, { useState } from "react";
import styled from "styled-components";
// interface ErrorExampleProps {
//   message: string;
// }

const ErrorExample /*: FC<ErrorExampleProps>*/ = (props) => {
  const { message } = props;

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  // const plus = ()=> {
  //   setCounter(counter + 1)
  // }

  // const minus = ()=> {
  //   setCounter(counter === 0 ? 0 : counter -1 )
  // }

  const handleChange = (event) => {
    setStep(Number(event.target.value));
  };

  const handleCounter = (step) => {
    const x = counter >= 100 ? (step < 0 ? -1 : 1) : step;
    setCounter(counter + x <= 0 ? 0 : counter + x);
  };

  return (
    <>
      {counter <= 99 && (
        <input
          type="number"
          placeholder="step..."
          value={step}
          onChange={handleChange}
        />
      )}
      <SErrorExample>
        <button onClick={() => handleCounter(step * -1)}>-</button>
        <h2>{counter}</h2>
        <button onClick={() => handleCounter(step)}>+</button>
      </SErrorExample>
    </>
  );
};
const SErrorExample = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  > button {
    background-color: blue;
    width: 50px;
    color: white;
    font-size: 30px;
  }
`;

export default ErrorExample;
