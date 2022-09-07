import React from "react";
import { ButtonLess, ButtonMore, CountBlock } from "./styles";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slices/counter";

const Count: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  function countLess() {
    if (count > 1) {
      dispatch(decrement());
    }
  }

  return (
    <>
      <CountBlock>
        <ButtonLess onClick={() => countLess()}>-</ButtonLess>
        <p>{count}</p>
        <ButtonMore onClick={() => dispatch(increment())}>+</ButtonMore>
      </CountBlock>
    </>
  );
};

export default Count;
