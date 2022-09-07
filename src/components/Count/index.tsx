import React from "react";
import { ButtonLess, ButtonMore, CountBlock } from "./styles";
import { useCount } from "../../context/Count";

const Count: React.FC = () => {
  const { count, setCount } = useCount();

  function countLess() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  }

  return (
    <>
      <CountBlock>
        <ButtonLess onClick={() => setCount(countLess)}>-</ButtonLess>
        <p>{count}</p>
        <ButtonMore onClick={() => setCount(count + 1)}>+</ButtonMore>
      </CountBlock>
    </>
  );
};

export default Count;
